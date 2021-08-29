import React from "react";

class IssueMaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '' }
    }

    onQuestionChange = (e, data) => {
        const { value } = data;
        this.setState({
            name: value,
        });
    }

    onSavePost = event => {
        event.preventDefault();
        alert('You have submitted the form.')
    }

    render() {
        return (
            <form onSubmit={this.onSavePost}>
                <h1>Post Creator</h1>
                <div id="wrap">
                    <div id="content">
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
                    </div>
                </div>
            </form >
        );
    }
}
export default IssueMaker;
