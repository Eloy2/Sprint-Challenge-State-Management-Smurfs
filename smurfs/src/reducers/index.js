const initialState = [
    
]

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "POST_API":
            console.log("post api")
            return [ ...state, action.payload ]
        default:
            return state;
    }
}