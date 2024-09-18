import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const name = () => {/* do something. */ }

export const getMethod = async (url) => await axios.get(url).catch(console.error);
export const deleteMethod = async (url) => await axios.delete(url).catch(console.error);
export const patchMethod = async (url,data) => await axios.patch(url,data).catch(console.error);
export const postMethod = async (url,data) => await axios.post(url,data).catch(console.error);


export default {
    photos: `${BASE_URL}/photos`,
    posts: `${BASE_URL}/posts`
    // posts: (userId) => `${BASE_URL}/posts/${userId}/photos`,
}
