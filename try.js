import axios from "axios";


const baseUrl = "http://localhost:4000";



export async function getJobs(params) {
  const res = await axios.get(`${baseUrl}/api/jobs`, { params });
  return res.data;
}

export async function getJobById(id) {
  const res = await axios.get(`${baseUrl}/api/jobs/${id}`);
  return res.data;
}

export async function createJob(payload) {
  const res = await axios.post(`${baseUrl}/api/jobs`, payload);
  return res.data;
}

export async function updateJob(id, payload) {
  const res = await axios.put(`${baseUrl}/api/jobs/${id}`, payload);
  return res.data;
}

export async function deleteJob(id) {
  const res = await axios.delete(`${baseUrl}/api/jobs/${id}`);
  return res.data;
}