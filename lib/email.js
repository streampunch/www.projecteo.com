var config = require('config');

module.exports.send = function(mailoptions, callback) {
	var nodemailer = require('nodemailer');
	
	var smtpTransport = nodemailer.createTransport('SMTP', {
	    service : 'Gmail',
	    auth: {
	        user: config.gmail.account,
	        pass: config.gmail.password
	    }
	});
	
	// send mail with defined transport object
	smtpTransport.sendMail(mailoptions, function(error, response){
		if (!mailoptions.subject || mailoptions.html) {
			callback({
				success : false,
				message : 'subject and html are required'
			});
			return;		
		}
		if (mailOptions.callback) { 
		    if(error) {
		        callback({
					success : false,
					message : 'error',
					error : error,
					response : response
				});
		    } else {
				callback({
					success : true,
					message : 'ok'
				});
		    }
		}
		smtpTransport.close();
	});
};