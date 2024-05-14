import { useState } from "react";
import "./App.css";
import CounterComponent from "./component/CounterComponent";
import UserComponent from "./component/UserComponent";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <CounterComponent />
            <UserComponent />
        </>
    );
}

export default App;
