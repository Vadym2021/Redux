import React from 'react';

import {checkBoxChange} from "../../store/tasks.slice";
import {useDispatch} from "react-redux";

import {deleteTask} from "../../store/tasks.slice";

const Task = ({task: {id, task, status}}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <input type="checkbox" checked={task.status} onChange={() => dispatch(checkBoxChange({status}))}/>
            {/*<div>{task.id}</div>*/}
            <div>{task}</div>
            <div>
                <button onClick={() => dispatch(deleteTask({id}))}>Delete</button>
            </div>

        </div>
    );
};

export {Task};