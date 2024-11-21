import React from "react";

import photosnap from "../assets/images/photosnap.svg";
import manage from "../assets/images/manage.svg";
import account from "../assets/images/account.svg";
import myhome from "../assets/images/myhome.svg";
import loopStudios from "../assets/images/loop-studios.svg";
import faceit from "../assets/images/faceit.svg";
import shortly from "../assets/images/shortly.svg";
import insure from "../assets/images/insure.svg";
import eyecamCo from "../assets/images/eyecam-co.svg";
import airFilter from "../assets/images/the-air-filter-company.svg";
import "../styles/Card.css";

const logos = {
  photosnap,
  manage,
  account,
  myhome,
  loopStudios,
  faceit,
  shortly,
  insure,
  eyecamCo,
  airFilter,
};

const Card = ({ job }) => {
  const logoSrc = logos[job.company.toLowerCase().replace(/ /g, "")];
  console.log(logoSrc);

  return (
    <div className={`card ${job.featured ? "featured" : ""}`}>
      <img src={logoSrc} alt={`${job.company} logo`} className="card-logo" />
      <div className="card-details">
        <h3 className="company-name">{job.company}</h3>
        <h4 className="job-position">{job.position}</h4>
        <p className="job-info">
          <span>{job.postedAt}</span>
          <span className="job">{job.contract}</span>
          <span className="job">{job.location}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
