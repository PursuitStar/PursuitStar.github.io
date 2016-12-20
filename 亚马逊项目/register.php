<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/10/25
 * Time: 14:56
 */
//echo "<pre>";
//print_r($_POST);
//echo '</pre>';

$username = $_POST['username'];
$password = $_POST['password'];
$telephone = $_POST['telephone'];
$email = $_POST['email'];

//php访问数据库
//采用面向对象方式
//01 创建对象的同时初始化
$mysqli = new mysqli('localhost','root','','zsw');
$mysqli->set_charset('utf8');

//02在该数据库下，创建一个新表
$sql = "create table if not exists amazon_user(
        id int not null auto_increment primary key,
        username varchar(40) not null UNIQUE,
        telephone varchar(40) not null UNIQUE,
        email varchar(40) not null UNIQUE,
        password varchar(18) not null
)engine=InnoDB default charset=utf8;";
$success = $mysqli->query($sql);


if($username != "" && $password != "" && $email != "" && $telephone != ""){
    $sql = "insert into amazon_user(username,password,telephone,email) VALUES ('$username','$password','$telephone','$email');";
    $success = $mysqli->query($sql);
    echo isSuccess($success);
}else if($username != ""){
    $sql = 'select username from amazon_user';
    $result = $mysqli->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $isRegister = false;
    foreach ($row as $array){
        if($username == $array['username']){
            $isRegister = true;
            break;
        }else{
            $isRegister = false;
        };
    }
    if($isRegister){
        echo true;
    }else{
        echo false;
    }
}else if($telephone != ""){
    $sql = 'select telephone from amazon_user';
    $result = $mysqli->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    foreach ($row as $array){
        if($telephone == $array['telephone']){
            echo true;
            break;
        }else{
            echo false;
        };
    }
}else if($email != ""){
    $sql = 'select email from amazon_user';
    $result = $mysqli->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    foreach ($row as $array){
        if($email == $array['email']){
            echo true;
            break;
        }else{
            echo false;
        };
    }
}

//if($username !== ''){
//    if($password !== ''){
//        //把字符串类型的变量，转成整数类型
//        $age = intval($age);
//        $sql = "insert into register_user(username,password,age,sex) VALUES ('$username','$password',$age,'$sex');";
//        if($mysqli->query($sql)){
//            echo '插入成功';
//            echo '<script>
//                alert("注册成功！");
//                location.href = "02-login.html";
//            </script>';
//        }else {
//            echo '插入失败';
//            echo '<script>
//                alert("用户名已存在，请重新注册！");
//                location.href = "01-register.html";
//            </script>';
//        }
//    }else {
//        echo '<script>
//                alert("密码不能为空，请重新注册！");
//                location.href = "01-register.html";
//            </script>';
//    }
//
//}else {
//    echo '<script>
//                alert("用户名不能为空，请重新注册！");
//                location.href = "01-register.html";
//            </script>';
//}
//自定义函数 用于判断 数据库操作是否成功
function isSuccess($value){
    if($value){
        return true;
    }else {
        die("false").'<br>';
    }
}
?>