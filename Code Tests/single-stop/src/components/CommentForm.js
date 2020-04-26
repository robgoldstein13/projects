import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { triggerAddComment } from '../redux/actions';

const CommentForm = props => {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();

    const handleAddComment = () => {
    
        if(!email) {
            console.log('error');
            props.checkError(true);
            return false;
        }
        if(!comment){ 
            props.checkError(false);   
            return false;
        
        }
        props.checkError(false);
        dispatch(triggerAddComment(email, comment));
    }

    useEffect(()=>{
        return () => {
            setEmail('');
            setComment('');
        }
    },[])

    return (
    <form id="commentsForm">
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="comments">Comment</label>
            <input type="text" id="comments" value={comment} onChange={e => setComment(e.target.value)}/>
        </div>
        <button onClick={handleAddComment}>Add Comment</button>   
     </form>
    )
}

CommentForm.propTypes = {
    checkError: PropTypes.func,
}
export default CommentForm;
