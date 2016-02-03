'use strict';
var request = require('request');
var fs      = require('fs');

var second  = 1000;
var minute  = second * 60;
var hour    = minute * 60;
var timeout = 1.45*hour;

var url         = 'http://live-radio01.mediahubaustralia.com/2TJW/aac/'
var destination = '/volume1/music/music/radio/morning.aac';
var file = fs.createWriteStream(destination);

request(url).pipe(fs.createWriteStream(destination))

setTimeout(function () {
  file.close(function () {
    process.exit(0);
  });
}, timeout);
