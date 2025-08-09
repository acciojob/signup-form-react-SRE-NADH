import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
   const [error,setError] = useState('');
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
   const [gender,setGender] = useState('Male');
   const [phoneNumber,setPhoneNumber] = useState('');
   const [password,setPassword] = useState('');
   const [message,setMessage] = useState('')

   const handleSubmit = (e)=>{
    e.preventDefault();
    setError('');
    setMessage('');
      if(!name || !email || !gender || !phoneNumber || !password){
        setError('All fields are mandatory')
        return;
      } 
   let namePattern  = /^[a-zA-Z0-9 ]+$/;
   if(!namePattern.test(name)){
     setError('Name is not alphanumeric');
     return;
   }
    let emailPatern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPatern.test(email)){
      setError('Email must contain @');
      return;
    }
     let phoneNumberPattern = /^[0-9]+$/;
     if(!phoneNumberPattern.test(phoneNumber)){
       setError('Phone Number must contain only numbers');
      return;
     }
     if(password.length<6){
      setError('Password must contain atleast 6 letters');
      return;
     }
     setMessage(`hello ${email.split('@')[0]}`);
   }

   console.log({message});

  return (
    <div id="main" style={{display:'flex', justifyContent:'center', width:'100vw',height:'90vh', alignItems:'center'}}>
      <form style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',gap:'10px', backgroundColor:'grey', padding:'20px'}}>
        <input data-testid = 'name' placeholder="name" type="text" onChange={(e)=>{setName(e.target.value)}}/>
        <input data-testid = 'email' placeholder="email" type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <select data-testid = 'gender' onChange={(e)=>{setGender(e.target.value)}}>
          <option value="Male">Male</option>
          <option value="Femail">Femail</option>
          <option value="Other">Other</option>
        </select>
        <input data-testid = 'phoneNumber' placeholder="Phone number" onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
        <input data-testid = 'password' placeholder="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <button style={{width:'100px', borderRadius:'5px', border:'none', cursor:'pointer'}}onClick={handleSubmit}>Submit</button>
          {error && <p style={{color:'red'}}>{error}</p>}
          {message && <p style={{color:'green'}}>{message}</p>}
      </form>
    
    </div>
  )
}


export default App;
