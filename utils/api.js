import axios from "axios";

const api = axios.create({
    baseURL: "https://api.thecatapi.com/",
});

//how to add api key to the header api_key=live_9Dz7iAgeimG62MouceNDc12pbXjqOqkMuRuxqnxYojkDRDvvbM4gMXp0ZhptHX0b
api.interceptors.request.use(
    async (config) => {
        config.headers = {
            "Content-Type": "application/json",
            "x-api-key": "live_9Dz7iAgeimG62MouceNDc12pbXjqOqkMuRuxqnxYojkDRDvvbM4gMXp0ZhptHX0b"
        };
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);






export default api;