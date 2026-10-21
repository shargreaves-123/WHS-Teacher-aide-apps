
function contrast() {
   var element = document.body;
   element.classList.toggle("high-contrast");
}

function getInputValue() {
	const inputValue = document.getElementById('newteachinput').value;
	document.getElementById('newteachaide').innerText = `${inputValue}`;
}

$('.group2').hover(function(){
  $(".group2").toggleClass("highlight");
});

$('.group1').hover(function(){
  $(".group1").toggleClass("highlight");
});

$(document).ready(function(){
	$('[data-toggle="popover"]').popover({
		container: 'body',
	});
});

<!-- Source - https://stackoverflow.com/a/20468809 -->
$('body').on('click', function (e) {
	$('[data-toggle=popover]').each(function () {
		if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
			$(this).popover('hide');
		}
	});
});

function aide8WHAUA() {
	const aide8WHAU = document.querySelector('#aide8WHAU');
	aide8WHAU.textContent = "Teacher A"
}

function aide8WHAUB() {
	const aide8WHAU = document.querySelector('#aide8WHAU');
	aide8WHAU.textContent = "Teacher B"
}

function aide8WHAUC() {
	const aide8WHAU = document.querySelector('#aide8WHAU');
	aide8WHAU.textContent = "Teacher C"
}

function aide8WHAUD() {
	const aide8WHAU = document.querySelector('#aide8WHAU');
	aide8WHAU.textContent = "Teacher D"
}

function aide8WHAUE() {
	const aide8WHAU = document.querySelector('#aide8WHAU');
	aide8WHAU.textContent = "Teacher E"
}

function aide8WHAUnone() {
	const aide8WHAU = document.querySelector('#aide8WHAU');
	aide8WHAU.textContent = ""
}

function aide7WHAUA() {
	const aide7WHAU = document.querySelector('#aide7WHAU');
	aide7WHAU.textContent = "Teacher A"
}

function aide7WHAUB() {
	const aide7WHAU = document.querySelector('#aide7WHAU');
	aide7WHAU.textContent = "Teacher B"
}
	function aide7WHAUC() {
	const aide7WHAU = document.querySelector('#aide7WHAU');
	aide7WHAU.textContent = "Teacher C"
}

function aide7WHAUD() {
	const aide7WHAU = document.querySelector('#aide7WHAU');
	aide7WHAU.textContent = "Teacher D"
}

function aide7WHAUE() {
	const aide7WHAU = document.querySelector('#aide7WHAU');
	aide7WHAU.textContent = "Teacher E"
}

function aide7WHAUnone() {
	const aide7WHAU = document.querySelector('#aide7WHAU');
	aide7WHAU.textContent = ""
}

<!-- The constant day will be updated from kamar when it is connected -->
const day = 3;
if (day <= 5 && day >= 0) {
	daysago.textContent = "Updated: " + day + " day(s) ago";
}
else if (day > 5) {
	daysago.textContent = "Updated: " + day + " day(s) ago, the timetable may be inaccurate";
	daysago.style.color = "red";
}
else if (day < 0) {
	daysago.textContent = "The last updated information is inaacurate and is displaying: " + day + " day(s), please check with devoloper";
	daysago.style.color = "red";
}
else {
	daysago.textContent = "An issue has occured and '" + day + "' is being diplayed";
	daysago.style.color = "red";
}

function removeTeacher(button) { button.parentElement.remove(); }