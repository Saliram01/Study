import React from 'react'
import { useLoaderData } from 'react-router-dom'

function JobsDetails() {
    const jobsDetails = useLoaderData();
  return (
    <div className='job-details'>
        <p><b>Jobs title : {jobsDetails.title}</b></p>
        <p><b>Salary : {jobsDetails.salary}</b></p>
        <p><b>Location : {jobsDetails.location}</b></p>
        <p><b>Descriptions :</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, amet optio minima animi quas sapiente blanditiis cum itaque fuga autem provident aliquam minus delectus veritatis a numquam reprehenderit laboriosam dolores iure repellat vitae, alias laudantium doloremque quibusdam? Possimus, laboriosam similique. Eaque quas voluptatem earum, mollitia dolor numquam deleniti cupiditate quaerat?</p>
        <button>Apply Now</button>
    </div>
  )
}

export default JobsDetails

export const jobDetailLoader = async({params}) => {
    const {id} = params;
    const res = await fetch('http://localhost:5000/jobs/'+ id);
    if(!res.ok) {
        throw Error("Could not found the job details page");
    }
    return res.json();

}