import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slices/counterSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const count = useSelector((state) => state.count.value);
    const navigate = useNavigate();
    const dispatch = useDispatch(); //Input data to global state

    const handleDecrement = () => {
        dispatch(decrement(1))
    };

    const handleIncrement = () => {
        dispatch(increment(1))
    };

  return (
    <div>
        <button onClick={ handleDecrement }>Decrement</button>
        <p>Count: { count }</p>
        <button onClick={ handleIncrement }>Increment</button>
        <button onClick={ () => navigate("/contact")}>Navigate to Contact</button>
    </div>
  );
};

export default Home;