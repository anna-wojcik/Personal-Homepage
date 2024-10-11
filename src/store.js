import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './feature/ThemeSwitch/themeSlice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;