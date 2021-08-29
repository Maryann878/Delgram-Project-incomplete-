import React from 'react'
import './ProfilePost.css'
const imgPath = process.env.PUBLIC_URL;
function ProfilePost() {
    return (
       <div className="container ProfilePsot-container">
            <div className="row">
              <div className="col-md-2">
                <img  src={`${imgPath}./img/Profile.jpg`} alt="" className="feed_img" />
              </div>

              {/* New Feeds and Text Area */}
              <div className="col-md-10">
                  <div className="d-flex flex-row">
                      <div className="col-6  d-flex justify-content-start">
                        <h4 className="users_post_name">MS_CASSE</h4>
                            <img src={`${imgPath}./img/feed_icon_blue_tick.png`} alt="smiley"  className="feed_icon"/>
                      </div>
                      <div className="col-6 d-flex justify-content-end">
                            <img src={`${imgPath}./img/feed_icon_three_dots.png`} alt="smiley"  className="feed_icon"/>
                      </div>
                  </div>
                  <div className="d-flex justify-content-start">
                      <h6>Tokyo Japan</h6>
                  </div>
                  <div className="post_text">
                      <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus non vitae, magna porttitor habitasse tempor. 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus non vitae, magna porttitor habitasse tempor.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus non vitae, magna porttitor habitasse tempor.
                      </p>
                  </div>
                  <div className="post_img">                       
                        <img src={`${imgPath}./img/Profile.jpg`} class = "img-responsive" width = "100%" />
                  </div>
                 <h6 className="d-flex justify-content-start"><span><img src={`${imgPath}./img/feed_icon_redheart.svg`} alt="smiley"  className="feed_icon"/></span>500</h6>
                <div className="d-flex flex-row">
                            <div className="col-6 d-flex justify-content-start">
                                <img src={`${imgPath}./img/feed_icon_blackheart.svg`} alt="smiley"  className="feed_icon"/>
                                <img src={`${imgPath}./img/feed_icon_comment.svg`} alt="gif" className="feed_icon"/>
                                <img src={`${imgPath}./img/feed_icon_retweet.png`} alt="instagram_icon" className="feed_icon" />
                            </div>
                            <div className="col-6 d-flex justify-content-end" button-container>
                                <img src={`${imgPath}./img/feed_icon_envelop.svg`} alt="video"  className="feed_icon"/>
                            </div>
                </div>
                <p className="text_time">A Few minutes Ago</p>
                  
              </div>
          </div>
       </div>
    )
}

export default ProfilePost
