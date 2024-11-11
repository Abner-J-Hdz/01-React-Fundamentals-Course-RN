
export const BasicTypes = () => {

    const name: string = "Abner"
    const age: number = 26;
    const isActive: boolean = false
    const power: string[] = ['React', 'React Native', 'Angular']


    return (
    <>
        <h3>Tipos basicos</h3>
        <p>{name}</p>
        <p>{age}</p>
        {isActive ? 'true' : 'false'}
        <p>{power.join(', ')}</p>
    </>
    )
}
