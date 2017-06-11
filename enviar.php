<?php
	header('Content-type: application/json');
	$dados = json_decode($_POST['data']);
    $msg = "Contato: " . $dados->titulo . ", " . $dados->descricao . ", " . $dados->data . ", " . $dados->local . "";
    $assunto = "Contato do Site";
    $headers = "From:" . $_POST["user"] . "\r\n";
    $ok = mail("lazoski@gmail.com",$assunto, $msg, $headers);
    $response = array();
    $response['resp'] = $ok;
    echo json_encode($response);
?>