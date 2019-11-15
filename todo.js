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
  
//show list on page
function show_listItems(){
  for(let i=0; i<list.length; i++){       
      let value = list[i];
        $('ul').append('<li>' + value + '</li>');
    }
}