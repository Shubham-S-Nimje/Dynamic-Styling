import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setisValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setisValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0){
      setisValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className="form-control">
        <label style={{color: !isValid?'red':'black'}} >Course Goal</label>
        <input 
        style={{borderColor: !isValid?'red':'#ccc',
        background: !isValid?'salmon':'transparent'
        }}
        type="text" 
        onChange={goalInputChangeHandler} />
      </div> */}
      <div className={`form-control ${!isValid?'invalid':'valid'}`}>
        
        <label>Course Goal</label>
        <input
        type="text" 
        onChange={goalInputChangeHandler} />
      </div>
      <button className={`button ${!isValid?'invalid':'valid'}`} type="submit">Add Goal</button>
    </form>
  );
};

export default CourseInput;
