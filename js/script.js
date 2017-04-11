$(document).ready(function (){

// $(function(){
//   $('div.joined img').mousemove(function(){
//     $('.overlay').hide();
//   });
// });
    $('.first').click(function(){
      $('.one').show();
      $('.two').hide();
    });

    $('.second').click(function(){
      $('.two').show();
      $('.one').hide();
    });

// code below doesn't work instead the code above
    //   $('.first'.click(function(){
    //     $('.one').show().siblings().hide();
    //   });
    //
    //   $('.second'.click(function(){
    //     $('.two').show().siblings().hide();
    // });



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




// Wikipedia Api
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






runSearch();

function runSearch(){
        $("#searchTerm").keypress(function(e){
          if(e.keyCode==13){
            getInput();
            clearInput();
          }
          else {
                  $("#search").on("click", getInput())
          }
}
                                  )}

 function getInput(){
                  var searchTerm = $("#searchTerm").val();
          request(searchTerm);
        }

function clearInput(){
  var searchTerm = $("#searchTerm").val();
  searchTerm = ("");
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




// ------------------


var myName = "Muataz Aziz";

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

drawName(myName, letterColors);

if(10 < 3)
{
    bubbleShape = 'square';
}
else
{
    bubbleShape = 'circle';
}

bounceBubbles();
// __________________________


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

});
// __________________________


$(".one").css('display','block');

$('div.acordion h3').click(function(){
	$(this).next().slideToggle();
	$("div.acordion p").not($(this).next()).slideUp();
// __________________________


$('.download').click(function(){
	$('.timer').countTo();
});
// __________________________
	

	// $('.All_images').mixItUp();

});