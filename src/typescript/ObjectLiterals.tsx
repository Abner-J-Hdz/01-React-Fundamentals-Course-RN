
interface Person {
    name:string
    lastname:string
    age: number
    address: Address
    isAlive?: boolean
}

interface Address{
    country: string
    houseNo: number 
}

export const ObjectLiterals = () => {

    const person : Person = {
        age: 26,
        name: "Abner",
        lastname: "Martinez",
        address: {
            country: "Nicaragua",
            houseNo: 572111
        }
    }

  return (
    <>
        <h3>Objectos Literales</h3>
        {JSON.stringify(person, null, 2)}
    </>
  )
}
