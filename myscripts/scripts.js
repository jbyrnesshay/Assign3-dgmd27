
//https://www.labnol.org/internet/embed-mute-youtube-video/29149/
// below youtube function to mute from https://digiztal.blogspot.com/2016/07/how-to-embed-youtube-video-autoplay-audio-muted.html
 /*function onYouTubeIframeAPIReady() {
      var player;
      player = new YT.Player('muteYouTubeVideoPlayer', {
        videoId: 'dYSfk29YWUo', 
        width: 640,               
        height: 400,              
        playerVars: {
          autoplay: 1,        // Auto-play when video on load
          controls: 0,        // Show pause/play buttons in player
          showinfo: 0,        // Hide the video title
          modestbranding: 1,  // Hide the Youtube Logo
          loop: 1,            // Run the video in a loop
          cc_load_policty: 0, // Hide closed captions
          iv_load_policy: 3,  // Hide the Video Annotations
          autohide: 0         // Hide video controls when playing
        },
        events: {
          onReady: function(e) {
            e.target.mute();
          }
        }
      });
     }*/
function onYouTubeIframeAPIReady() {
      var player;
      player = new YT.Player('background-content-container', {
        videoId: 'dYSfk29YWUo', 
        width: $(window).width(),               
        height: $(window).height(),  
        fitToBackground: true,  

        playerVars: {
          autoplay: 1,        // Auto-play when video on load
          controls: 0,        // Show pause/play buttons in player
          showinfo: 0,        // Hide the video title
          modestbranding: 1,  // Hide the Youtube Logo
          wmode: 'transparent',
          loop: 1,            // Run the video in a loop
          cc_load_policty: 0, // Hide closed captions
          iv_load_policy: 3,  // Hide the Video Annotations
          autohide: 0         // Hide video controls when playing
        },
        events: {
          onReady: function(e) {
            e.target.mute();
          }
        }
      });
     }

/*
     function onYouTubeIframeAPIReady() {
      var player;
      player = new YT.Player('muteYouTubeVideoPlayer', {
        videoId: 'dYSfk29YWUo', 
        width: 640,               
        height: 400,              
        playerVars: {
          autoplay: 1,        // Auto-play when video on load
          controls: 0,        // Show pause/play buttons in player
          showinfo: 0,        // Hide the video title
          modestbranding: 1,  // Hide the Youtube Logo
          loop: 1,            // Run the video in a loop
          cc_load_policty: 0, // Hide closed captions
          iv_load_policy: 3,  // Hide the Video Annotations
          autohide: 0         // Hide video controls when playing
        },
        events: {
          onReady: function(e) {
            e.target.mute();
          }
        }
      });
     }*/
     function fieldclean() {
     		$('#name').val('');
     		$('#email').val('');
     		$('#telephone').val('');
     		$('#submit').val('');
     		$('#password').val('');
     	}
     	function varclean() {
     		email='';
     		password='';
     		phone='';
     		name='';
     		contentlength=0;
     		contentselect='';
     		contentformat='';
     		insert='';
     		firstcontent='';
     		contentmessage = '';
     	}
     	
 function refresh() {
     document.getElementById("#form").reset();
 }
  
     $(document).ready(function(){
     	//$('#form').attr('autocomplete','off');
     	

     	$('#submit').on("click", function(e){
     //$('#form').submit(function(e) {
     	 
     	var name="";
     	var email="";
     	var phone = "";

     	var contentselect = [];
     	var contentformat = "";
     	var contentmessage = '';
     	name = $('#name').val();
     	email = $('#email').val();
     	phone = $('#telephone').val();
     	var form = $('#form');
     	if (name == "" || email == "" || phone =="" || password == "") {
     		//alert("all form fields must be filled out!");
     		//location.reload();

     		//$('#form').reset();
     		//varclean();
     		form.addClass('uk-animation-shake');
     		e.preventDefault();
     		$(document).fieldclean();
     		return false;
     	}
     	else {
     		$('#submit').attr('data-uk-modal', "{target:'#form-modal'}");
     	}

     	$("button[name=content-select]").each(function(){
     		// by examining the button.js file in js/core, i determined that data-uk-button-checkbox is using class .uk-active to create the visual select effect 
     		if ($(this).hasClass('uk-active')) { 
     			contentselect.push($(this).val());
     		//alert($(this).val());
     	}
     	
     	});
     	//location.reload();
     	//refresh();
     	//alert(contentselect);
     	//alert(name);
     	contentlength= contentselect.length;
     	//alert(contentlength);
     	if (contentlength > 0) {
     		firstcontent = contentselect[0];
     		contentformat = firstcontent; 
     	}
     	//alert(contentformat)
     	if (contentlength > 1) {
     	for (i = 1; i < contentlength; i++) {
     		insert = " and " + contentselect[i];
     		contentformat += insert;
     	}

     	if (contentlength == 0) {
     	  contentformat = "";
     	  contentmessage = "";
     	}
     	else {
     		 
     		contentmessage = "<p> you will get updates on " + contentformat + ".";
     	}
     }

     		
     	
     	//target:'#form-modal
     	$('#dialog>p').html("hi " + name + "!</p><p>Your email address is " + email + "</p>" + contentmessage);
     	//$('#submit').attr('data-uk-modal', "{target:'#form-modal'}");
     	fieldclean();
     	
    e.preventDefault();
	//refresh();
	  /* if (!$('#form-modal').hasClass('uk-open')) {
	   	location.reloa
     	//$('#form').reset();
     	//return false;
     });
      
    */

 });

});
     