import React from "react";
import { Button } from "react-bootstrap";
import history from './history';
import { Link } from 'react-router-dom';

import { getPostsByGroup } from '../api/post';

import './Posts.css'

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], groupId: '612a7b023c262a3e9454c0dc' };
    }

    getPosts = async () => {
        const posts = await getPostsByGroup(this.state.groupId);
        this.setState({
            posts
        });
    }

    componentDidMount = () => {
        this.getPosts();
    }

    handleClickNewPost = () => {
        history.push('/Groups/Group/Posts/New');
    }

    render() {
        const posts = [];
        this.state.posts.forEach((postObj) => {
            const date = new Date(postObj.createdAt);
            posts.push(
                <div className="issue-card" key={postObj._id}>
                    <div className="issue-card-title">
                        <Link to="Posts/Aug28" params={{postId: postObj._id}}className="card-link">{postObj.name}</Link>
                        <p className="date">{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</p>
                        </div>
                    <div className="card-body">
                        <p>{postObj.description}</p>
                    </div>
                </div>)
        })
        return (
            <div className="container" id="center-row">
                <div className="header">
                    <div className="header-title">POSTS</div>
                    <Button variant="primary" type="submit" className="primary-btn" onClick={this.handleClickNewPost}>
                        New Post
                    </Button>
                </div>
                {posts}
            </div >
        )
    }
}
export default Posts;
