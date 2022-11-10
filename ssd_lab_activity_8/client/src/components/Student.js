import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Student.css";

const BACKEND_URI = "http://localhost:3000/std/";

function Student(props) {
    const email = sessionStorage.getItem("curr_email");
    const [studentDetails, setStudentDetails] = useState([]);

    useEffect(() => {
        var res1 = async () => {
            const requestOptions = {
                credentials: "include",
                method: "GET",
                headers: { "Content-Type": "application/json" },
            };
            // console.log("role: ", role);
            var url = BACKEND_URI + "student/addQuery/" + String(email);
            const response = await fetch(url, requestOptions);
            if (response) {

                // sessionStorage.removeItem("curr_email");
                var jsonResponse = await response.json();
                console.log("res: ", jsonResponse.data);
                setStudentDetails(jsonResponse.data)
                console.log("studentDetails : ", studentDetails);
                console.log(typeof studentDetails);
                sessionStorage.setItem("curr_email", email);
                // navigateToStudentQuery();
            }
        };
        res1();
    }, []);


    const tableStyle = {
        width: 'fit-content',
        margin: 'auto',
        border: '1px solid black'
    };

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }
    const navigatetoaddquery = () => {
        navigate('/student/addQuery');
    }


    // If email is null it means the session variable is not set and hence the user 
    // has not logged in yet
    if (email == null) {
        return (<p>
            Please Login First.
            <button onClick={navigateToLogin} className='btn btn-primary'>
                Go To Login
            </button>
        </p>)
    }

    // control comes here if email is not null.
    return (<div className='container  mt-5 studentpage'>
        <div className='head'>
            <h1 className='heading'>FEEDBACKS</h1>
            <button className='headbutton' onClick={navigatetoaddquery}>Add New Query</button>
        </div>
        <hr className='hline' />

        <table className='datatable'>
            <tbody>
                
                {studentDetails.map(row => (
                    <tr className='tablerow'>
                        <td>
                        <hr/>
                            <div className='innertable'>
                                <table className='table1'>
                                    <tr><td className='innertd' >Exam Name : </td><td className='innertd1' >{row.examName} </td ></tr>
                                    <tr><td className='innertd' >Course Name : </td ><td  className='innertd1'>{row.courseName}</td ></tr>


                                </table>
                                <table className='table2' > 
                                    <tr><td className='innertd' >Question No : </td><td className='innertd1'>{row.questionNumber}</td ></tr>
                                    <tr><td className='innertd' >TA's Roll : </td><td className='innertd1' >{row.taRollNumber}</td></tr>
                                </table>
                            </div>
                            <table>
                                <tr><td className='innertd' >Your Comment : </td ><td className='innertd1' >{row.comment}</td ></tr>
                                <tr><td className='innertd' >TA's Response : </td ><td className='innertd1' >{row.ta_comment}</td ></tr>
                            </table>
                            <hr />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>);
}

export default Student;