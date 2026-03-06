 import { useCallback, useState } from "react";
import {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} from "../api/api";

export default function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJobs = useCallback(async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getJobs(params);
      const result = data?.jobs ?? data ?? [];
      setJobs(result);
      return result;
    } catch (e) {
      setError(e?.response?.data?.message || "Failed to fetch jobs");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchJobById = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getJobById(id);
      const result = data?.job ?? data ?? null;
      setJob(result);
      return result;
    } catch (e) {
      setError(e?.response?.data?.message || "Failed to fetch job");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const addJob = useCallback(async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const data = await createJob(payload);
      const createdJob = data?.job ?? data;
      setJobs((prev) => [createdJob, ...prev]);
      return createdJob;
    } catch (e) {
      setError(e?.response?.data?.message || "Failed to create job");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const editJob = useCallback(async (id, payload) => {
    setLoading(true);
    setError(null);
    try {
      const data = await updateJob(id, payload);
      const updatedJob = data?.job ?? data;

      setJob(updatedJob);
      setJobs((prev) =>
        prev.map((item) => (item._id === id ? updatedJob : item))
      );

      return updatedJob;
    } catch (e) {
      setError(e?.response?.data?.message || "Failed to update job");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const removeJob = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteJob(id);

      setJobs((prev) => prev.filter((item) => item._id !== id));

      if (job?._id === id) {
        setJob(null);
      }

      return true;
    } catch (e) {
      setError(e?.response?.data?.message || "Failed to delete job");
      throw e;
    } finally {
      setLoading(false);
    }
  }, [job]);

  return {
    jobs,
    job,
    loading,
    error,
    fetchJobs,
    fetchJobById,
    addJob,
    editJob,
    removeJob,
  };
}