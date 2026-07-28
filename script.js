let socket;


function connect(){

let token=document.getElementById("token").value;


if(!token){

alert("Enter Deriv API Token");
return;

}


socket=new WebSocket(
"wss://ws.derivws.com/websockets/v3?app_id=1089"
);



socket.onopen=function(){

document.getElementById("status").innerHTML=
"Connecting...";


socket.send(JSON.stringify({

authorize:token

}));

};



socket.onmessage=function(event){


let data=JSON.parse(event.data);


console.log(data);



if(data.error){

document.getElementById("status").innerHTML=
"❌ "+data.error.message;

return;

}



if(data.authorize){


document.getElementById("status").innerHTML=
"✅ Connected";


socket.send(JSON.stringify({

balance:1

}));

}



if(data.balance){


document.getElementById("balance").innerHTML=
"Balance: "+
data.balance.currency+
" "+
data.balance.balance;


}


};


socket.onerror=function(){

document.getElementById("status").innerHTML=
"Connection Error";

};


}
