import React from "react";
import { Form } from "react-bootstrap";
import "../../styles/PlanTask.css";

const AddNewBucket = ({
    onClickAddNewBucket,
    clickedAddNewBucket,
    inputBucketTitle,
    onChange,
    onBlurInputAddNewBucket
}) => (
    <div
        className="mb-3 bucketTitle"
        onClick={() => onClickAddNewBucket()}
    >
        {(clickedAddNewBucket)
            ? <Form.Control
                type="text"
                name="inputBucketTitle"
                value={inputBucketTitle}
                onChange={(e) => onChange({inputBucketTitle: e.target.value})}
                autoFocus
                onBlur={onBlurInputAddNewBucket}
                placeholder="Bucket name"
            />
            : <span>
                + Add new bucket
            </span>
        }
    </div>
) 

export default AddNewBucket
