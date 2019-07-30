


var nodemailer = require('nodemailer');
const sendmail = require('sendmail')();



module.exports = (model) => {


   
    const controller = {};

    controller.sendEmail = async function(req, res) {

        try {
            var type='';
            var name = req.body.firstname +' '+req.body.lastname


            var comment = req.body.comment +' - '+name;


            if (req.body.type === 'references'){
                type='References Request';
            }else if(req.body.type === 'hiring'){
                type='Hiring Request';

            }else if(req.body.type === 'general'){
                type='General Questions';

            }




            sendmail({
                from: req.body.email,
                to: 'p.moraga.navas@gmail.com',
                subject: type,
                html: comment,
              }, function(err, reply) {
                console.log(err && err.stack);
                console.dir(reply);
            });

            /*
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'p.moraga.navas@gmail.com',
                  pass: 'yourpassword'
                }
              });
              
              
              var mailOptions = {
                from: 'youremail@gmail.com',
                to: 'p.moraga.navas@gmail.com',
                subject: 'Sending Email using Node.js',
                text: 'That was easy!'
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });*/

        } catch (error) {
            res.status(412).json({ msg: error.message });
        }

    }

    return controller;
}