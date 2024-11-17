import React, { useEffect, useState } from "react";
import axios from "axios";

function Ratereqform() {

    
 
      const [clientBriefs, setClientBriefs] = useState([]);
      const [error, setError] = useState(null);
      const [isLoading, setIsLoading] = useState(true);
      const [searchTerm, setSearchTerm] = useState("");
      const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });
    
      useEffect(() => {
        const fetchClientBriefs = async () => {
          try {
            setIsLoading(true);
            const response = await axios.get("https://logistic-backend-bx5m.onrender.com/userroutes1/allclientdata");
            setClientBriefs(response.data.clientbriefs);
            setError(null);
          } catch (err) {
            setError("Failed to fetch client briefs");
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchClientBriefs();
      }, []);
    
      // Sorting function
      const sortData = (key) => {
        let direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
          direction = "descending";
        }
        setSortConfig({ key, direction });
      };
    
      // Filter and sort data
      const sortedAndFilteredData = React.useMemo(() => {
        let filteredData = [...clientBriefs].filter((brief) =>
          Object.values(brief)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );
    
        if (sortConfig.key) {
          filteredData.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
              return sortConfig.direction === "ascending" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
              return sortConfig.direction === "ascending" ? 1 : -1;
            }
            return 0;
          });
        }
    
        return filteredData;
      }, [clientBriefs, searchTerm, sortConfig]);
    
      return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8">
                <h1 className="text-3xl font-bold text-white">Client Briefs</h1>
                <p className="mt-2 text-blue-100">Manage and view all client information</p>
              </div>
    
              {/* Search and Info Bar */}
              <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <input
                  type="text"
                  placeholder="Search clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-64 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="text-gray-600">Total Clients: {sortedAndFilteredData.length}</div>
              </div>
    
              {/* Error Message */}
              {error && (
                <div className="m-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                  <p className="font-medium">Error</p>
                  <p>{error}</p>
                </div>
              )}
    
              {/* Loading State */}
              {isLoading ? (
                <div className="p-8 text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
                  <p className="mt-2 text-gray-600">Loading client data...</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full whitespace-nowrap">
                    <thead>
                      <tr className="bg-gray-50">
                        {[
                          "Client Name",
                          "Brand Name",
                          "Address",
                          "Phone",
                          "Email",
                          "Products",
                       
                        ].map((header, idx) => (
                          <th
                            key={idx}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                            onClick={() => sortData(header.toLowerCase().replace(" ", ""))}
                          >
                            {header}
                            {sortConfig.key === header.toLowerCase().replace(" ", "") && (
                              <span className="ml-1">{sortConfig.direction === "ascending" ? "↑" : "↓"}</span>
                            )}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {sortedAndFilteredData.length > 0 ? (
                        sortedAndFilteredData.map((brief) => (
                          <tr key={brief._id} className="hover:bg-gray-50 transition-colors duration-150">
                            <td className="px-6 py-4 text-sm text-gray-900">{brief.clientName}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{brief.brandName}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{brief.address}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{brief.phone}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{brief.emailAddress}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{brief.products}</td>
                         
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                            No client briefs found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    

export default Ratereqform

