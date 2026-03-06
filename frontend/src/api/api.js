import axios from "axios";


const baseUrl = "http://localhost:4000";


export async function getJobs(params) {
  const res = await axios.get(`${baseUrl}/api/vehicleRentals`, { params });
  return res.data;
}

export async function getJobById(id) {
  const res = await axios.get(`${baseUrl}/api/vehicleRentals/${id}`);
  return res.data;
}

export async function createJob(payload) {
  const res = await axios.post(`${baseUrl}/api/vehicleRentals`, payload);
  return res.data;
}

export async function updateJob(id, payload) {
  const res = await axios.put(`${baseUrl}/api/vehicleRentals/${id}`, payload);
  return res.data;
}

export async function deleteJob(id) {
  const res = await axios.delete(`${baseUrl}/api/vehicleRentals/${id}`);
  return res.data;
}