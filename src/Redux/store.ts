import { configureStore } from "@reduxjs/toolkit";
import versionToggleReducer from "./slice";
import printToggleReducer from "./slice";
import langToggleReducer from "./slice";
import checkLoggedInReducer from "./slice";


export const store = configureStore({
    reducer: {
        versionToggle: versionToggleReducer,
        printToggle: printToggleReducer,
        langToggle: langToggleReducer,
        checkLoggedIn: checkLoggedInReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;