import { useState } from "react";
import { addJob } from "../api/jobApi";

export default function AddJobPage() {
  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobData = {
      title,
      company: { name: companyName },
      location: { city, state },
      salary: 0,
      experienceLevel: "Entry",
      status: "open"
    };
    const res = await addJob(jobData);
    if (res.success) setMessage("Job added successfully!");
    else setMessage("Error adding job");
  };

  return (
    <div>
      <h1>Add Job</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required/>
        <input placeholder="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} required/>
        <input placeholder="City" value={city} onChange={e => setCity(e.target.value)} required/>
        <input placeholder="State" value={state} onChange={e => setState(e.target.value)} required/>
        <button type="submit">Add Job</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}