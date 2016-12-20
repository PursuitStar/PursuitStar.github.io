<?php
//在这里判断 输入的用户名和密码是否存在并且是否匹配，验证登录是否成功
$username = $_GET['username'];
$password = $_GET['password'];

//php 操作数据库
//01
$mysqli = new mysqli('localhost','root','','zsw');
$mysqli->set_charset('utf8');
//02
$sql = "select * from amazon_user where telephone = '$username' or email='$username'";
//因为字段username 是唯一的，所以sql语句查询到的结果数只可能是0或者1

/*//这种方法安全性不高，很容易被外部破解
$sql = "select * from register_user where username='$username' and password='$password'"; //比如别人在账号那儿输入 'or 1=1 #' 就能被破解了
$result = $mysqli->query($sql);
if($result->num_rows!=0){
    echo '<script>alert("登录成功!")</script>';
}else{
    echo '<script>alert("登录失败！");
    location.href = "02-login.html";
    </script>';
}
*/

//03
$result = $mysqli->query($sql);
if($result->num_rows == 0){
    //用户名不存在
    echo '0';
}else {
    //因为如果用户名存在，只可能有一条被查询出来的数据，所以不需要遍历了。
    $array = $result->fetch_assoc();
    if($array['password']==$password){
        echo '1';
    }else{
        echo '2';
    }
}
?>