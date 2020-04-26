import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const CountContainer = () => {
    const [counter, updateCounter] = useState(0);
    const count = useSelector(state => state.commentReducers.data);
    
    useEffect(() => {
        if(count){
            updateCounter(Object.keys(count).length);
        }
    },[count])
    
    return (
        <h1>Comments <span>{counter > 0 && `(${counter})`}</span> </h1>
    )

}


export default CountContainer;