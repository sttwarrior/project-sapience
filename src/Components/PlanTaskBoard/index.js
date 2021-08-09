import React from "react";
import BucketTitle from "./BucketTitle"
import PlanTask from "./PlanTask"
import AddNewTask from "./AddNewTask"
import AddNewBucket from "./AddNewBucket"
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import "../../styles/PlanTaskBoard.css";

class PlanTaskBoard extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            clickedBucketIdx: null,
            inputBucketTitle: null,
            clickedAddNewTask: null,
            inputTaskTitle: null,
        }
        this.onClickBucketTitle = this.onClickBucketTitle.bind(this)
        this.onBlurInputBucketTitle = this.onBlurInputBucketTitle.bind(this)
        this.onClickAddNewTask = this.onClickAddNewTask.bind(this)
        this.onBlurAddNewTask = this.onBlurAddNewTask.bind(this)
        this.onSubmitNewTask = this.onSubmitNewTask.bind(this)
        this.onClickAddNewBucket = this.onClickAddNewBucket.bind(this)
        this.onBlurInputNewBucket = this.onBlurInputNewBucket.bind(this)
        this.refInputAddNewTask = React.createRef();
    }

    componentDidMount() {
        this.props.fetchPlanInfo()
    }

    onClickBucketTitle(inputBucketTitle, idx) {
        this.setState({
            clickedBucketIdx: idx,
            inputBucketTitle: inputBucketTitle
        })
    }

    onClickAddNewTask(idx) {
        if(this.state.clickedAddNewTask===null) {
            this.setState({clickedAddNewTask: idx})
            document.addEventListener("click", this.onBlurAddNewTask, "useCapture")
        } 
    }

    onBlurAddNewTask(e) {
        const isOnBlur = e.target?.name !== "inputTaskTitle" 
            && e.target?.previousSibling?.name !== "inputTaskTitle"
        if(isOnBlur) {
            e.stopPropagation()
            document.removeEventListener("click", this.onBlurAddNewTask, "useCapture");
            this.setState({
                clickedAddNewTask: null
            })
        }
    }

    onSubmitNewTask(bucketTitle) {
        this.props.addNewTask({
            bucket: bucketTitle,
            taskTitle: this.refInputAddNewTask.current.value
        })
        this.setState({
            clickedAddNewTask: null
        })
        document.removeEventListener("click", this.onBlurAddNewTask, "useCapture");
    }

    onBlurInputBucketTitle() {
        this.props.updateBucketTitle(
            this.state.clickedBucketIdx,
            this.state.inputBucketTitle
        )
        this.setState({
            clickedBucketIdx: null,
            inputBucketTitle: null,
        })
    }

    onClickAddNewBucket(idx) {
        this.setState({
            clickedBucketIdx: idx,
            inputBucketTitle: ""
        })
    }

    onBlurInputNewBucket() {
        if(this.state.inputBucketTitle.trim()!=="") {
            this.props.addNewBucket(
                this.state.inputBucketTitle
            )
        }
        this.setState({
            clickedBucketIdx: null,
            inputBucketTitle: null,
        })
    }

    render(){

        const buckets = this.props?.planInfo?.buckets || []
        const tasks = this.props?.planInfo?.tasks || []

        // Move below to filter/sorting function
        // The function should be inherited from props
        const taskSorted = buckets.reduce((acc, cur) => (acc[cur]=[], acc), {})
        for (let task of tasks) {
            if(taskSorted[task.bucket]) taskSorted[task.bucket].push(task)
        }

        return(
            <Col>
                <Row className="pt-3 mb-3 task-header" fluid="true">
                    <Col md="auto">
                        <i className="bi-app mr-3" />
                        <span>{this.props.planInfo.title}</span>
                    </Col>
                </Row>
                <Row className="flex-nowrap overflow-auto task-body">
                    {buckets.map((bucketTitle, idx) => {                        
                        return(
                            <Col className="bucket" key={`bucket-${idx}`} md="3">
                                <BucketTitle 
                                    idx={idx}
                                    bucketTitle={bucketTitle}
                                    onClickBucketTitle={this.onClickBucketTitle}
                                    clickedBucketIdx={this.state.clickedBucketIdx}
                                    inputBucketTitle={this.state.inputBucketTitle}
                                    onChange={this.setState.bind(this)}
                                    onBlurInputBucketTitle={this.onBlurInputBucketTitle}
                                />
                                <AddNewTask
                                    idx={idx}
                                    bucketTitle={bucketTitle}
                                    onClickAddNewTask={this.onClickAddNewTask}
                                    clickedAddNewTask={this.state.clickedAddNewTask}
                                    refInputAddNewTask={this.refInputAddNewTask}
                                    onSubmitNewTask={this.onSubmitNewTask}
                                />
                                {taskSorted[bucketTitle].map((task, idx) => 
                                    <PlanTask key={`planTask-${idx}`} {...task} deleteTask={this.props.deleteTask} />
                                )}
                            </Col>
                        )
                    })}
                    <Col className="bucket" key={`bucket-${buckets.length}`} md="3">
                        <AddNewBucket 
                            onClickAddNewBucket={() => this.onClickAddNewBucket(buckets.length)}
                            clickedAddNewBucket={this.state.clickedBucketIdx === buckets.length}
                            inputBucketTitle={this.state.inputBucketTitle}
                            onChange={this.setState.bind(this)}
                            onBlurInputAddNewBucket={this.onBlurInputNewBucket}
                        />
                    </Col>
                </Row>
            </Col>
        )
    }  
}

export default PlanTaskBoard;
