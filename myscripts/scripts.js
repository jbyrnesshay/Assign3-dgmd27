
/*  this function is just for a more pleasing usabiity of testing the form.
    I call these functions to clean the values of the form fields and the variables that elsewhere 
    store their values.  This allowed me to successfully play around with redoing the form and resubmitting
    without having to refresh the entire page */

function fieldclean() {
		$('#name').val('');
		$('#email').val('');
		$('#telephone').val('');
		$('#submit').val('');
		$('#password').val('');
}



$(document).ready(function(){
	/* #submit is id for submit button on form at form.html */
 	$('#submit').on("click", function(e){
 	/* get variables ready */
	var name="";
 	var email="";
 	var phone = "";
 	/* contentselect will be an array of any button items from the "checkbox buttons" that have been selected by the user */
	var contentselect = [];
	/* content format holds a string of any items in contentselect separated by the world "and" */ 
 	var contentformat = "";
 	/* contentmessage merely will extend contentformat with an additional initial phrase */
 	var contentmessage = '';
 	/* i'll be checking if contentlength is 0 or greater after submit */
 	var contentlength = 0;
 	/* I will repeat back all the users input in a modal, except for the private password */
 	name = $('#name').val();
 	email = $('#email').val();
 	phone = $('#telephone').val();

 	var form = $('#form');
 	
 	/* if at least field is empty, the form will shake and all fields will empty using my fieldclean function.  form will not submit */
 	if (name == "" || email == "" || phone =="" || password == "") {
 		form.addClass('uk-animation-shake');
 		e.preventDefault();
 		$(document).fieldclean();
 		return false;
 	}
 	/* otherwise if the fields are filled, I add the data-uk-modal attribute through javascript with a target of the id for the form modal */
 	/* this was done to stop the behavior of a blank modal if the fieldss were submitted as blank */
 	else {
 		$('#submit').attr('data-uk-modal', "{target:'#form-modal'}");
 	}
	
	/* I am using a series of 3 buttons like a selectbox, user can select 0, 1, 2, or all 3 of the buttons before submitting the form */
	/* below I am checking if each button with name=content-select is selected, and if so, pushing it to the contentselect[] array */
	$("button[name=content-select]").each(function(){
 		// by examining the button.js file in js/core, i determined that data-uk-button-checkbox is using class .uk-active to create the visual select effect 
 		if ($(this).hasClass('uk-active')) { 
 			contentselect.push($(this).val());
 		}
 	});
 	 
 	contentlength= contentselect.length;
 	
 	/* I will be stylizing a message inserting the word 'and' between items, but I dont want 'and' before the first item */
 	if (contentlength > 0) {
 		firstcontent = contentselect[0];
 		contentformat = firstcontent; 
 	}
 	 
 	if (contentlength > 1) {
 	for (i = 1; i < contentlength; i++) {
 		insert = " and " + contentselect[i];
 		contentformat += insert;
 	}}
 	/* if no content-select buttons were selected there will be no content message */
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
 