import { ADD_POST, DELETE_POST } from "../action/PostAction";

const initstate = [
    {id:1,title:"Todo",Text:"lessons",date:" ",color:"Red",stylefont:"roboto"},
    {id:2,title:"Todo",Text:"lessons",date:" ",color:"Red",stylefont:"roboto"}
]

const postreducer = (state = initstate,action) =>
{
    switch (action.type) {
        case ADD_POST:
        console.log("hello");
        const clone = [...state]
        clone.push(action.value);
        return clone; 
        case DELETE_POST:
            console.log("delete");
            const copy = [...state] 
            const arr=  copy.filter(post =>post.id!==action.value)
             return arr;

         

    }

    return state;

}




export default postreducer;