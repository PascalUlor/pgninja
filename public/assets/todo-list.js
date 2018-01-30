$(document).ready(function () {
  $('form').on('submit', () => {
    let item = $('form input');
    let todoItem = { item: item.val() };

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todoItem,
      // dataType: json,
      success: (data) => {
        // do something with the data via front-end framework
        location.reload();
      },
    });

    return false;
  });

  $('li').on('click', function(){
    let todoItem = $(this).text().replace(/ /g, "-");
    // alert(todoItem);
    $.ajax({
      type: 'DELETE',
      url: `/todo/${todoItem}`,
      success: (data) => {
        // do something with the data via front-end framework
        location.reload();
      },
    });
  });
});
