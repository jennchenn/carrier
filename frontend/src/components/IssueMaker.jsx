import React from "react";

import { Button, Form } from 'react-bootstrap';

import { getPost, postReply } from '../api/post';

import './IssueMaker.css';

class IssueMaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', questions: [], postId: '612a97ef3ee421234cf2d926', token: process.env.REACT_APP_AUTH_TOKEN };
    }

    onQuestionChange = (e, data) => {
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
            questions.push(<Form.Group className="mb-3 question" controlId={questionObj._id} key={questionObj._id}>
            <Form.Label>{questionObj.question}</Form.Label>
            <Form.Control as="textarea" rows={5} className="input" />
        </Form.Group>);
        });
        
        return (
            <div className="container">
                <h1 className="title">Add your reply!</h1>
                <p className="maker-subtitle">This week's post will go out on Monday.</p>
                <Form onSubmit={this.onSavePost}>
                    {questions}
                    <Button variant="primary" type="submit" className="issue-primary-btn">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
export default IssueMaker;
