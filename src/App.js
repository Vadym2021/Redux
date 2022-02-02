import React from 'react';
import {Form,Tasks} from "./components";
import Countes from "./components/countes/Countes";

const App = () => {
    return (
        <div>
            <Countes/>
            <Form/>
            <Tasks/>
        </div>
    );
};

export default App;
