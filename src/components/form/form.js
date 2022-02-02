import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addTask} from "../../store/tasks.slice";

const Form = () => {
    const dispatch = useDispatch();

    const {handleSubmit, reset, register} = useForm();

    const submit = (data) => {
        dispatch(addTask({data}));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'task'} {...register('task')}/>
                <button>Save</button>
            </form>

        </div>
    );
};

export {Form};