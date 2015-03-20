define(function() {
  function View() {
    document.getElementById('main').innerHTML = 
    'list content<br>' +
    '<a href="#index">goto index page</a>';
  }

  return View;
});