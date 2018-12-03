import React from "react";
import "../../assets/css/resultCard.css";
import "../../assets/css/common.css";

const ResultCard = ({
  isForked,
  stars,
  name,
  license,
  url,
  owner,
  description
}) => {
  return (
    <div className="result-card">
      <div className="repo-details">
        <div className="repo-info padding-8">
          <div className="ownner-and-fork-container">
            <span className="owner-info">
              <a href={url} className="margin-right-2">
                {name}
              </a>
              by
              <a href={owner && owner.html_url} className="margin-left-2">
                {owner && owner.login}
              </a>
            </span>
            <span className={`forked-info ${isForked ? "blue" : ""}`}>
              {isForked ? "Forked" : ""}
            </span>
          </div>
          <div className="repo-description">{description}</div>
        </div>
      </div>
      <div className="stars-info padding-8">
        <span className="stars-label text-bold">
          Stars
          <span className="hide-on-med-and-up padding-8">:</span>
        </span>
        <span className="stars-count">{stars}</span>
      </div>
      <div className="license-info padding-8">
        <span className="license-label text-bold">
          License
          <span className="hide-on-med-and-up padding-8">:</span>
        </span>
        <span className="license-count">{license && license.name}</span>
      </div>
    </div>
  );
};

export default ResultCard;
