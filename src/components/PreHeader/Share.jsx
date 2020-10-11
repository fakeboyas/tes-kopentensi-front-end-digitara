import React from 'react'
import facebook from './../../assets/images/icons/socialmedia/facebook.png'
import twitter from './../../assets/images/icons/socialmedia/twitter.png'
function Share() {
    return (
        <div className="d-flex flex-row w-25">
            <button className="btn btn-primary btn-sm"><img src={facebook} style={{width:"15px"}}/> Share</button>
            <button className="btn btn-sm btn-info ml-2"><img src={twitter} style={{width:"15px"}}/> Share</button>
        </div>
    )
}

export default Share
