import { useForm } from "react-hook-form"

type FormInputs = {
    email:string
    password:string
}

export const FormPage = () => {

    const { register, handleSubmit } = useForm<FormInputs>({
        defaultValues:{
            email: 'abner15jh@gmail.com',
            password: 'abc123456'
        }
    });

    const onSubmit = (myForm:FormInputs) => {
        console.log({myForm});
    }

  return (
    <>
        <h3>Formulario</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{display:'flex', flexDirection:'column'}}>
                <input type="text" placeholder="Email" {...register('email', {required:true })} />
                <input type="text" placeholder="password" {...register("password")} />
                <button type="submit" >Ingresar</button>
            </div>
        </form>
    </>
  )
}
