import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RatereqForm() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:4000/userroutes1/reqdata');
        console.log("data",response.data.requests)
        
        if (response.data && Array.isArray(response.data.requests)) {
          setRequests(response.data.requests);
        } else {
          setError('No requests data available');
        }
      } catch (err) {
        setError('Failed to fetch requests');
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Requests</h1>
      <div className="space-y-6">
        {requests.length > 0 ? (
          requests.map((request) => (
            <div key={request._id} className="bg-white p-6 rounded-lg border border-gray-300">
              <h2 className="text-2xl font-semibold text-gray-700">Request from {request.name}</h2>
              <div className="mt-4">
                <strong>Email: </strong>{request.email}
              </div>
              <div className="mt-2">
                <strong>Comment: </strong>{request.comment}
              </div>
              <div className="mt-2">
                <strong>Agreed to Terms: </strong>{request.terms ? 'Yes' : 'No'}
              </div>
            </div>
          ))
        ) : (
          <div>No requests found.</div>
        )}
      </div>
    </div>
  );
}

export default RatereqForm;
