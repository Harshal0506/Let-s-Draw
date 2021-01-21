const express = require('express');
const app = express();
const http=require('http');
const server=http.createServer(app);
const socketio = require('socket.io');
const io=socketio(server);
app.use('/',express.static(__dirname+'/public'));
io.on('connection',newConnection);

const PORT=process.env.PORT || 3000;


function newConnection(socket){
    console.log('new connection'+socket.id);
    


    socket.on('mouse',mouseMsg);


    function mouseMsg(data){
        socket.broadcast.emit('mouse',data);
        console.log(data)
    }
}

server.listen(PORT,()=>{
    console.log("Server started on localhost 3000");
})