import { FAV_POST, REV_POST } from "../action/FavoriteAction";

const initstate = [];



const favoritepostreducer = (state = initstate,action) => {
  switch (action.type) {
    case FAV_POST:
      console.log("hello");
      const clone = [...state];
      clone.push(action.value);
      return clone;
    case REV_POST:
      console.log("delete");
      const copy = [...state];
      const arr = copy.filter((post) => post.id !== action.value);
      return arr;
    default:
      return state;
  }
}

export default favoritepostreducer