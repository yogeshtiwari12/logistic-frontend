import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMyProfile = async () => {
            try {
                const response = await axios.get('http://localhost:4000/userroutes1/getmyprofile', {
                    withCredentials: true,
                });
                console.log(response.data.user);
                setProfile(response.data.user);
            } catch (error) {
                if (error.response) {
                 
                    console.error("Server Error:", error.response.data);
                    setError(`Error: ${error.response.status} - ${error.response.data.message || "An unknown error occurred."}`);
                } else if (error.request) {
                    
                    console.error("Network Error:", error.request);
                    setError("Network error. Please check your connection.");
                } else {
                    console.error("Error:", error.message);
                    setError("An unexpected error occurred.");
                }
            } finally {
                setLoading(false);  
            }
        };

        fetchMyProfile();
    }, []);

    return (
        <AuthContext.Provider value={{ profile, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};