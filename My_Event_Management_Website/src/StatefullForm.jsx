import { useState } from "react";

const RequestForProposal = () => {
    const [email, setEmail] = useState('Hala@gmail.com');
    const [password, setPassword] = useState('');
    const handleFormSubmit = e=>{
        e.preventDefault();
        console.log(email);
        console.log(password);
    }
    const handleEmailChange = e=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e=>{
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name='name'/><br />
                <input value={email} onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RequestForProposal;