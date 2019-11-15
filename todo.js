let list = ['go to gym', 'study'];
show_listItems();


// add items to list
$('#submit').click(function (){
    let input = $('#the-input');
    inputValue = input.val();
    list.push(inputValue);
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
  
//show list on page
function show_listItems(){
  for(let i=0; i<list.length; i++){       
      let value = list[i];
        $('ul').append('<li>' + value + '</li>');
    }
}