import React from 'react'
import Navigation from './Navigation'
import ProfilePost from '../ProfilePage/ProfilePost'
// import Footer from './Footer'
import Feeds from './Feeds'


function Home() {
    return (
            <div>
                <Navigation/>
                <Feeds/>
                <ProfilePost/>
                <ProfilePost/>
                {/* <Footer/> */}
            </div>
    
       
    )
}

export default Home
