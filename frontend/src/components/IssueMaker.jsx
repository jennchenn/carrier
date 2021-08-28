import React from "react";

import { getPost } from '../api/post';

class IssueMaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '' }
    }

    onTitleChange = (e, data) => {
        const { value } = data;
        this.setState({
            name: value,
        });
    }

    getPost = async () => {
        const post = await getPost("612a97ef3ee421234cf2d926");
        console.log(post);
    }

    onSavePost = event => {
        this.getPost();
        event.preventDefault();
        alert('You have submitted the form.')
    }

    render() {
        return (
            <form onSubmit={this.onSavePost}>
                <h1>Post Creator</h1>
                <p>QUESTION</p>
                <input
                    type="text"
                />
                <p>QUESTION</p>
                <input
                    type="text"
                />
                <p>QUESTION</p>
                <input
                    type="text"
                />
                <br></br>
                <input
                    type="submit">
                </input>
            </form >
        );
    }
}
export default IssueMaker;