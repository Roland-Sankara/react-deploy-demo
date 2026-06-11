import {useState} from "react"

function Counter(props){
    
    let [count, setCount] = useState(0);

    function add(){
        setCount(count + 1);
    }

    function minus(){
        setCount(count - 1);
    }

    return (
        <div style={{border: "2px solid red", paddingTop: "40px", width: "30%", margin: "50px"}}>
            <h1>{count}</h1>
            <h2>{props.countValue}</h2>

            <button onClick={add}>Add From Counter</button>
            <button onClick={minus}>Minus</button>
        </div>
    )
}

export default Counter;