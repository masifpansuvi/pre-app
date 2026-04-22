import { FC } from "react"

type WelcomeMessageProps = {
    isLogedIn: boolean,
    user?: {
        name: string,
        type: 'Admin' | "Moderator" | 'User'
    }
}

const WelcomeMessage: FC<WelcomeMessageProps> = ({isLogedIn, user}) => {
    if (user?.type == "Moderator"){
            <h1>ASK ADMIN FOR ACCESS</h1>
        } else if( user?.type == "Admin" ) {
            return <>NO ACCES</>
        } 
    return (
        <>
             {/* ternary operator */}
            {isLogedIn ? <h1>LOGED IN</h1> : <h1>LOGED OUT</h1>}
            {/* LOGICAL && OPERATOR */}
            {user && <h1>Hello, {user.name}</h1>}

        </>
    )
    
}

export default WelcomeMessage;