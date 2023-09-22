import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    nameInput: '',
    commentInput: '',
  }

  toggleLikeButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const newComment = {
      id: uuidv4(),
      nameInput,
      commentInput,
      isLiked: false,
      date: new Date(),
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onDeleteTheDesiredList = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(eachList => eachList.id !== id)

    this.setState({commentsList: filteredList})
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state
    return (
      <div className="main-container">
        <div className="bg-container">
          <form className="left-container" onSubmit={this.onAddComment}>
            <h1 className="heading"> Comments </h1>
            <p className="paragraph"> Say something about 4.0 Technologies </p>
            <input
              type="text"
              placeholder="Your Name"
              className="input-element"
              value={nameInput}
              onChange={this.onChangeNameInput}
            />
            <textarea
              className="textarea-element"
              placeholder="Your Comment"
              value={commentInput}
              onChange={this.onChangeCommentInput}
            >
              Hi
            </textarea>
            <button className="button" type="submit">
              Add Comment
            </button>
          </form>
          <div className="right-container">
            <img
              className="custom-image"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
          <hr />
        </div>
        <ul>
          <p>
            <span className="no-of-count">{commentsList.length}</span> Comments
          </p>
          {commentsList.map(eachComment => (
            <CommentItem
              eachComment={eachComment}
              key={eachComment.id}
              toggleLikeButton={this.toggleLikeButton}
              onDeleteTheDesiredList={this.onDeleteTheDesiredList}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
