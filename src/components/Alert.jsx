const Alert = ({ message, type }) => {
	let emoji = '';
	if (type === 'success') {
		emoji = '😊'; // Emoji de carinha sorridente para sucesso
	} else if (type === 'error') {
		emoji = '😢'; // Emoji de carinha triste para erro
	}

	return (
		<div className="container">
			<div className={`alert ${type}`}>
				<span>
					{message} {emoji}
				</span>
			</div>
		</div>
	);
};

export default Alert;
