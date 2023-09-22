// Write your code here

import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {eachComment, toggleLikeButton, onDeleteTheDesiredList} = props
  const {id, nameInput, commentInput, isLiked, date} = eachComment

  const ImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postedTime = formatDistanceToNow(date)

  const onToggleLikeButton = () => {
    toggleLikeButton(id)
  }

  const deleteTheOnclickElement = () => {
    onDeleteTheDesiredList(id)
  }

  return (
    <li className="list-container">
      <h1 className="name">{nameInput}</h1>
      <p className="comment">{commentInput}</p>
      <p>{postedTime}</p>
      <div className="delete-container">
        <button type="button" onClick={onToggleLikeButton}>
          <img alt="like" src={ImgUrl} /> Like
        </button>
        <button
          type="button"
          alt="delete"
          data-testid="delete"
          onClick={deleteTheOnclickElement}
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
