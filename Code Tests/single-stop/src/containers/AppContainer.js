import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { triggerSetComments } from '../redux/actions';
import App from '../App';

const AppContainer = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(triggerSetComments());
  },[dispatch]);

  return <App/>
}
export default AppContainer;
