import { ADD_POST } from "../action/PostAction";

const initstate = [
    {id:"1",title:"Todo",Text:"lessons",date:" ",color:"Red",stylefont:"roboto"}
]



const postreducer = (state = initstate,action) =>
{
    switch (action.type) {
        case ADD_POST:
        console.log("hello");
        const clone = [...state]
        clone.push(action.value);
        return clone;    
        default:
            console.log("hello");
            break;
    }

    // return state;

}




export default postreducer;