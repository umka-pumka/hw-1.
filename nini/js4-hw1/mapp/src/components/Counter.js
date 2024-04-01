import { useState } from "react"


function Counter() {
    const [state, setState] = useState(1)
    console.log(state);


    function handleAdd() {
        if (state < 20){
            setState(state + 1)  
        }
      
    }

    function handleRemuver() {
        if (state > 0){
            setState(state - 1)
        }
       
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleRemuver}>remuve</button>
        </div>
        
    )


}

export default Counter