# project-pixel-art-maker-starter-master
$(document).ready(function() {
	

$('#sizePicker').submit(function(ev) {
    emptyContent()
  	makeGrid();
  	addColor(); 
  	removeColor();
  	clean();
  	ev.preventDefault(); 

});





//make grid
function makeGrid(){

  var twidth = $('#inputWeight').val();
  var theight = $('#inputHeight').val();
  for(var i=1;i<=twidth;i++){
    $('#pixelCanvas').append('<tr class="row"></tr>');
     for(var j=1;j<=theight;j++){
       $('tr:last-child').append('<td class="cell"></td>');
     };
   };
  	 $('table').before('<div class="content container">*click in the cell to draw<br>*double click to reset color</div>');
  	 $('table').after('<button id="clear">clear</button>');
 };


// user clcik add color to cell
function addColor() {
$('.cell').on('click',function(){
	var c = $('#colorPicker').val();
	//$(this).addClass('choise');
    $(this).css("background-color",c);
});
};



//user dblclik remove color from cell
function removeColor(){
	$('.cell').on('dblclick',function(){
	//var c = $('#colorPicker').val();
		$(this).css("background-color","");
	});
};


//user click clear button remove all color from table
function clean(){
	$('#clear').on('click',function(){
    $('.cell').css('background-color','')
	});
};
// remove intruction to avoid repetetion
function emptyContent(){

  	$('table').empty();
  	$('.container').empty();
  	$('#clear').remove('button');
};


});
