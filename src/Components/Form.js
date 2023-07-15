import React,{useState} from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [warning, setWarning] = useState(false);
    const [success, setSuccess] = useState(false);

    const errorMessage = "Error: Please make sure your password and confirm password field matches!";
    const warningMessage = "Error: All fields are mandatory!";
    const successMessage = "Signup Successfully!";

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !password || !confirmPassword){
            setIsError(false);
            setSuccess(false);
            setWarning(true);
        }
        else if(password !== confirmPassword){
            setWarning(false);
            setSuccess(false);
            setIsError(true);
        }
        else{
            setIsError(false);
            setWarning(false);
            setSuccess(true);
        }
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit">Sign Up</button>
                {
                    isError && <p className="error">{errorMessage}</p>
                }

                {
                    warning && <p className="error">{warningMessage}</p>
                }

                {
                    success && <p className="success">{successMessage}</p>
                }
            </form>
        </div>
    )
}

export default Form;