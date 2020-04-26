import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CommentsWrapper from '../components/CommentsWrapper';

const CommentsWrapperContainer = props => {
  const { emailError } = props;
  const comments = useSelector(state => state.commentReducers.data);
 
  return (
    <CommentsWrapper comments={comments} emailError={emailError}/>
  )
}

CommentsWrapperContainer.propTypes = {
  emailError: PropTypes.bool,
}
export default CommentsWrapperContainer;