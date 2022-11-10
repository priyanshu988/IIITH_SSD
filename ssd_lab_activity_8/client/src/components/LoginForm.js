import "./LoginForm.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BACKEND_URI = "http://localhost:3000/api/";

// functional component
function LoginForm(props) {
    const [rollnumber, setRollNumber] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/student');
    }

    return (
        <div className="center-div">
            <h1 className='text-center'>LOGIN</h1>
            <hr />
            <form className='form-group'>
                <label className='m-2 form-label'>Roll Number : </label>
                <br />
                <input className='m-2 form-control' type="text" name="rollnumber" value={rollnumber} onChange={(e) => setRollNumber(e.target.value)} />
                <br />
                <label className='m-2 form-label'>Password : </label>
                <br />
                <input className='m-2 form-control' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <label className='m-2 form-label' for="role">Select Role:</label>
                <select className='m-2 form-control' id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option>Choose Role</option>
                    <option value="student">Student</option>
                    <option value="ta">TA</option>
                </select>
                <br />
            </form>
            <button className='btn btn-primary position-relative start-50 translate-middle-x' onClick={async (e) => {
                // send fetch (POST) request to server
                const requestOptions = {
                    credentials: 'include',
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ rollnumber: rollnumber, password: password, role: role })
                };

                var res = await fetch(BACKEND_URI + "login", requestOptions);
                alert((await res.json())["msg"]);
                setRollNumber("");
                setPassword("");
                setRole("");
                
                if (res.status == 200) {
                    sessionStorage.setItem("curr_email", rollnumber);
                    navigateToProfile();
                }
            }}>Login</button>
            <br /><hr />
            <p className='m-4'>Do not have an account ? <Link to='/signup'> Sign Up Here</Link> </p>
        </div>);
}

export default LoginForm;