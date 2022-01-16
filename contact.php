<?php 
if (isset($_POST['submit']))
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $sub = $_POST['sub'];
    $msg = $_POST['msg'];
    

    $to = 'divyagotecha7@gmail.com';
    $subject = 'Form Submission';
    $message = "Name: ".$name."\n"."Email: ".$email."\n"."Subject: ".$sub."\n"."Message: ".$msg."\n";
    $headers = "From: ".$name;

    if(mail($to, $subject , $message ,$headers))
    {
        echo "<h1>Sent Successfully! Thank You. ".$name.", We will Contact You Shortly!</h1>";
    }
    
    else{
        echo "Something Went Wrong!";
    }
}


?>
