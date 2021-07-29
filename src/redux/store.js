import { configureStore } from "@reduxjs/toolkit";

import {
	UserReducer,
	StackNavReducer
} from "./slices";

export default configureStore({
	reducer: {
		user: UserReducer,
		stackNav:StackNavReducer
	},
});
