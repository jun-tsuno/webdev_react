import Field from "./components/Field";
import Button from "./components/Button";
import { useState, useReducer } from "react";
import { signUpReducer, initialState } from "./reducers/signUpReducer";
import { SET_USER, SET_EMAIL_ERR, SET_PASS_ERR } from "../action/action";
import { emailInvalid, passwordInvalid } from "./helpers/validation";
/**
 *
 *
 * Create a form with common features like validation and hint messages.
 *
 * - Add validation for email and password (https://www.w3schools.com/howto/howto_js_password_validation.asp)
 * - Show a hint message for validation errors
 * - Show a confirmation alert/modal/dialog when the Clear button is pressed
 * - Clear the form when the dialog is confirmed
 * - When validation checks are good, show a confirmation alert/modal/dialog
 * - Manage the state of the form using React Hooks (useState, useEffect, useReducer)
 *
 */

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [state, dispatch] = useReducer(signUpReducer, initialState);
	const { emailErr, passwordErr } = state;

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationSuccess =
			!emailInvalid(email) && !passwordInvalid(password);

		if (validationSuccess) {
			setEmail("");
			setPassword("");
			dispatch({ type: SET_USER, payload: { email, password } });
			alert(`SignUp with ${email}`);
		} else {
			dispatch({
				type: SET_EMAIL_ERR,
				payload: emailInvalid(email),
			});
			dispatch({
				type: SET_PASS_ERR,
				payload: passwordInvalid(password),
			});
		}
	};

	const handleClear = (e) => {
		e.preventDefault();
		setEmail("");
		setPassword("");
	};

	return (
		<div className="App">
			<h1>React Lab 5</h1>
			<h1>Login</h1>
			<div className="Container">
				<form onSubmit={handleSubmit}>
					<Field
						label="Email"
						value={email}
						handleChange={setEmail}
						err={emailErr}
					/>
					<Field
						label="Password"
						value={password}
						handleChange={setPassword}
						err={passwordErr}
					/>
					<div className="Buttons">
						<Button label="Clear" onClick={handleClear} />
						<div className="Spacer" />
						<Button label="Login" type="submit" />
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
