var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({ name: String, message: String});
var Message = mongoose.model('message', MessageSchema, 'messages');

// BASE ROUTE
router.get('/', function(req,res){
  Message.find({}, function(err, messages){
    if(err){
      console.log(err);
      res.send(500);
    }

    res.send(messages);
  });
});

router.post('/', function(req,res){
  var message = new Message({
    name: req.body.name,
    message: req.body.message
  });

  message.save(function(err, savedMessage){
    if(err){
      console.log(err);
      res.send(500);
    }

    res.send(savedMessage);
  });
});

module.exports = router;
