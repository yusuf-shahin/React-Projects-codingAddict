import React from "react"
import Duties from "./Duties"
import { v4 as uuidv4 } from "uuid"

const ids = uuidv4()

const JobInfo = ({ jobs }) => {
  const { company, dates, duties, title } = jobs[0]
  return (
    <article className='job-info'>
      {/* for fun purpose , I just put all jsx element inside a array */}
      {[
        <h3 key={Math.random()}>{title}</h3>,
        <span className='job-company' key={Math.random()}>
          {company}
        </span>,
        <p className='job-date' key={Math.random()}>
          {dates}
        </p>,
        <Duties duties={duties} key={Math.random()} />,
      ]}
    </article>
  )
}

export default JobInfo
