<?php


$banco = 'clinic_db';
$usuario = 'root';
$senha = '';
$servidor = 'localhost';

date_default_timezone_set('America/Sao_Paulo');

// Tenta estabelecer uma conexão com o banco de dados usando a extensão mysqli.
$conn = new mysqli($servidor, $usuario, $senha, $banco);

// Verifica se houve algum erro na conexão.
if ($conn->connect_error) {
	die("Falha na conexão: " . $conn->connect_error);
}
