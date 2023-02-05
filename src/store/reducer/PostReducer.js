import {
  ADD_POST,
  ADD_TASK,
  DELETE_POST,
  GET_POSTS,
  UPDATE_POST,
} from "../constants/PostAction";

const initstate = [];

const postreducer = (state = initstate, action) => {
  switch (action.type) {
    case GET_POSTS:
      return [...action.value];
    case ADD_POST:
      const clone = [...state];
      clone.push(action.value);
      return clone;
    case DELETE_POST:
      const copy = [...state];
      const arr = copy.filter((post) => post.id !== action.value);
      return arr;
    case UPDATE_POST:
      const updatedPosts = [...state];
      const postToBeUpdated = updatedPosts.findIndex(
        (post) => post.id === action.value.id
      );
      updatedPosts[postToBeUpdated] = {
        ...updatedPosts[postToBeUpdated],
        ...action.value,
      };
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
