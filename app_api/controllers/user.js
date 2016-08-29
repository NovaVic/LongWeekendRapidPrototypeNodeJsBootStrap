require('../models/user')
var mongoose = require('mongoose');
var User = mongoose.model('User'); 

var sendJsonResponse = function(res, status, statusString, content, success, view) {
        res.render(view, {
            status_string: statusString,
            success: success,
            content: content
        });
}

module.exports.userCreate = function (req, res) {
        var view = '../../app_server/views/status'
        User.create(
            {
                name: req.body.namefield,
                email: req.body.emailfield,
                password: req.body.passfield, 
                about:  req.body.aboutfield ? req.body.aboutfield : ''              
            }, function (err, user) {
                if (err) {
                    sendJsonResponse(res, 400, 'User cannot be created.', err, false, view)
                }
                else {
                
                    sendJsonResponse(res, 201, 'User '+ user.name +' created', user, true, view);
                }
            }
        );

}




module.exports.userSearch = function (req, res) {
        var statusView = '../../app_server/views/status';
        var userView = '../../app_server/views/user'


         if (req.query.emailfield) {
            console.log(req.query.emailfield); 

            User.findOne(
                   {'email': req.query.emailfield}
                ).select("name email about").exec( 
                    function(err, user) {
                        if (!user) {
                        
                            sendJsonResponse(res, 404, 'User does not exist.', err, false, statusView)           
                            return;
                        }
                        else if (err) {
                            sendJsonResponse(res, 400, 'Bad request.', err, false, statusView)           
                            return;
                        }
                        //improve this part or make the view more flexible no need to send 
                        //user.about separately
                        console.log('user is' + user);
                        sendJsonResponse(res, 200, 'Info about user ', user, true, userView)           

                    }
            
            );
        }
        else {
            //expand
        }
}