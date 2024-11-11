import { useState } from "react"



const Counter = () => {

  const [counter, setCounter] = useState<number>(0)

  const increaseBy = (value:number) => {
    setCounter(counter + value)
  }

  return (
    <>
        <h3> Contador: <small>{counter}</small></h3>
        <div>
          <button onClick={()=> increaseBy(1)} >
            +1
          </button>
          &nbsp;
          <button onClick={() => increaseBy(-1)} >
            -1
          </button>
        </div>
    </>
  )
}

export default Counter