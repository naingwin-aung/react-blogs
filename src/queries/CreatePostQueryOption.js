import { useAuth } from "@clerk/clerk-react";
import axios from "axios";

export const createPostQueryOption = () => {
    return {
        mutationFn: (newPost) => createPost(newPost),
    };
};

const createPost = async (newPost) => {
    const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts`,
        newPost
    );
    return response.data;
};
