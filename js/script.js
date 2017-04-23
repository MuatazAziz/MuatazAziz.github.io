$(document).ready(function (){


// ____________________________________
// Solutions

$('.first').click(function(){
	$('.one').show();
	$('.two').hide();
});

$('.second').click(function(){
	$('.two').show();
	$('.one').hide();
});
// ____________________________________


// ____________________________________
// Sliding navbar

$(window).scroll(function(){
	var scroll = $(this).scrollTop();
	if(scroll > 500)
	{
		$('.clearfix.header').slideDown();
	}
	else
	{
		$('.clearfix.header').slideUp();
	}
});
// ____________________________________


// _____________________________________
// Wikipedia Api

runSearch();

function runSearch(){
	$("#searchTerm").keyup(function(e){			
			getInput();
			clearInput();		
	})

	$("#search").on("click",function(e){
		getInput();
		clearInput();
	})

}

function getInput(){
	var searchTerm = $("#searchTerm").val();
	request(searchTerm);
}

function clearInput(){
	$("#output").html('');
}


function request(searchTerm){
	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
	$.ajax({
		url: url,
		type: 'GET',
		dataType: "json",
		success: function(data) {
			for(var i=0; i<data[1].length; i++){
				$("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
			}
		}
	}
	) };
// ________________________________________


// ________________________________________
// Muataz Aziz coloring trick

function initiateBouncing() {
	var myName = "Muataz Aziz";

	var red = [0, 100, 63];
	var orange = [40, 100, 60];
	var green = [75, 100, 40];
	var blue = [196, 77, 55];
	var purple = [280, 50, 60];
	var letterColors = [red, orange, green, blue, purple];

	drawName(myName, letterColors);

	if (10 < 3) {
		bubbleShape = 'square';
	} else {
		bubbleShape = 'circle';
	}

	bounceBubbles();
}

initiateBouncing();
// ________________________________________


// ________________________________________
// Solutions sliding up/down

$(".one").css('display','block');

$('div.acordion h3').click(function(){
	$(this).next().slideToggle();
	$("div.acordion p").not($(this).next()).slideUp();
});
// ________________________________________


// ________________________________________
// timer/counter library

$('.download').click(function(e){
	$('.timer').countTo();
});
// ________________________________________

// ________________________________________
// study counter starts from certain hieght

$(document).scroll(function(e) {
	var scrolledHeight = $(document).scrollTop();
	var notTriggered = true;

	if (scrolledHeight >= 2125 && notTriggered) {
		$('.timer').countTo();
		notTriggered = false;
	}
})
// _______________________________________


// ________________________________________
// fancybox library of recent

$('.All_images').mixItUp();
// ________________________________________


// ________________________________________
// nice scroll

// $("html").niceScroll({
// 	cursorcolor: "brown",
// 	cursoropacitymin: 0.5
// });
// ________________________________________


// ________________________________________
// youtube

var url="https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCh9hQ6K3jTCyBFk68WZtNoxob_3PW_kn4&maxResults=3&q="
var nextPage=''
var firstResult=true;



function bindLinkClick(){
	$('#searchLink').click(function(e){
		firstResult=true;
		e.preventDefault();
		fetchData();
		firstResult=false;
	})
}
function fetchData(){
	$('.loading').fadeIn();
	var qry=$('#txtSearch').val();
	if (nextPage!==undefined&&nextPage.length!==0)
	{
		qry+='&pageToken='+nextPage;
	}
	$.ajax({
		url: url+qry,
		type: 'get',
		datatype:  'jsonp',
		success: function(data){
			$('.loading').fadeOut();
			$('#loadMore').fadeIn();
			
			nextPage=data.nextPageToken;
			showResult(data)
		},
		fail:showError
	})
}
function showResult(data){
	$('#header').fadeIn();
	if(firstResult)
	{
		$('#result').html(formatData(data));
	}
	else{
		$('#result').append(formatData(data));
	}

	$('html, body').animate({ scrollTop: $("#loadMore").offset().top }, 2000);

}
function formatData(data){

	var html=''
	
	$.each(data.items,function(i,res){
		html+='<div class="row">'+
		'<div class="col-md-4">'+res.snippet.title+'</div>'+
		'<div class="col-md-4">'+res.snippet.description+'</div>'+
		'<div class="col-md-4"><a href="https://www.youtube.com/watch?v='+res.id.videoId+'" target="_blank" title="Watch"> <img class="img-thumbnail re-sized" src='+res.snippet.thumbnails.default.url+'></a></div>'+
		//uncomment this line and comment the previous line if you want to show the video in the same page
		// '<div class="col-md-4"><iframe width="130" height="100" src="https://www.youtube.com/embed/'+res.id.videoId+'"></iframe></div>'
		'</div>'

	})
	return html;
}
function showError(){
	$('.loading').fadeOut();
	alert(Error);
}
function bindLoadMoreClick(){
	$('#loadMore').click(function(e){
		e.preventDefault();
		fetchData();
	})
}
// ________________________________________



var url="https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCh9hQ6K3jTCyBFk68WZtNoxob_3PW_kn4&maxResults=1"
var nextPage;
var prePage;
$(document).ready(function(){
	makeAJaxRequest();
	bindNextClick();
	bindPreClick();
})
function bindNextClick(){
	$('#next').click(function(e){
		e.preventDefault();
		url="https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCh9hQ6K3jTCyBFk68WZtNoxob_3PW_kn4&maxResults=1"
		url+="&pageToken="+nextPage;
		makeAJaxRequest();

	})
}
function bindPreClick(){
	$('#pre').click(function(e){
		e.preventDefault();
		url="https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCh9hQ6K3jTCyBFk68WZtNoxob_3PW_kn4&maxResults=1"
		url+="&pageToken="+prePage;
		makeAJaxRequest();
	})
}
function makeAJaxRequest(){
	$.ajax({
		url: url,
		type: 'get',
		dataType: 'json',
		success: function(data){
			console.log(data);
			nextPage=data.nextPageToken;
			prePage=data.prevPageToken;
			if(nextPage !== undefined)
			{
				$('#next').show();
			}
			else{
				$('#next').hide();
			}
			if(prePage !== undefined)
			{
				$('#pre').show();
			}
			else{
				$('#pre').hide();
			}
			console.log(nextPage,prePage);

			var videoId=data.items[0].id.videoId;
			$('#video').attr('src','https://www.youtube.com/embed/'+videoId)
		},
		fail: function(){alert('Error!')}
	})
}
// ________________________________________


// ________________________________________
// Twitter for Websites

window.twttr = (function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0],
	t = window.twttr || {};
	if (d.getElementById(id)) return t;
	js = d.createElement(s);
	js.id = id;
	js.src = "https://platform.twitter.com/widgets.js";
	fjs.parentNode.insertBefore(js, fjs);

	t._e = [];
	t.ready = function(f) {
		t._e.push(f);
	};

	return t;
}(document, "script", "twitter-wjs"));
// ________________________________________


// ________________________________________
//Twitter API

//disable hidding the AJAX loading modal that pops up when searching
var allowAjaxHide = false;
var hideFunction = function(event) {
	if (!allowAjaxHide) {
		event.preventDefault();
	}
	allowAjaxHide = false;
};
$('#ajaxIndicator').on('hide.bs.modal', hideFunction);

//perform a Twitter search when the "public search" form is submitted
$('#getposts_form').submit(function(event){
	event.preventDefault();

	//clear out our output areas first!
	$('#output').empty();
	$('#errors').empty();

	var search = $("#txtsearch").val();
	var language = $("#lang").val();
	var resulttype = $("#type").val();
	console.log(search);
	console.log(language);
	console.log(resulttype);

	//validate all form input, as needed
	var errorMessages = '';
	var emptyStringpattern = /^\s*$/;

	if (emptyStringpattern.test(search)) {
		errorMessages +='You must enter enter a search term.';
	}

	if (errorMessages.length > 0) {
		//When there are any validation errors, quit before the ajax call is made
		$("#errors").text(errorMessages);
		return;
	}

	//make the ajax request
	$.ajax({
		// url: 'https://api/index.php/TwitterAppOnly/search/tweets.json',
		url: 'https://api.twitter.com/1.1/search/tweets.json',
		data: {
			q: search,
			lang: language,
			result_type: resulttype,
		},
		success: function (serverResponse) {
			try{
				console.log(serverResponse);
				var statuses = serverResponse.statuses;
				for (var i = 0; i < statuses.length; i++) {
					var tweet = statuses[i];
					//get the template and copy it
					var template = $($("#tweet").prop("content")).children().clone();

					//fill in the data
					template.find(".body").text(tweet.text);
					template.find(".user").text('@' + tweet.user.screen_name);
					template.find(".favorites").text(tweet.favorite_count);
					template.find(".retweets").text(tweet.retweet_count);

					$("#output").append(template);
				}
			}
			catch (ex) {
				console.error(ex);
				$("#errors").text("An error occurred processing the data from Twitter");
			}
		},
		error: function(jqXHR, textStatus, errorThrown) {
			//Since our script runs on Cloud9, let's make
			// a friendlier error message for ourselves

			//TODO: make this output to the "errors" div instead of an alert
			if (errorThrown == 'Service Unavailable') {
				$("#errors").text("Your cloud 9 instance isn't running!");
			}
			else{
				$("#errors").text('An unknown error occurred: ' + errorThrown);
			}
		},
		complete: function() {
			//remove the "let user know something is happening" thing, since the request is done
			allowAjaxHide = true;
			$("#ajaxIndicator").modal('hide');
		}
	});

	//let the user know something is happening in the meantime
	$("#ajaxIndicator").modal('show');

});
// ________________________________________





});












// Wikipedia Api(another way)
    // $(function() {
    //
    //     $("#searchTerm").keypress(function(e){
    //       if(e.keyCode===13){
    //
    //         var searchTerm = $("#searchTerm").val();
    //         var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
    //             $.ajax({
    //                 url: url,
    //                 type: 'GET',
    //                 dataType: "json",
    //           success: function(data) {
    //             for(var i=0; i<data[1].length; i++){
    //               $("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
    //             }
    //           }
    //     })
    //       }
    //
    //     });
    //
    // // click ajax call
    //     $("#search").on("click", function() {
    //       var searchTerm = $("#searchTerm").val();
    //     var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
    //         $.ajax({
    //           url: url,
    //           type: 'GET',
    //           dataType: "json",
    //           success: function(data) {
    //             $("#output").html();
    //             for(var i=0;i<data[1].length;i++){
    //               $("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
    //             }
    //
    //           }
    //     })
    //     });
    //
    // });




//failed try to make PERSONAL WEBSITE multi-colored in jquery
//   var test = $("section.personal .logo").text().split('');
//
//     var result = "";
//     var i = 0;
//     for(i=0; i < test.length; i++) {
//         result += "<span style='color:"+getColor()+"'>"+test[i]+"</span>";
//     }
//     $("section.personal .logo").html(result);
//
//
// function getColor() {
//     var colList = ['red', 'blue','green'];
//
//     var i = Math.floor((Math.random()*colList.length));
//   return colList[i];
// }​







// failed Twitter API
// $("#submit").click(function(){
// 	var search_term = {
// 		q: 'bowery'
// 		search(search_term);
// 	};
// });
// function search(search_term) {
// 	console.log('searching for ');
// 	console.dir(search_term);
// 	$.ajax({
// 		url: "https://api.twitter.com/1.1/search/tweets.json?" + $.param(search_term),
// 		dataType: 'jsonp',
// 		success: function(data) {
// 			for (item in data['results']) {
// 				$('#tweets').append(
// 					'<li>' + data['results'] [item] ['text'] + '</li>'
// 					);
// 			}
// 		}
// 	});
// }





// !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
