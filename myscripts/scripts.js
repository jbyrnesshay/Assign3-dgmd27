
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
     	
     	

     	$('#submit').on("click", function(e){
    
     	 
     	var name="";
     	var email="";
     	var phone = "";

     	var contentselect = [];
     	var contentformat = "";
     	var contentmessage = '';
     	var contentlength = 0;
     	name = $('#name').val();
     	email = $('#email').val();
     	phone = $('#telephone').val();
     	var form = $('#form');
     	if (name == "" || email == "" || phone =="" || password == "") {
     		
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
     		 
     	}
     	
     	}
     	);
     	 
     	contentlength= contentselect.length;
     	
     	
     	if (contentlength > 0) {
     		firstcontent = contentselect[0];
     		contentformat = firstcontent; 
     		 
     	}
     	 
     	if (contentlength > 1) {
     	for (i = 1; i < contentlength; i++) {
     		insert = " and " + contentselect[i];
     		contentformat += insert;
     	}}
     	
     	

     	if (contentlength == 0) {
     	  contentformat = "";
     	  contentmessage = "";
     	}
     	else {
     		 
     		contentmessage = "<p> you will get updates on " + contentformat + ".";
     	}
     

     		
     	
     	 
     	$('#dialog>p').html("hi " + name + "!</p><p>Your email address is " + email + "</p>" + contentmessage + "<p> Thanks for signing up!! </p>");
      
     	fieldclean();
     	
    e.preventDefault();
	 

 });

});
     