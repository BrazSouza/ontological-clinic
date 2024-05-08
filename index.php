<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include_once('./backend/config/config.php');

// Verifica se a requisição foi feita via método POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Verifica se os campos obrigatórios do formulário foram preenchidos
	if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['number']) && !empty($_POST['date'])) {
		// Atribui os valores dos campos do formulário a variáveis
		$name = $_POST['name'];
		$email = $_POST['email'];
		$number = $_POST['number'];
		$date = $_POST['date'];

		// Verifica a conexão com o banco de dados
		if ($conn->connect_error) {
			echo json_encode(array('success' => false, 'message' => 'Falha na conexão: ' . $conn->connect_error));
			die();
		}

		// Prepara a consulta SQL para inserir os dados do formulário na tabela adequada
		$sql = "INSERT INTO contact_form (name, email, number, date) VALUES ('$name', '$email', '$number', '$date')";

		// Executa a consulta SQL
		if ($conn->query($sql) === TRUE) {
			echo json_encode(array('success' => true, 'message' => 'Formulário enviado com sucesso!'));
		} else {
			echo json_encode(array('success' => false, 'message' => 'Erro ao enviar o formulário: ' . $conn->error));
		}

		// Fecha a conexão com o banco de dados
		$conn->close();
	} else {
		// Se algum dos campos obrigatórios estiver faltando, retorna uma mensagem de erro
		echo json_encode(array('success' => false, 'message' => 'Por favor, preencha todos os campos do formulário.'));
	}
} else {
	// Se a requisição não foi feita via método POST, retorna uma mensagem de erro
	echo json_encode(array('success' => false, 'message' => 'Erro ao processar o formulário: método de requisição inválido.'));
}
