import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
        <div className="container Footer-container">
            <div className="row g-0">
                <div className="col-md-4 d-flex flex-row justify-content-around ">
                    <p>About</p>
                    <p>Blogs</p>
                    <p>Jobs</p>
                    <p>Help</p>

                  
                </div>
                <div className="col-md-4 d-flex flex-row justify-content-around ">
                    <p>Api</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Top Account</p>
                </div>
                <div className="col-md-4 d-flex flex-row  justify-content-around">
                    <p>HashTag</p>
                    <p>Terms</p>
                    <p>Top Account</p>
                    <p>HasTag</p>
                </div>
                
            </div>
            {/* next row anchor */}
            <div className=" d-flex flex-row justify-content-center">
                <p className="px-4">English</p>
                <p>&copy; DeltaTechHub 2021</p>
                    
            </div>
        </div>
        </>
    )
}

export default Footer
