import React, { useState } from "react";
import { connect } from 'react-redux';
import { postApi } from '../actions';


const Form = (props) => {
    // STATE
    const [formState, setFormState] = useState({
        name: "",
        age: "", // IS THERE A WAY TO SET THIS TO INTERGER
        height: ""
    });

    // CHANGE HANDLER
    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
            age: parseInt(e.target.value, 10) 
        })
    }

    // SUBMIT HANDLER
    const submitHandler = e => {
        e.preventDefault();

        props.postApi(formState);
        
        setFormState({
            name: "",
            age: "",
            height: ""
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <h3>ADD SMURF BELOW</h3>

            <input name="name" placeholder="name" 
            value={formState.name} onChange={changeHandler}/>

            <input name="age" placeholder="age" type="number"
            value={formState.age} onChange={changeHandler}/>

            <input name="height" placeholder="height" 
            value={formState.height} onChange={changeHandler}/>

            <button type="submit" onClick={props.postApi}>Click here for post</button>
        </form>
    );
}

export default connect(null, { postApi: postApi })(Form);