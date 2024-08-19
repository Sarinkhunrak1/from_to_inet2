<?php

    require_once('dbconfig.php');

    $db = new Database('localhost','pages','root','');

    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        echo json_encode($db->query('SELECT * From pages'));
    } else if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        echo 'This is port';
    } else {
        http_response_code(405);
    }






?>