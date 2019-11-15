let list = ['go to gym', 'study', 'do something'];
show_listItems();


// add items to list
$('#submit').click(function (){
    let input = $('#the-input');
    inputValue = input.val();
    list.push(inputValue);
    $('#the-input').val('');
    $('ul').append('<li>' + inputValue + '</li>');
})

// Toggle settings-area when button 
$("#settings").click(function(){
    $("#settings-area").toggle();
  });

  // push name to beginning of headline.
  $("#nameChange").click( function()
           {
             $("#headline").html($("#newName").val()+" To do list!");
             $("#newName").val("");
           }
        );

        //click on blue-button under settings, change backgroun to blue.
        $("#blue").click( function()
        {
          $("body").addClass("blue");
          $("body").removeClass("red");
        }
     );
//click on red-button under settings, change background to red.
     $("#red").click( function()
     {
       $("body").addClass("red");
       $("body").removeClass("blue");
     }
  );

// set line-through on click
$('ul').on('click', 'li', function(){
    $(this).toggleClass("checked");
});
  
//show list on page
function show_listItems(){
  for(let i=0; i<list.length; i++){       
      let value = list[i];
        $('ul').append('<li>' + value + '</li>');
    }
}


// delete item from list
$('#clear').on('click', function(){
  $('#wholeList').children('li').each(function() {
    if ($(this).hasClass('checked')) {
        //do stuff
        $(this).remove();
    }
 });
});
