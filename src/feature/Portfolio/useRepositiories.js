import axios from "axios";
import { useState, useEffect } from "react";

export const useRepositories = () => {
    const [data, setData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("repositories.json");
                const repositoriesData = await response.data;
                setData({
                    state: "success",
                    repositoriesData,
                });
            } catch (error) {
                setData({
                    state: "error",
                });
            };
        };
        setTimeout(getData, 1000);
    }, []);

    return data;
};