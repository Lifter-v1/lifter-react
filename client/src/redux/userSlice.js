import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	user: {
		id: "1",
		accountCreateDate: new Date(),
		name: "Gymbotastica",
		email: "email@email.com",
		password: "password",
		gender: "female",
		profileImage:
			"https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80",
		images: [
			"https://images.unsplash.com/photo-1579722820903-01d3e776f85e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			"https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
		],
	},
	preference: {
		gender: "female",
		activity: ["kickboxing", "yoga"],
	},
};

// ================================= SLICES ===============================//

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userCreated: {
			reducer(state, action) {
				state.user.push({ user: { ...action.payload } });
			},
			prepare(name, email, password, gender) {
				return {
					id: nanoid(),
					accountCreatedOn: new Date().toISOString(),
					name,
					email,
					password,
					gender,
				};
			},
		},
		preferenceCreated(state, action) {
			const { gender, activity } = action.payload;
			state.user.push({ preference: { gender, activity } });
		},
		userUpdated(state, action) {
			const { keyUpdated, valueUpdated } = action.payload;
			state.user.user[keyUpdated] = valueUpdated;
		},
		preferenceUpdated(state, action) {
			const { keyUpdated, valueUpdated } = action.payload;
			state.user.preference[keyUpdated] = valueUpdated;
		},
	},
});

// ============================= EXPORTS ========================== //
export const { userCreated, preferenceCreated, userUpdated, preferenceUpdated } = userSlice.actions;
export default userSlice.reducer;
