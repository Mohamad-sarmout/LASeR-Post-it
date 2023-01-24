import { ADD_POST, DELETE_POST, UPDATE_POST } from "../action/PostAction";


const initstate = [

    {id:"1",title:"Todo",Text:`clean my github,create site web`,date:"2023-1-24",color:"#005d6c",stylefont:"Open Sans"},
    {id:"2",title:"Lessons",Text:"Laravel Php , React , Vue",date:"2023-1-19",color:"#e61c5d",stylefont:"Open Sans"},
    {id:"3",title:"What is Vue",Text:"Vue.js is an open-source model–view viewmodel front end JavaScript framework for building user interfaces and single-page applications.",date:"2023-1-10",color:"#f6f578",stylefont:"Open Sans"},
    {id:"4",title:"Food",Text:"Tomato,Potato,corn,Beef",date:"2023-1-10",color:"#a8896c",stylefont:"Open Sans"},
    {id:"5",title:"What is Redux?",Text:"Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments, and are easy to test.",date:"2023-1-15",color:"#00c9b1",stylefont:"Open Sans"}

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