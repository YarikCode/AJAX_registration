<?php 

$email = $_POST['email'];
$login = $_POST['login'];
$password = $_POST['password'];

$db_file = "database.txt";
$file_arr = file($db_file);
$lines = count($file_arr);

$freeMail = true;
$new_str = $lines . " " . $email . " " . $login . " " . $password;

if($lines == 0){
    file_put_contents($db_file, PHP_EOL . $new_str, FILE_APPEND);
}
else{
    for($i = 0; $i < $lines; $i++){
        if(explode(" ", $file_arr[$i])[1] == $email){
            $freeMail = false;
        }
    }
    if($freeMail == true){
        file_put_contents($db_file, PHP_EOL . $new_str, FILE_APPEND);
    }
    else{
        echo "Пользователь с такой почтой уже существует!";
    }
}