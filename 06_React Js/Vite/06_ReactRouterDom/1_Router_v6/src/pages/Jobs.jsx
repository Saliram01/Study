import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Jobs() {
  const jobsData = useLoaderData();
  return (
    <div className='jobs'>
      {jobsData.map((jobs) => <Link to={jobs.id.toString()} key={jobs.id}>
        <h4>{jobs.title}</h4>
        <p>{jobs.location}</p>
      </Link>)}
    </div>
  )
}

export default Jobs

export const jobsLoader = async () => {
    const res = await fetch('http://localhost:5000/jobs');
    if(!res.ok) {
      throw Error("Could not found the jobs list");
    }
    return res.json();
}