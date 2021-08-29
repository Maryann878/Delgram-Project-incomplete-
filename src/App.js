import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Pages/Login'
import Home from './Components/Pages/Home'
import EditProfile from './Components/ProfilePage/EditProfile';
import SignUp from './Components/Pages/SignUp';
import ProfilePage from './Components/ProfilePage/Profile';
import Feeds from './Components/Pages/Feeds';




function App() {
    const [ user, setUser] = useState(false)
    const [ username, setUserName] = useState('')
    const [ stack, setStack] = useState('')
    const [ phonenumber, setphoneNumber] = useState('')
    const [ email, setemail] = useState('')
    const [ firstname, setfirstName] = useState('')
    const [ lastname, setlastName] = useState('')
    const [ password, setPassword] = useState('')
    
// const [post, getPost] = useState("https://ict-del-gram-app.herokuapp.com/api/post/allpost")
// axios.get("").then(
//   (response) =>{
//     getPost(response.data.setup + "..." + response.data.puncline);
//   }
// )
// return(
//   <div>
//     <Home/>
//     <button onClick={getPost}> click</button>
//   </div>
// )



    const HandleLogin = async () => {
      console.log(username, password)
      axios.post('https://ict-del-gram-app.herokuapp.com/api/users/login', {
        userName: username,
        password: password
      })
      .then((response) => {
        console.log("Success");
        console.log(user.token)
        setUser(true)
      })
      .catch(() =>  {
        console.log("error");
      });



      // const data = { username, password }
      // console.log(data)

      // fetch('https://ict-del-gram-app.herokuapp.com/api/users/login', {
      //   method: 'POST', 
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      // })
      // .catch((error) => {
      //   console.error('Error:', error);
      // });
    }

    const HandleSignUp = async () => {
      const data = { username, password, stack, firstname, lastname, email, phonenumber}
      console.log(data)

      axios.post('https://ict-del-gram-app.herokuapp.com/api/users/signup', {
      
          userName:username,
          firstName:firstname,
          lastName: lastname,
          email:email,
          phoneNumber:phonenumber,
          stack:stack,
          password:password
          
      })
      .then((response) => {
        console.log("Success");
        setUser(true)
      // .then(response => 
      // .then(data => {
      //   console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
    

//     const HandleUpload = async () => {
//       const upload = { username, password, stack, firstname, lastname, email, phonenumber}
//       console.log(upload)
//   axios.get('https://ict-del-gram-app.herokuapp.com/api/post/new',{
//   header: 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFmYjJlZTI3MGJmZDAwMTY0ZWJkNWYiLCJpYXQiOjE2Mjk0Njk0OTksImV4cCI6MTYzMDI0NzA5OX0.Pmr_R9oXu_cuhY34kJ4ITRYO9LOINoTkS88vw0C2TT4' ,
//   form: 'title="This baby is cute"' ,
//   form :'images=@"/C:/Users/USER/Pictures/IMG-20210507-WA0019.jpg"'},
//   {
//     {
//       Image_url: [
//         "upload-1629474734017.jpg"
//       ],
//       noOflikes: 0,
//       noOfComments: 0,
//       dateCreated: "2021-08-20T14:24:15.298Z",
//       _id: "611fcfae36e4480016fa6db4",
//       title: "This baby is cute",
//       stack: "Back End development ",
//       userid: "611fb2ee270bfd00164ebd5f",
//       __v: 0
//     }
//   })
//   .then(response => response.json())
//   .then(upload => {
//     console.log('Success:', upload );
// }
// const url='https://ict-del-gram-app.herokuapp.com/api/post/allpost';
// const getAllPost =() => {
//   axios.get(`${url}post`)
//   .then((response) => {
//     const allpost = response.data.post.allpost;
//     getPost(allpost);
//   })
//   .catch(error => console.error(`Error: $(error)`));
// }
//const HandleUpload = async () => {
  //const = {}
  //console.log(data)
  //axios.post('https://ict-del-gram-app.herokuapp.com/api/post/new'), {
    
  //})
  //.then((response) => {
    //console.log("Success");
    //setUser(true)
 // })
  //.catch(() =>  {
    //console.log("error");
  //});
//}

  return (
    <>
    
     
      <div className="App">
     
        {
          user ?
          <Route path='/home' exact> <Home/></Route> :
          <>
          <Switch>
          <Route exact path='/signup' > <SignUp
          HandleSignUp={HandleSignUp}
          username={username}
          setUserName={setUserName}
          firstname={firstname}
          setfirstName={setfirstName}
          lastName= {lastname}
          setlastName={setlastName}
          email={email}
          setemail={setemail}
          phoneNumber={phonenumber}
          setphoneNumber={setphoneNumber}
          stack={stack}
          setStack={setStack}
          password={password}
          setPassword={setPassword}
          />
          </Route>
          

          <Route path='/'><Login 
          username={username}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
          HandleLogin={HandleLogin}
          /></Route> 
          </Switch>
          </>
        }
         
<Route exact path='/profilepage' > <ProfilePage/></Route>

       {/* <EditProfile/> */}
  
    </div>

    </>
  );
}

export default App;
