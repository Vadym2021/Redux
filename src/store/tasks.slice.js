import {createSlice} from "@reduxjs/toolkit";

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
            // state.tasks = state.tasks.filter(task => task.id === action.payload.id)
            // console.log(state.task.status)

            state.tasks.status = !state.tasks.status;
            state.countCompleted += 1;
            console.log(state.task.status)


        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
            state.countAll -= 1;


        },
    },
    extraReducers: {}
});

export const {addTask, checkBoxChange, deleteTask} = taskSlice.actions;
export default taskSlice.reducer;