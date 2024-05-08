const Alert = ({ message, type }) => {
	return (
		<div className="container">
			<div className={`alert ${type}`}>
				<span>{message} 😊</span>
			</div>
		</div>
	);
};

export default Alert;
