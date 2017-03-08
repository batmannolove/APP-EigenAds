var mainText=document.getElementById("mainText");
var submitBtn=document.getElementById("submitBtn");
var email1=document.getElementById("email1");

function submitClick()
{
	var firebaseRef=firebase.database().ref();
	//get root object
	//https://firebase.google.com/docs/database/web/read-and-write

	var messageText=mainText.value;

	firebaseRef.child("Email").push(messageText);
	//push 后 key是random的id  value是你的输入值
	//firebaseRef.child("Text").set(messageText);


	//retrive
	var email1Ref=firebaseRef.child("Text");
	email1Ref.on('value',function(datatemp){
		//datatemp 是一个object
		email1.innerText=datatemp.val();
	});



}
