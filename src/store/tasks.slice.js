import {createSlice} from "@reduxjs/toolkit";
import {Task} from "../components";
import React from "react";

const initialState = {
    tasks: [],
    countAll: 0,
    countCompleted: 0
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: new Date().getTime(),
                status: false,
                ...action.payload.data
            })
            // state.countAll = state.countAll + 1;
            state.countAll += 1;
        },
        checkBoxChange: (state, action) => {

            const task = state.tasks.find(task => task.id === action.payload.id);
            task.status = !task.status


            if (task.status === true) {
                state.countCompleted += 1;
            } else
            state.countCompleted -= 1;
            // state.tasks = state.tasks.filter(task => task.id === action.payload.id)
            // console.log(state.task.status)
            // console.log(action.payload.status)
            //
            // state.tasks = state.tasks.map(task => task.id === action.payload.id
            //     ? state.tasks.push({
            //         id: action.payload.id,
            //         status: !task.status,
            //         task: action.payload.task
            //         }
            //
            //         )
            //
            //     // task.status = !task.status
            //     : state.tasks.push({
            //         id: action.payload.id,
            //         status: task.status,
            //         task: action.payload.task
            //     })

            // )

            // state.task.status = !state.tasks.status;
            // state.countCompleted += 1;

            console.log(state.tasks)


        },
        deleteTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
            state.countAll -= 1;
            console.log(task.status)
            if (task.status === true) {
                state.countCompleted -= 1;
            }



        },
    },
    extraReducers: {}
});

export const {addTask, checkBoxChange, deleteTask} = taskSlice.actions;
export default taskSlice.reducer;