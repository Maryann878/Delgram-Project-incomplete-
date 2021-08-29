import React from 'react'
import './EditProfile.css'
const imgPath = process.env.PUBLIC_URL;

function EditProfile() {
    return (
        <div className="container EditProfile-container">
            <div className="row">
                <div className="col-md-12">
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
                    <div >
                    <h1>Edit Personal Info</h1>
                    <form class=" mx-auto">
                        <div class="mb-3">
                             <input type="email" class="form-control" id="Name" placeholder="Full Name"/>
                        </div>
                        <div class="mb-3">
                             <input type="email" class="form-control" id="Name" placeholder="Email"/>
                        </div>
                        <div class="mb-3">
                             <input type="email" class="form-control" id="Name" placeholder="Full Name"/>
                        </div>
                        <div className="mb-3">
                        <select id="Stack" class="form-select" placeholder="Stack" >
                                    <option>FrontEnd</option>
                                    <option>Backend</option>
                                    <option>Andriod</option>
                                    <option>UI/UX</option>
                                </select>
                        </div>
                        <div class="mb-3">
                             <input type="email" class="form-control" id="Name" placeholder="Full Name"/>
                        </div>
                        <button type="button" class="btn btn-primary">Update</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
