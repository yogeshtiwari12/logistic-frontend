import React, { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

const ClientBriefForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    clientName: "",
    brandName: "",
    address: "",
    phone: "",
    cell: "",
    emailAddress: "",
    website: "",
    socialMedia: "",
    legalRepresentative: "",
    products: "",
    productOrigin: "",
    tariffRegistration: "",
    corporateColors: "",
    partnersAffiliates: "",
    certifications: "",
    objective: "",
    competitors: "",
    productPresentation: "Physical",
    requireSamples: false,
    marketStudies: "",
    paymentContact: "",
    dunsBrands: "",
    idCopy: "",
    productToExport: "",
    referenceNumber: "",
    pgCode: "",
    purchaseName: "",
    transport: "Air",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await axios.put("https://logistic-backend-bx5m.onrender.com/userroutes1/saveclientbrief", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setError(
        error.response?.data?.message || "Failed to submit form. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">
           Rate Request Form
          </h1>
          <p className="text-gray-600">Please fill in all required fields marked with *</p>
        </div>

        {/* Status Messages */}
        {success && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            Form submitted successfully! Thank you for your submission.
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* General Information Section */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
              <span className="mr-2">📋</span> General Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Client Name", name: "clientName", required: true },
                { label: "Brand Name", name: "brandName", required: true },
                { label: "Address", name: "address", required: true },
                { label: "Phone", name: "phone", type: "tel" },
                { label: "Cell", name: "cell", type: "tel" },
                { label: "Email Address", name: "emailAddress", type: "email", required: true },
                { label: "Website", name: "website", type: "url" },
                { label: "Social Media", name: "socialMedia" },
                { label: "Legal Representative", name: "legalRepresentative", required: true },
              ].map(({ label, name, type = "text", required }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label} {required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                    required={required}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Information Section */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
              <span className="mr-2">📦</span> Product Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Products", name: "products", required: true },
                { label: "Product Origin", name: "productOrigin", required: true },
                { label: "Tariff Registration", name: "tariffRegistration" },
                { label: "Corporate Colors", name: "corporateColors" },
                { label: "Partners/Affiliates", name: "partnersAffiliates" },
                { label: "Certifications", name: "certifications" },
                { label: "Objective", name: "objective", required: true },
                { label: "Competitors", name: "competitors" },
                { label: "Market Studies", name: "marketStudies" },
                { label: "Payment Contact", name: "paymentContact", required: true },
                { label: "DUNS/Brands", name: "dunsBrands" },
                { label: "ID Copy", name: "idCopy" },
                { label: "Product to Export", name: "productToExport", required: true },
                { label: "Reference Number", name: "referenceNumber" },
                { label: "PG Code", name: "pgCode" },
                { label: "Purchase Name", name: "purchaseName" },
              ].map(({ label, name, required }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label} {required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                    required={required}
                  />
                </div>
              ))}

              {/* Transport Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transport Method <span className="text-red-500">*</span>
                </label>
                <select
                  name="transport"
                  value={formData.transport}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                >
                  <option value="Air">✈️ Air</option>
                  <option value="Ocean">🚢 Ocean</option>
                  <option value="Domestic">🚛 Domestic</option>
                </select>
              </div>

              {/* Product Presentation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Presentation <span className="text-red-500">*</span>
                </label>
                <select
                  name="productPresentation"
                  value={formData.productPresentation}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                >
                  <option value="Physical">📦 Physical</option>
                  <option value="Virtual">💻 Virtual</option>
                </select>
              </div>

              {/* Require Samples Checkbox */}
              <div className="col-span-2">
                <label className="flex items-center space-x-3 text-gray-700">
                  <input
                    type="checkbox"
                    name="requireSamples"
                    checked={formData.requireSamples}
                    onChange={handleChange}
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium">Require Product Samples</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transform transition duration-150 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Submitting...
              </>
            ) : (
              "Submit Form"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientBriefForm;
