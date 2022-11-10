import './App.css';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Student from './components/Student';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddQuery from './components/AddQuery';

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="signup" element={<SignUpForm />}/>
        <Route path="login" element={<LoginForm />}/>
        <Route path="student" element={<Student />}/>
        <Route path="student/addQuery" element={<AddQuery />}/>
    </Routes>
  </BrowserRouter>);
}

export default App;
