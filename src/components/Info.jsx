
import React from "react"
import data from "../data"

export default function Info() {
  return (
    <header>
      <img 
        src={data.image} 
        alt={`Professional headshot of ${data.name}`} 
        className="profile-img" 
      />
      <h1>{data.name}</h1>
      <h3>{data.role}</h3>
      <p className="website">{data.website}</p>
      <div className="buttons">
        <a href={`mailto:${data.email}`} className="btn email">
          <i className="fa-solid fa-envelope"></i> Email
        </a>
        <a href={data.linkedin} target="_blank" rel="noreferrer" className="btn linkedin">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </header>
  )
}