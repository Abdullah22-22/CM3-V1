import { useEffect, useState } from "react";
import { getJobs } from "../api/jobApi";
import jobsData from "../data/job.data.json";

export default function JobListPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getJobs();
      if (data.length === 0) setJobs(jobsData);
      else setJobs(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Job List</h1>
      {jobs.map(job => (
        <div key={job.id} style={{border: "1px solid #ccc", padding: "10px", margin: "10px 0"}}>
          <h2>{job.title}</h2>
          <p>Company: {job.company.name}</p>
          <p>City: {job.location.city}, {job.location.state}</p>
          <p>Salary: {job.salary}</p>
          <p>Experience: {job.experienceLevel}</p>
        </div>
      ))}
    </div>
  );
}