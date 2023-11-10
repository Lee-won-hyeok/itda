import { configureStore } from "@reduxjs/toolkit";

import { userdataReducer } from "./userdata";
import { categoryKeyReducer } from "./categoryKey";

const store = configureStore({
    reducer: {userdata: userdataReducer,
    categoryKey: categoryKeyReducer}
});

export default store;