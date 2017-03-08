$(document).ready(function(){

	var rootRef=firebase.database().ref();
	var usersRef=rootRef.child("Users");
	usersRef.on("child_added",snap=>{
		//https://firebase.google.com/docs/database/web/lists-of-data
		// Retrieve lists of items or listen for additions to a list of items. This event is triggered once for each existing child and then again every time a new child is added to the specified path. The listener is passed a snapshot containing the new child's data.
		//老数据改变，并不更新， 新数据增加可以显示新数据
		//老数据改变后更新需要用child_changed
		//child_added is an event listener different from value listener
 		//snap is also an object , 可以用来遍历
 		var name=snap.child("Name").val();
 		var email=snap.child("Email").val();
 		
 		$("#table_body").append("<tr><td>"+name+"</td><td>"+email+"</td><td><button>Remove<button></td></tr>");

	});
	
})