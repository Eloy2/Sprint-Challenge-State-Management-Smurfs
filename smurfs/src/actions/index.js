import axios from 'axios';

export const postApi = (data) => {
    return dispatch => {
        axios
            .post("http://localhost:3333/smurfs", data)
            .then(res => {
                console.log("Log from actions", res.data);
                dispatch({ type: "POST_API", payload: res.data[res.data.length -1] })
            })
            .catch(err => console.log("Error from api", err));
    }
}
