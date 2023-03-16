export const passwordInvalid = (pass) => {
	const hasNumber = /[0-9]/g;
	const hasUpperCase = /[A-Z]/g;
	const isLong = pass.length > 8;

	return !pass.match(hasNumber)
		? "A Number!!"
		: !pass.match(hasUpperCase)
		? "A Capital letter!!"
		: !isLong
		? "Min 8 characters!!"
		: null;
};

export const emailInvalid = (email) => {
	const emailRegex =
		/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
	return !emailRegex.test(email) ? "Invalid email address" : null;
};
