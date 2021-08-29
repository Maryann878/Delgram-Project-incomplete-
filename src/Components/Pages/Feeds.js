import { render } from '@testing-library/react';
import React from 'react'
import './Feeds.css'
const imgPath = process.env.PUBLIC_URL;



function Feeds(props) {
    
    const  {HandleUpload} = props
    return (
      <div className="container feed-container">
          <div className="row">
              <div className="col-md-2">
                <img  src={`${imgPath}./img/Profile.jpg`} alt="" className="feed_img" />
              </div>

              {/* New Feeds and Text Area */}
              <div className="col-md-10">
                  <h6>Make Gram</h6>
                  <form>
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className=" d-flex flex-row icon">
                            <div className="col-6 d-flex justify-content-start">
                                <img src={`${imgPath}./img/feed_icon_smiley.svg`} alt="smiley"  className="feed_icon"/>
                                <img src={`${imgPath}./img/feed_icon_gif.svg`} alt="gif" className="feed_icon"/>
                                <img src={`${imgPath}./img/feed_icon_instagram.svg`} alt="instagram_icon" className="feed_icon" />
                                <img src={`${imgPath}./img/feed_icon_picture.svg`} alt="Picture" onClick={HandleUpload} className="feed_icon"/>
                                <img src={`${imgPath}./img/feed_icon_video.svg`} alt="video"  className="feed_icon"/>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <button type="button" class="btn btn-primary">Post</button>
                            </div>
                        </div>
                  </form>

              </div>
          </div>
      </div>
    )
}

export default Feeds
