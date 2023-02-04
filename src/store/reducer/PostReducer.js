import {
  ADD_POST,
  ADD_TASK,
  DELETE_POST,
  UPDATE_POST,
} from "../action/PostAction";

const initstate = [
  {
    id: "1",
    title: "Todo",
    Text: ["lessons"],
    date: "2023-11-11",
    color: "#ff0000",
    fontColor: "#ffff",
    stylefont: "roboto",
  },
];
// const initstate = JSON.parse(localStorage.getItem('state'))? JSON.parse(localStorage.getItem('state')).post : 
// [
//      {
//       id: "1",
//       title: "Todo",
//       Text: ["lessons"],
//       date: "2023-11-11",
//       color: "#ff0000",
//       fontColor: "#ffff",
//       stylefont: "roboto",
//     },
//   ];


const postreducer = (state = initstate, action) => {
  console.log(state);

  switch (action.type) {
    case ADD_POST:
      console.log("hello");
      const clone = [...state];
      clone.push(action.value);
      return clone;
    case DELETE_POST:
      console.log("delete");
      const copy = [...state];
      const arr = copy.filter((post) => post.id !== action.value);
      return arr;

    case UPDATE_POST:
      const updatedPosts = [...state];
      const postToBeUpdated = updatedPosts.findIndex(
        (post) => post.id === action.value.id
      );
      updatedPosts[postToBeUpdated] = action.value;
      return updatedPosts;
    case ADD_TASK:
      const updatedPostTasks = [...state];
      const postToBeUpdatedTasks = updatedPostTasks.findIndex(
        (post) => post.id === action.value.id
      );
      updatedPostTasks[postToBeUpdatedTasks].Text.push(action.value.task);
      return updatedPostTasks;
    default:
      return state;
  }
};

export default postreducer;
