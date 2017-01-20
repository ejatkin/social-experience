window.onload = function(){

  document.getElementById('country-filter').addEventListener('change', function(changeEvent){
    var stories = document.getElementsByClassName('story');
    for (var i =0; i < stories.length; i++){
      var countryElement = stories[i].firstChild;
      var categoryElement = stories[i].childNodes[1];
      if (notMatch(countryElement.getAttribute('value'), categoryElement.getAttribute('value').substring(0,6))){
        stories[i].style = 'display:none';
      } else {
        stories[i].style = '';
      }
    }
  });

  document.getElementById('category-filter').addEventListener('change', function(changeEvent){
    var stories = document.getElementsByClassName('story');
    for (var i = 0; i < stories.length; i++){
      var countryElement = stories[i].firstChild;
      var categoryElement = stories[i].childNodes[1];
      if ( notMatch(countryElement.getAttribute('value'), categoryElement.getAttribute('value').substring(0,6))) {
        stories[i].style = 'display:none';
      } else {
        stories[i].style = '';
      }
    }

  });
}

notMatch = function(countryElement, categoryElement){
  var country = document.getElementById('country-filter').value;
  var category = document.getElementById('category-filter').value.substring(0,6);

  if (country ===  "" && category === categoryElement ){
    return false;
  }
  if (category ===  "" && country === countryElement ){
    return false;
  }
  if (country === countryElement && category === categoryElement){
    return false;
  }
  return true;
}
