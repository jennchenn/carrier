import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export async function getPost(postId) {
    const url = BACKEND_URL.concat('/post/', postId);
    const res = await axios.get(url, { withCredentials: true });
    return res.data;
}

export async function getPostsByGroup(groupId) {
    const url = BACKEND_URL.concat('/posts/', groupId);
    const res = await axios.get(url, { withCredentials: true });
    return res.data;
}


export async function postReply(replyObj, token) {
    const url = BACKEND_URL.concat('/post/reply');
    const res = await axios.post(url, replyObj, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return res.data;
}

