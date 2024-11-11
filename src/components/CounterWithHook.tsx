import { useCounter } from "../hooks/useCounter"

const CounterWithHook = () => {

  const { counter, increaseBy } = useCounter({})

  return (
    <>
        <h3> Contador: <small>{counter}</small></h3>
        <div>
          <button onClick={()=> increaseBy(1)} >
            +1
          </button>
          &nbsp;
          <button 
            onClick={() => increaseBy(-1)} 
            disabled={counter === 0}
          >
            -1
          </button>
        </div>
    </>
  )
}

export default CounterWithHook

