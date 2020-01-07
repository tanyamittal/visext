


function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}


// document.addEventListener("DOMContentLoaded", function(event) { 
//   	var button = document.getElementById('refresh')[0];
//   	button.addEventListener('click',function(){
//   		$.ajax({
// 		  	url: "https://uinames.com/api/?ext",
// 		  	dataType: 'json',
// 		  	async: false,
// 		  	success: function(data) {
// 		    	// y = data;
// 		    	//send to content script
// 		    	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     			chrome.tabs.sendMessage(tabs[0].id, {farewell: data}, function(response) {});  
// 				});
// 		  	}
// 		});
//   	})
// });

// window.addEventListener('load', function load(event){
//    var createButton = document.getElementById('refresh');
//    createButton.addEventListener('click', function() { 
//    		 $.ajax({
// 		  	url: "https://uinames.com/api/?ext",
// 		  	dataType: 'json',
// 		  	async: false,
// 		  	success: function(data) {
// 		    	// y = data;
// 		    	//send to content script
// 		    	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     			chrome.tabs.sendMessage(tabs[0].id, {farewell: data}, function(response) {});  
// 				});
// 		  	}
// 		});

//     });
// });
 

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	 console.log(1);
  	 var y = null;
  	 
  // 	 $.getJSON( "https://uinames.com/api/?ext", function( data ) {
  // 	 		console.log(data);

  // 	 		if(data){
  // 	 			y = data;
  // 	 		}
		// });

  	 $.ajax({
  url: "https://uinames.com/api/?ext",
  dataType: 'json',
  async: false,
  success: function(data) {
    //stuff
    //...
    y = data;
  }
});
  	   sendResponse({farewell: y});

//   		getJSONP('https://uinames.com/api/?ext', function(data){
//   			console.log(1);
//   			 console.log(data);
//   			sendResponse({farewell: data});
// }); 

  
  });

