import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export async function getPost(postId) {
    const url = BACKEND_URL.concat('/post/', postId);
    const res = await axios.get(url, { withCredentials: true });
    return res.data;
}