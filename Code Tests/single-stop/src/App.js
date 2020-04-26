import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { triggerSetComments } from './redux/actions';
import CommentForm from './components/CommentForm';
import CommentsContainer from './containers/CommentsWrapperContainer';
import TitleCount from './containers/TitleCountContainer';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const [emailError, updateError] = useState(false);
 
  useCallback(()=> {
    dispatch(triggerSetComments());
  },[dispatch]);

  const checkError = useCallback(val => {
    updateError(val);
  }, [])

  return (
    <div className="App">
      <TitleCount/>
      <CommentForm checkError={checkError}/>
      <CommentsContainer emailError={emailError}/>
    </div>
  );
}

export default App;
