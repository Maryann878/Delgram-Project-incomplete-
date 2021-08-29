import React from 'react'
import { Router, Switch, Route, Link } from "react-router-dom";
import './Navigation.css'
const imgPath = process.env.PUBLIC_URL;

function Navigation() {
    return (
       <div className="container Nav-container mx-auto">
           <div className="row m-0">
               <div className="col-md-4 colum_nav">
                    <img src={`${imgPath}./img/del-logo.png`} alt="" className="del_logo" />
               </div>
               <div className="col-md-4 colum_nav">
                    <div className="input-group rounded">
                        <span className="search my-auto" id="search-addon">
                            <i className="bi bi-search"></i>
                        </span>
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />       
                    </div>
               </div>
               <div className="col-md-4 colum_nav d-flex flex-row">
               <Link to="/"><img src={`${imgPath}./img/home_icon.png`} alt="" className="icon_thumbnail" /></Link>
                           <Link><img src={`${imgPath}./img/vector_icon.svg`} alt="" className="icon_thumbnail" /></Link>
                           <Link><img src={`${imgPath}./img/notification_icon.png`} alt="" className="icon_thumbnail" /></Link>
                           <Link><img src={`${imgPath}./img/add-story.png`} alt="" className="icon_thumbnail" /></Link>
                           <Link><img  src={`${imgPath}./img/Profile.jpg`} alt="" className="Profile_thumbnail" /></Link>
               </div>
                  
                          
                
              
           </div>
       </div>
    )
}

export default Navigation
