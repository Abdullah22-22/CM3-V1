const API_URL = "http://localhost:5000/api/jobs"; // backend local

export async function getJobs() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch jobs");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function addJob(jobData) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    });
    if (!res.ok) throw new Error("Failed to add job");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}