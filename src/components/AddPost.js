import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'

class AddPost extends Component {

    state = {
        id : Math.random(),
        title : null,
        body : null
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        });
      }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPost(this.state);
        this.props.history.push('/');
      }

    render() {

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={this.handleChange} />
                    <label htmlFor="body">Body:</label>
                    <input type="text" id="body" onChange={this.handleChange} />
                    <button className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        addPost: (post) => { dispatch(addPost(post))}
    }
}

export default connect(null, mapDispatchToProps)(AddPost);