var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'lo........uno@gmail.com',
        pass:'secret'
    }
});

var mailOptions = {
    from:'Qualquer Nome',
    to:'raw......g@bol.com.br,anotheremail@bol.com.br,another...',
    subject:'SENDING EMAIL',
    //text:'that was easy'
    html:'<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err);
    }else{
        console.log("Email sent: "+info.response);
    }
});