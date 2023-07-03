import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextArea from './components/TextArea';
import React,{useState} from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);
  const showAlert=(message)=>{
    setAlert({
      msg:message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
      }
    
  const toggleMode=()=>{
 if(mode==="light"){
  setMode("dark")
  showAlert("Succcess:Dark mode has been enabled")
  document.body.style.backgroundColor="#4D4D4D"
 }else{
  setMode("light")
  document.body.style.backgroundColor="white"
  showAlert("Succcess:Light mode has been enabled")
 }
  }

  return (
  
    <>

      <Navbar title="TextLab" showAlert={showAlert} alert={alert} about="aboutApp" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert} />
      <div className='container my-3 '>
        <h1 className={`mx-2 text-${mode==="light"?"black":"white"}`}>Text<span style={{color:"red"}}>Lab</span> <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
        </svg></span></h1>
        <TextArea showAlert={showAlert} mode={mode} toggleMode={toggleMode} />
           {/* <About/> */}
       
      </div>
    </>

  );
}

export default App;
