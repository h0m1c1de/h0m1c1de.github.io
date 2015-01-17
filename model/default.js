$(document).ready(function () {
	var indexofobject = 1;
	// ar - this is Array with Users
	var ar = [{
			firstName: "Taras",
			lastName: "Dihtenko",
			age: 21,
			eyeColor: "green"
    },
		{
			firstName: "Vadim",
			lastName: "Yatsuk",
			age: 22,
			eyeColor: "blue"
    },
		{
			firstName: "Oleg",
			lastName: "Lyashko",
			age: 50,
			eyeColor: "brown"
    }];

	//use renderSingle function and add as many users as we have.
	function render() {
		for (var i = 0; i < ar.length; i++) {
			renderSingle(ar[i]);
		}
	}
	//hide or show elements
	function toggle(edit) {
		edit.parent().find(".save,.edit,.inputname,.inputlastname,.inputage,.inputeye,h1").toggleClass('hide');
	}

	/*
	this function adds td with user firstname, adds a click that opens modal and adds delete button that delete created td.
	*/
	function renderSingle(user) {
		//
		var $tr = $('<tr>').append($('<td class="one">' + user.firstName + '</td>'), ($(' <td><button class="del" style="float:right;">delete</button></td>')));

		$tr.find('.one').click(function () {
			indexofobject = $('tr').index($(this).parent());
			$('.model').slideToggle('hidden');
			$('.name').text(user.firstName);
			$('.lastname').text(user.lastName);
			$('.age').text(user.age);
			$('.eyecolor').text(user.eyeColor);
		});

		$tr.find('.del').click(function () {
			var answer = confirm('Are you sure?');
			if (answer == true) {
				$(this).closest('tr').remove();
			}
		});

		$('table').append($tr);
	}

	//close modal
	$('.exit').click(function () {
		$('.model').slideToggle('hidden');
		if ($(".edit").hasClass("hide")){
		toggle($(this));
		}
	});
	//opens form for new user
$(".plus img").click(function(){
	console.log('hi');
	$(".add").slideToggle('hidden');
});
	//add new user to array
	$('.push').click(function () {
		if($(".nname").val().length < 1 || $(".sname").val().length <1 || $(".nage").val().length <1 || $(".neye").val().length <1){
			alert("Complete form");

		} else{
				var newuser = {
			firstName: $('.nname').val(),
			lastName: $('.sname').val(),
			age: parseInt($('.nage').val()),
			eyeColor: $('.neye').val(),
		};

		ar.push(newuser);
		renderSingle(newuser);	
		}

	});
	//

	render();

	//hide edit button, show save button and set value in input
	$('.edit').click(function () {
		$('.inputlastname').val(ar[indexofobject].lastName);
		$('.inputage').val(ar[indexofobject].age);
		$('.inputname').val(ar[indexofobject].firstName);
		$('.inputeye').val(ar[indexofobject].eyeColor);
		toggle($(this));

	});

	//save changes
	$(".save").click(function () {
		toggle($(this));
		var user = ar[indexofobject];
		user.firstName = $('.inputname').val();
		user.lastName = $('.inputlastname').val();
		user.age = $('.inputage').val();
		user.eyeColor = $('.inputeye').val();

		$(".name").text(user.firstName);
		$(".lastname").text(user.lastName);
		$(".age").text(user.age);
		$(".eyecolor").text(user.eyeColor);

		$($(".one")[indexofobject]).text(user.firstName);

	});

});