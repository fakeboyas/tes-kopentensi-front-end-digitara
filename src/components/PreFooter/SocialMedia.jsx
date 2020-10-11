import React from 'react'
import social from "./../../data/social.json";

function SocialMedia() {
    return (
        <div className="social-footer w-25 d-flex flex-row justify-content-center">
        {social.map((data) => {
          return (
            <a className="ml-2 mt-2" href={data.url}>
              <img src={data.icon} />
            </a>
          );
        })}
      </div>
    )
}

export default SocialMedia
