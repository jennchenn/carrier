import React from "react";

import { Button, Form } from 'react-bootstrap';

import { getPost, postReply } from '../api/post';

class IssueMaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', questions: [], postId: '612a97ef3ee421234cf2d926', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZWFkMkBnbWFpbC5jb20iLCJfaWQiOiI2MTJhODE1YzRiM2M4YzQxYzA0MGRmODUiLCJpYXQiOjE2MzAxOTk5NzQsImV4cCI6MTYzMDI4NjM3NH0.me8isasI_KXhgGfLXMDXDDlb5tZCAizAuO70sI3v8Ek' };
    }

    onTitleChange = (e, data) => {
        const { value } = data;
        this.setState({
            name: value,
        });
    }

    componentDidMount = () => {
        this.getPost();
    }

    getPost = async () => {
        const post = await getPost(this.state.postId);
        this.setState({
            questions: post.questions,
        });
    }

    onSavePost = async (event) => {
        event.preventDefault();
        for (let i = 0; i < this.state.questions.length; i++) {
            const replyObj = {
                postId: this.state.postId,
                questionId: event.target[i].id,
                response: event.target[i].value
            }
            postReply(replyObj, this.state.token);
        }
        alert('Your responses were saved!')
    }

    render() {
        const questions = [];

        this.state.questions.forEach((questionObj) => {
            questions.push(<Form.Group className="mb-3" controlId={questionObj._id} key={questionObj._id}>
            <Form.Label>{questionObj.question}</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>);
        });
        
        return (
            <div>
                <h1>Post Maker</h1>
                <Form onSubmit={this.onSavePost} id="wrap">
                    {questions}
                    <Button variant="primary" type="submit" className="primary-btn">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
export default IssueMaker;