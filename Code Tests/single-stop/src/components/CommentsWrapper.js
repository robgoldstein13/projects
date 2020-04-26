import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { triggerDeleteComments } from '../redux/actions';

const CommentsWrapper = props => {
  const dispatch = useDispatch();
  
  const handleDelete = (id, e) => {
    e.stopPropagation();
    dispatch(triggerDeleteComments(id));
  }

  if(!props.comments) return <div className="commentsContainer">No Comments</div>
  
  return(
    <div>
      {props.emailError && <div className="error">Email address is requires!</div>}
      <div className="commentsContainer">{Object.values(props.comments).map(item=>{
             return (
              <div className="commentBlock" key={item.id}>
                <p className="email">{item.email}:</p>
                <p className="body">{item.body} <button onClick={e => handleDelete(item.id, e)}>Delete</button></p>
                <p className="time">{item.date} at {item.time}</p>
              </div>
             )
      })}
      </div>
    </div>
  )
   
}

CommentsWrapper.propTypes = {
    comments: PropTypes.object,
    emailError: PropTypes.bool,
 }

export default CommentsWrapper;