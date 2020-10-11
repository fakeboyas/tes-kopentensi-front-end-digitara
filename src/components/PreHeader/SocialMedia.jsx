import React from "react";
import social from "./../../data/social.json";

function SocialMedia() {
  return (
    <div className="d-flex flex-row w-50 align-items-center justify-content-center">
      <div className="w-25">
        <span>Join us : </span>
      </div>
      <div className="d-flex flex-row w-50">
        {" "}
        {social.map((data) => {
          return (
            <a className="ml-2" href={data.url}>
              <img src={data.icon} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SocialMedia;
