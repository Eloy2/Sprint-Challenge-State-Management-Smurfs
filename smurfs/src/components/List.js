import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import axios from 'axios';

const List = (props) => {
    const [smurfList, setSmurfList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3333/smurfs")
            .then(res => {
                    console.log("list response", res.data);
                    setSmurfList(res.data)
            })
            .catch(err => console.log("Error from List", err))
    }, [props.initialState])

    return (
        <>
            <h3>LIST OF SMURFS</h3>
            {smurfList.map((item) => {
                return (
                    <>
                        <br/>
                            <h4>{item.name}</h4>
                            <p>age: {item.age}</p>
                            <p>height: {item.height}</p>
                        <br/>
                    </>
                )
            })}
        </>
    )
}

export default connect((state) =>{
    return {
        initialState: state
    }
})(List);