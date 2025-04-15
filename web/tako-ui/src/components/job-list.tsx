import axios from "axios";
import { useEffect, useState } from "react";
import type { Job } from "types";

const API_URL = 'http://localhost:8080/jobs'

const JobList = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
  
    const fetchJobs = async () => {
      try {
        const res = await axios.get(API_URL);
        setJobs(res.data);
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
        fetchJobs();
        // Poll every 3s
        const interval = setInterval(fetchJobs, 3000);
        return () => clearInterval(interval);
      }, []);

    return(
        <div>
        <h2>Job Queue</h2>
        <table border={1} cellPadding="6">
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Worker</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(({ id, status, workerId, createdAt}) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{status}</td>
                <td>{workerId}</td>
                <td>{new Date(createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}

export default JobList
