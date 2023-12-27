import { ADD_POST, UPDATE_POST } from "../action/PostAction";

const initstate = [
    {id:"1",title:"Todo",Text:"lessons",date:"2023-11-11",color:"#ff0000",stylefont:"roboto"}
]



const postreducer = (state = initstate,action) =>
{console.log(state);

    switch (action.type) {
        case ADD_POST:
        console.log("hello");
        const clone = [...state]
        clone.push(action.value);
        return clone; 
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