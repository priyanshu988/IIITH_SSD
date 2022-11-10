import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Student.css";
import { Link } from 'react-router-dom';


const BACKEND_URI = "http://localhost:3000/std/";

function AddQuery(props) {
    const email = sessionStorage.getItem("curr_email");

    const [examName, setExamName] = useState("");
    const [courseName, setCourseName] = useState("");
    const [taRollNumber, setTARollNumber] = useState("");
    const [stdRollNumber, setStdRollNumber] = useState(String(email));
    const [comment, setComment] = useState("");
    const [questionNumber, setQuestionNumber] = useState("");


    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }
    const navigateToStudent = () => {
        navigate('/student');
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
        <div className='head head1'>
            <h1 className='heading'>ADD QUERY</h1>
        </div>
        <hr className='hline' />

        <div className="center-div">

            <form className='form-group'>
                <label className='m-2 form-label'>Student Roll No. : </label>
                <br />
                <input className='m-2 form-control' type="text" name="examName" value={stdRollNumber} onChange={(e) => setStdRollNumber(e.target.value)} disabled />
                <br />
                <label className='m-2 form-label'>Exam Name : </label>
                <br />
                <input className='m-2 form-control' type="text" name="examName" value={examName} onChange={(e) => setExamName(e.target.value)} />
                <br />
                <label className='m-2 form-label'>Course Name : </label>
                <br />
                <input className='m-2 form-control' type="text" name="courseName" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
                <br />
                <label className='m-2 form-label'>Question No. : </label>
                <br />
                <input className='m-2 form-control' type="text" name="questionNumber" value={questionNumber} onChange={(e) => setQuestionNumber(e.target.value)} />
                <br />
                <label className='m-2 form-label'>TA's Roll No. : </label>
                <br />
                <input className='m-2 form-control' type="text" name="TArollnumber" value={taRollNumber} onChange={(e) => setTARollNumber(e.target.value)} />
                <br />
                <label className='m-2 form-label'>Comment : </label>
                <br />
                <textarea className='m-2 form-control' type="text" name="questionNumber" value={comment} onChange={(e) => setComment(e.target.value)} />
                <br />
                <br />
            </form>
            <button className='postbtn btn btn-primary btn-lg position-relative start-50 translate-middle-x' onClick={async (e) => {
                // send fetch (POST) request to server
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ examName: examName, courseName: courseName, taRollNumber: taRollNumber, stdRollNumber: stdRollNumber, comment: comment, questionNumber: questionNumber })
                };

                var res = await fetch(BACKEND_URI + "addQuery", requestOptions);
                alert((await res.json())["msg"]);
                setComment("");
                setCourseName("");
                setExamName("");
                setQuestionNumber("");
                setTARollNumber("");

                if (res.status == 200) {
                    navigateToStudent();
                }
            }}>Post</button>
            <br />
        </div>

    </div>);
}

export default AddQuery;