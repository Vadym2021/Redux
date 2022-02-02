import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Task} from "../task/task";

const Tasks = () => {
    const {tasks, countAll, countCompleted} = useSelector(state => state.tasks);

    console.log(tasks)

    return (
        <div>
            {
                tasks.map(task =><Task key={task.id} task={task}/>)
            }

        </div>
    );
};

export {Tasks};