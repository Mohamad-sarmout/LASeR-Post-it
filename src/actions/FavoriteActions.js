import { directus } from "../server/directus";
import { FAV_POST, REV_POST } from "../store/constants/FavoriteAction";
import { DELETE_POST } from "../store/constants/PostAction";
import { ADD_POST_TO_TRASH } from "../store/constants/TrashAction";
import { DELETE_POST } from "../store/constants/PostAction";
export const favpost = (postData) => async (dispatch) => {
  try {
    const updatedPost = await directus.updateTask({
      ...postData,
      favorite: true,
    });
    console.log(updatedPost);
    dispatch({ type: FAV_POST, value: updatedPost });
  } catch (error) {
    console.log(error);
  }
};
export const unfavpost = (postData) => async (dispatch) => {
  try {
    const updatedPost = await directus.updateTask({
      ...postData,
      favorite: false,
    });
    dispatch({ type: REV_POST, value: updatedPost.id });
  } catch (error) {
    console.log(error);
  }
};
export const deleteFavPost = (postData) => async (dispatch) => {
  try {
    const updatedPost = await directus.updateTask({
      ...postData,
      favorite: false,
      trash: true,
    });
    dispatch({ type: REV_POST, value: updatedPost.id });
    dispatch({ type: ADD_POST_TO_TRASH, value: updatedPost });
    dispatch({ type: DELETE_POST, value: updatedPost.id });
  } catch (error) {
    console.log(error);
  }
};
