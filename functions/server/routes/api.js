const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/videos');

const db = "mongodb://useramit:amit123@ds133104.mlab.com:33104/videoplayer";

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error!" + err);
    }
})

router.get('/', function(req, res){
    res.send("hello world");
})

router.get('/videos', function(req, res){
   console.log('Get request for all videos');
   Video.find({})
   .exec(function(err, videos){
      if(err){
          console.log("Error retrieving videos");
      }else{
          res.json(videos);
      }
   })
})

module.exports = router;