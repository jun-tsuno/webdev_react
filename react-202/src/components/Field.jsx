export default function Field({ label, value, handleChange, err }) {
	return (
		<div className="Field">
			<div className="Field__Label">{label}</div>
			<input
				className="Field__Input"
				value={value}
				onChange={(e) => handleChange(e.target.value)}
			/>
			<div className="Field__HelperMessage">{err}</div>
		</div>
	);
}
