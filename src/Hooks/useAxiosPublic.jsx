import axios from "axios";



const axiosPublic = axios.create({
    baseURL: `https://task-job-p-hero.vercel.app/`
});


const useAxiosPublic = () => {
    return axiosPublic;
};


export default useAxiosPublic;



// const axiosPublic = axios.create({
//     baseURL: `https://task-job-p-hero.vercel.app/`
// });

// const useAxiosPublic = () => {
//     return axiosPublic;
// };

// export default useAxiosPublic;