define(function() {
  function View() {
    document.getElementById('main').innerHTML = 
    'index content<br>' +
    '<a href="#list">goto list page</a>';
  }

  return View;
});