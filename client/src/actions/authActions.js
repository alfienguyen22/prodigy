import axios from "axios";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "../utils/setAuthToken";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Register an user
export const registerUser = (new_user_data, history) => (dispatch) => {
    axios
        .post("/api/users/register", new_user_data)
        .then((res) => {
            history.push("/");
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
        });
};
