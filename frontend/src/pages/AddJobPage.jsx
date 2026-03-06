import { useState } from "react";
import jobsData from "../data/job.data.json";
import { addJob } from "../api/jobApi";

const AddJobPage = () => {
  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [salary, setSalary] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Entry");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      title,
      company: { name: companyName },
      location: { city, state },
      salary: parseInt(salary),
      experienceLevel,
      status: "open"
    };

    //send API
    const res = await addJob(jobData);

    if (res.success) {
      setMessage("Job added successfully!");
    } else {
      setMessage("API unavailable, fallback to JSON");
      jobsData.push(jobData);
    }

    // reset form start
    setTitle("");
    setCompanyName("");
    setCity("");
    setState("");
    setSalary("");
    setExperienceLevel("Entry");
  };

  return (
    <div>
      <h1>Add Job</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required/>
        <input placeholder="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} required/>
        <input placeholder="City" value={city} onChange={e => setCity(e.target.value)} required/>
        <input placeholder="State" value={state} onChange={e => setState(e.target.value)} required/>
        <input placeholder="Salary" value={salary} onChange={e => setSalary(e.target.value)} required/>
        <select value={experienceLevel} onChange={e => setExperienceLevel(e.target.value)}>
          <option value="Entry">Entry</option>
          <option value="Mid">Mid</option>
          <option value="Senior">Senior</option>
        </select>
        <button type="submit">Add Job</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddJobPage;