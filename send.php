<?php 

if(isset($_POST['submit'])){
   
$to = "support@artemusicum.com"; 
$from = "artemusicum@gmail.com"; 
 
/* Указываем переменные, в которые будет записываться информация с формы */
$first_name = $_POST['first_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$subject = "email пользователя для рассылки с сайта";
     
/* Проверка правильного написания e-mail адреса */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> Е-mail адрес не существует");
}
     
/* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
$mail_to_myemail = "Привет, Artemusicum! Хочу промокод -10% 
Имя отправителя: $first_name
E-mail: $email
";  
     
$headers = "From: $from \r\n";
     
/* Отправка сообщения, с помощью функции mail() */
mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
// echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы будем присылать Вам новости о новых концертах.";
  
// echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";
}
?>
<!--Переадресация на главную страницу сайта-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://artemusicum.com/#contacts");}
window.setTimeout("changeurl();",1000);
  alert("Приветствуем Вас среди наших друзей! Ваш персональный промокод - ARTE - на все концерты из нашей афиши. До встречи на концерте!");
</script>