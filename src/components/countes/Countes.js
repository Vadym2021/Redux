import React from 'react';
import {useSelector} from "react-redux";

const Countes = () => {
    const {countAll, countCompleted} = useSelector(state => state.tasks);

    return (
        <div>
            All: {countAll}
            Completed: {countCompleted}
        </div>
    );
};

export default Countes;