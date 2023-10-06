import React, {useState} from "react";

import DefaultButton from "./components/Button/DefaultButton";
import TestButton from "./components/Button/TestButton";


function App() {
    const [checker, setChecker] = useState(true)

    const enableBtn = () =>  {
        setChecker(!checker)
    }

    return (
        <>
        <button onClick={enableBtn}>Set enabled</button>
        <DefaultButton check={checker} children='approve' />
        <TestButton check={checker} children='test props'/>
        </>
    );
}
export default App;
