
export const BasicFunctions = () => {

    const addTwoNumber = (a: number, b:number): string => {
        return (a + b).toString();
    }

    return (
        <>
            <h3>BasicFunctions</h3>
            {addTwoNumber(2, 8)}
        </>
    )
}

