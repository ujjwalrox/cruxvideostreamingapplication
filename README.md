# cruxvideostreamingapplication #


A project in NodeJS for streaming videos

#Working#
A new client is connected to the server using WebSockets , A Random generated link is sent to the client , and the client is 
redirected to that link , now the video is piped to that link .

#Setting up Environment#

Run the below commands

$ npm install --> Will install all dependencies sepcified in package.json file

$ nodemon server.js --> Will start server on port 8000 by default

Instead of node we are using nodemon as we don't need to restart server everytime we do changes.

Finally open http://localhost:8000 in your browser and specify the ip address and port of the socket you want to connect to.

If you are able to connect to socket successfully , you should see a message on the server side.
