import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";




const axiosSecure = axios.create({
    baseURL: 'http://localhost:5173/'
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.Authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error);
    })

    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;

    }, async (err) => {
        const status = err.response.status;
        console.log('status error', status);
        if (status == 401 || status == 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(err);
    })
    return axiosSecure;

};

export default useAxiosSecure;