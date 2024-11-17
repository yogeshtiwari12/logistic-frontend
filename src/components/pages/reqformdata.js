import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function Reqformdata() {
  // State hooks for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(null); // Store the submitted form data

  // Handle form input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCommentsChange = (e) => setComments(e.target.value);
  const handleTermsChange = (e) => setTermsAccepted(e.target.checked);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert termsAccepted to the required string format
    const termsString = termsAccepted ? 'true' : 'false';

    const submittedData = {
      name,
      email,
      comment: comments,
      terms: termsString, // Ensure terms is a string "true" or "false"
    };

    setLoading(true);

    try {
      const response = await axios.put('https://logistic-backend-bx5m.onrender.com/userroutes1/ratereq', submittedData, {
        withCredentials: true,
      });

      if (response.status) {
        toast.success('Feedback submitted successfully!');
        // Reset the form after successful submission
        setName('');
        setEmail('');
        setComments('');
        setTermsAccepted(false);
        setFormData(submittedData); // Store the submitted data for display
      } else {
        toast.error('Unexpected error. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
      toast.error('Failed to submit feedback. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Rate Your Experience</h1>

      {!formData ? (
        // Display the form if no data has been submitted
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-gray-300">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="comments" className="block text-gray-700 font-semibold mb-2">
              Additional Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              value={comments}
              onChange={handleCommentsChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={handleTermsChange}
                required
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">
                I agree to the terms and conditions
              </span>
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 text-white font-semibold rounded-lg transition-colors ${loading ? 'bg-gray-400' : 'bg-blue-900 hover:bg-blue-700'}`}
            >
              {loading ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </div>
        </form>
      ) : (
        // Display the submitted data after the form is submitted
        <div className="bg-white p-6 rounded-lg border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Submitted Feedback</h2>
          <div className="mb-4">
            <strong>Name: </strong>{formData.name}
          </div>
          <div className="mb-4">
            <strong>Email: </strong>{formData.email}
          </div>
          <div className="mb-4">
            <strong>Comments: </strong>{formData.comment}
          </div>
          <div className="mb-4">
            <strong>Agreed to Terms: </strong>{formData.terms === 'true' ? 'Yes' : 'No'}
          </div>
          <div className="text-center">
            <button
              onClick={() => setFormData(null)} // Reset the form after viewing the submission
              className="py-2 px-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
              Submit Another Feedback
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reqformdata;
