import React from 'react'
import './Profile.css'
const imgPath = process.env.PUBLIC_URL;

function Profile() {
    return (
        <div className="container Profile-container">
            <div className="row">
                <div className="col-12">
                    <div className="profile_pic_container">
                        <img src={`${imgPath}./img/Profile_Backgroud.png`} class = "img-responsive" width = "100%" />   
                    </div>
                    <div>
                        <img  src={`${imgPath}./img/Profile.jpg`} alt="" className="profile_img" />
                    </div>
                    <div className="profile_name">
                        <h1>Jasmine Ben</h1>
                        <p className="text-left">About</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, libero? 
                        Tempore nesciunt libero veritatis aperiam possimus vel animi nam enim earum 
                        laborum, ducimus beatae, tempora minus recusandae est. Voluptatum, aspernatur?</p>
                    </div>
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>STACK</td>
                                    <td>UI/UX</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>@UI_UX@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Phone. NO</td>
                                    <td>08256523565</td>
                                </tr>
                            </tbody>
                        </table>
                    <div className="d-flex justify-content-end">
                       <a href="#"> <strong>Edit</strong></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
