'use strict';
var request = require('request');
var fs      = require('fs');
var net = require('net');

var second  = 1000;
var minute  = second * 60;
var hour    = minute * 60;
var timeout = 2*hour;

var url         = 'http://shoutmedia.abc.net.au:10426/';
var destination = '/volume1/music/music/radio/morning.mp3';
var file = fs.createWriteStream(destination);

var msg = 'GET / HTTP/1.1\r\n' +
          'User-Agent: node\r\n' +
          'Host: http://shoutmedia.abc.net.au/\r\n' +
          'Accept: */*\r\n\r\n';

var client = net.connect(10426, 'shoutmedia.abc.net.au', function() {
  console.log('connected to the server');
  client.write(msg);
});

client.on('data', function (data) {
  file.write(data);
})

setTimeout(function () {
  file.close(function () {
    process.exit(0);
  });
}, timeout);
