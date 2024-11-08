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
                console.log(response.data.user)
                setProfile(response.data.user);
            } catch (error) {
                console.log("Error fetching profile:", error);
                setError(error);
            } finally {
                setLoading(false);  
            }
        };

        fetchMyProfile();
    }, []);

    return (
        <AuthContext.Provider value={{ profile , loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
