import { createAction } from "@reduxjs/toolkit";

const SET_ID = "userdata/setId";
const SET_CATEGORY_KEY = "categoryKey/set";

const SetIdAction = createAction(SET_ID, (state) => ({
    payload: {
        ID: state
    }
}));

const setCategoryKeyAction = createAction(SET_CATEGORY_KEY, (state) => ({
    payload: state
}))

export { SetIdAction, setCategoryKeyAction };