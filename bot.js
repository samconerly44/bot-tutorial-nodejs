//git status
//git add .
//git commit -m "edits"
//git push



var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
  botRegex = /^\/cool guy$/;
  penisRegex = /penis/

  if (request.text && request.user_id != "39771174" && request.user_id != "33018824"){
    if (request.text && botRegex.test(request.text)) {
      this.res.writeHead(200);
      postMessage(); 
      this.res.end();
    } else if(request.text && penisRegex.test(request.text)) {
      this.res.writeHead(200);
      postMessageThree();
      this.res.end();
    } else {
      console.log("don't care");
      this.res.writeHead(200);
      this.res.end();
    }
  } else if (request.user_id === "39771174") {
   this.res.writeHead(200);
   postMessagetwo();
   this.res.end();  
  } else if (request.user_id === "33018824"){
   this.res.writeHead(200);
   postMessageFour();
   this.res.end(); 
  } else {
  console.log("don't care");
  this.res.writeHead(200);
  this.res.end();
}
}

function postMessage() {
  var botResponse, options, body, botReq;

  botResponse = "Schunk";

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postMessagetwo() {
  var botResponse, options, body, botReq;

  botResponse = "😹😹😹";

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postMessageThree() {
  var botResponse, options, body, botReq;

  botResponse = " ";

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    'bot_id': botID,
    'text': botResponse,
    'attachments': [{
      'type': 'image',
      'url': "https://i.groupme.com/1122x2208.jpeg.ddc0c5af2edb494d9b3d8b358c28d9e6"
    }]
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function postMessageFour() {
  var botResponse, options, body, botReq;

  botResponse = " ";

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    'bot_id': botID,
    'text': botResponse,
    'attachments': [{
      'type': 'image',
      'url': "https://i.groupme.com/1774x966.jpeg.2d0ff6f92c7041fe9626500563d09445"
    }]
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}



exports.respond = respond;