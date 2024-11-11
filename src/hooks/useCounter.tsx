import { useState } from 'react'

interface Options{
  initValue?: number
}

export const useCounter = ({ initValue = 0 }:Options) => {

    const [counter, setCounter] = useState<number>(initValue)

    const increaseBy = (value:number) => {
      const newValue =  counter + value;
      if (newValue < 0)
        return
      setCounter(counter + value)
    }    

  return {
    //Propiedades
    counter,

    //Metodos
    increaseBy
  }
}
