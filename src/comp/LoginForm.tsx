import { SyntheticEvent, useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const submit = (ev: SyntheticEvent) => {
        ev.preventDefault()
        const target = ev.target as HTMLFormElement; // take whole form element
        console.log(target, {
            email,
            password
        });
        setEmail("")
        setPassword("")
    }

    return (
        <>
        <form onSubmit={submit} className="flex flex-col gap-4">
            <input onChange={(ev) => {
                setEmail(ev.target.value);
            }} type="email" value={email} placeholder="Enter your email" />
            <input onChange={(ev)=> {setPassword(ev.target.value)}} 
            type="password" value={password} placeholder="Enter Your password" />
            <button className="submit">SUBMIT</button>
        </form>
    </>
    )
    
}
export default LoginForm;