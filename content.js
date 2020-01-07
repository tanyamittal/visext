
// $.getJSON("https://uinames.com/api/?ext", function(data){
// 	console.log(data);
// })

  // document.getElementById("refresh").addEventListener("click", function(){
		chrome.runtime.sendMessage({syncing: "LAM"}, function(response) {
		//console.log(response);
		console.log(response.farewell);
		console.log(response.farewell.name);
		//$(".scroll-link")[5].innerHTML = response.farewell.name;
        document.getElementsByTagName("body")[0].innerHTML += "<div><h3> ok "+  response.farewell.name +"</h3></div>";
		});
   // });
   

//chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {

 // console.log(msg);
 // console.log(msg[0].name);
  //document.getElementsByTagName("body")[0].innerHTML += "<div><h3> ok </h3></div>";
//});



// if(window.location.href.indexOf("http://www.kshitijeducation.in")>-1){