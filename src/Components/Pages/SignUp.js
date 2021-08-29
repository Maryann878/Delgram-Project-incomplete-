import React from 'react'
import Footer from './Footer';
import './SignUp.css'
import {Link} from 'react-router-dom'
const imgPath = process.env.PUBLIC_URL;

function SignUp(props) {
    const { username, setUserName, firstname, setfirstName, 
        stack, setStack, password, phonenumber,
         setphoneNumber, setPassword, lastname, setlastName,
          email, setemail, HandleSignUp } = props
    return (
        <div className="container">
            <div className="row gx-3 section">
                <div className="col-md-6 ">
                <div className="container Sign_Up ">
                    <div>
                        <img src={`${imgPath}./img/del-logo.png`} alt="" className="img_logo" />
                    </div>
                    <div className="centred">
                        <form > 
    `                     <div class="mb-3">
                                <input type="email" class="form-control" id="Name" placeholder="First Name"
                                value={firstname}
                            onChange={(e) => setfirstName(e.target.value)}/> 
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="Name" placeholder="Last Name"
                                value={lastname}
                            onChange={(e) => setlastName(e.target.value)}/> 
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="Name" placeholder="Email"
                                value={email}
                            onChange={(e) =>  setemail(e.target.value)}/>
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="Name" placeholder="Username"
                                value={username}
                            onChange={(e) =>  setUserName(e.target.value)}/>
                            </div>
                            <div class="mb-3">
                            <div class="row  align-items-center">
                                <div class="col-6">
                                    <input type="text" class="form-control" id="Name" placeholder="Mobile Number"
                                    value={phonenumber}
                            onChange={(e) =>  setphoneNumber(e.target.value)}/>
                                </div>
                                <div className="col-6">
                                    <select id="Stack" class="form-select">
                                        <option>FrontEnd</option>
                                        <option>Backend</option>
                                        <option>Andriod</option>
                                        <option>UI/UX</option>
                                        value={stack}
                            onChange={(e) =>  setStack(e.target.value)}</select>
                                </div>
                                
                            </div>
                            
                            </div>

                            <div className="btn_google">

                                <div class="mb-3">
                                    <input type="password" class="form-control" id="Name" placeholder="Password"
                                    value={password}
                                    onChange={(e) =>  setPassword(e.target.value)}/>
                                </div>
                        
                                <button type="button" class="btn btn-primary" onClick={HandleSignUp}>Create Account</button>
                            
                            </div>

                        </form>

                    </div>
                </div>
                    {/* instagram Image */}
                    <div className="container">
                        <div>
                            {/* <button type="button" class="btn btn-light btn-account"> */}
                                <p className="container_baby" >Already Have an Account? <span><Link to="/">Log In</Link></span></p>
                                {/* </button> */}
                        </div>

                        <div>
                           <a href="#">Get App</a>
                        </div>
                        <div>
                            <img src={`${imgPath}/img/google_play.png`} alt="SignUP" className="google_img"/>
                        </div>

                    </div>
                </div>

                <div className="col-md-6">
                {/* image Column */}
                    <div className="col-md-6">
                        <img className="signup_img" src={`${imgPath}/img/SignUp.png`} alt="SignUP"/>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )
}

export default SignUp
