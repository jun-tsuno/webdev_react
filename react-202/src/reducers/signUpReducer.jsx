import { SET_USER, SET_EMAIL_ERR, SET_PASS_ERR } from "../action/action";

export const initialState = {
	user: { email: null, password: null },
	emailErr: null,
	passwordErr: null,
};

export const signUpReducer = (state, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: {
					email: action.payload.email,
					password: action.payload.password,
				},
			};

		case SET_EMAIL_ERR:
			return {
				...state,
				emailErr: action.payload,
			};

		case SET_PASS_ERR:
			return {
				...state,
				passwordErr: action.payload,
			};

		default:
			return state;
	}
};
