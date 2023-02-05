import { directus } from "../server/directus";
import { AUTH_USER } from "../store/constants/AuthAction";

export const createuser = (userData, navigate) => async (dispatch) => {
  try {
    const data = await directus.createUser(userData);
    dispatch({ type: AUTH_USER, value: data });
    navigate("/Home");
  } catch (error) {
    console.log(error);
  }
};
export const signin = (userData, navigate) => async (dispatch) => {
  try {
    const data = await directus.getUser(userData);
    dispatch({ type: AUTH_USER, value: data });
    navigate("/Home");
  } catch (error) {
    console.log(error);
  }
};
