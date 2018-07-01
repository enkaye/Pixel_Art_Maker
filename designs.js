



// Your code goes here!
$(document).ready(function(){

$("#sizePicker").submit( function(event){
  event.preventDefault();
  
//the value of Height and Width assingned to row and col
  const row = $("#inputHeight").val();
  const col = $("#inputWidth").val();
  
//clear the canvas to create a fresh grid
 $("#pixelCanvas").empty();

 //when height and width are submitted call createGrid()
  makeGrid(row, col);
});



function makeGrid(row, col) {
    // for number of rows
    for(let r=0; r<row; r++){
    
      // create a table row
        $("#pixelCanvas").append($("<tr></tr>"));
      
  
      // for number of columns
      for(let c=0; c<col; c++){
      
      // add td to row
      $("tr").last().append($("<td></td>"));
       
        }
    
    }
    
// Select the paint color used to paint on the canvas 
$("td").click( function paintOn(){
   
    paint = $('#colorPicker').val();
        
//Remove paint on a cell that already has paint when you click on it again      
    if ($(this).attr('style')) {
        $(this).removeAttr('style')
    } 
    else {
        $(this).attr('style', 'background-color:' + paint);
    }
    
  });

}

});

