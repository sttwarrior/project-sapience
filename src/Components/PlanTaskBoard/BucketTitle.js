import React from "react";
import { Form } from "react-bootstrap";
import "../../styles/PlanTask.css";

const BucketTitle = ({
    idx,
    bucketTitle,
    onClickBucketTitle,
    clickedBucketIdx,
    inputBucketTitle,
    onChange,
    onBlurInputBucketTitle
}) => (
    <div
        className="mb-3 bucketTitle"
        onClick={() => onClickBucketTitle(bucketTitle, idx)}
    >
        {(clickedBucketIdx === idx)
            ? <Form.Control
                type="text"
                name="inputBucketTitle"
                value={inputBucketTitle}
                onChange={(e) => onChange({inputBucketTitle: e.target.value})}
                autoFocus
                onBlur={onBlurInputBucketTitle}
                placeholder="Bucket name"
            />
            : <span>
                {bucketTitle}
            </span>
        }
    </div>
) 


export default BucketTitle
