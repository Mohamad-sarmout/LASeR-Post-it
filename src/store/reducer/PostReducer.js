import { ADD_POST, DELETE_POST, UPDATE_POST } from "../action/PostAction";


const initstate = [
    {id:"1",title:"Todo",Text:"lessons",date:"2023-11-11",color:"#929aab",stylefont:"roboto"}
]

const postreducer = (state = initstate,action) => {

    switch (action.type) {
        case ADD_POST:
        const clone = [...state]
        clone.push(action.value);
        return clone; 
        case DELETE_POST:
            const copy = [...state] 
            const arr=  copy.filter(post =>post.id!==action.value)
             return arr;



        case UPDATE_POST:
        const updatedPosts=[...state]
            const postToBeUpdated= updatedPosts.findIndex(post=>post.id===action.value.id)
         updatedPosts[postToBeUpdated]=action.value;
            return updatedPosts;
        default:

            return state;
    }


}




export default postreducer;