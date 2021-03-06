import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducer } from "../components/Dashboard/dashboardSlice";

const store = configureStore({
	reducer:{
		dashboard: dashboardReducer,
	}
})

export default store;