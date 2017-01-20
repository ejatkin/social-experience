window.onload = function(){

  document.getElementById('country-filter').addEventListener('change', function(changeEvent){

    var country = changeEvent.srcElement.value;
    var stories = document.getElementsByClassName('story');
    for (var i =0; i < stories.length; i++){
      var countryElement = stories[i].firstChild;
      if (!countryElement.getAttribute('value') ||countryElement.getAttribute('value') !== country){
        stories[i].style = 'display:none';
      } else {
        stories[i].style = '';
      }
    }
  });

  document.getElementById('category-filter').addEventListener('change', function(changeEvent){

    var category = changeEvent.srcElement.value.toLowerCase().substring(0,6);

    var stories = document.getElementsByClassName('story');
    for (var i = 0; i < stories.length; i++){

      var categoryElement = stories[i].childNodes[1];
      if (!categoryElement.getAttribute('value') || categoryElement.getAttribute('value').substring(0,6) !== category) {
        stories[i].style = 'display:none';
      } else {
        stories[i].style = '';
      }
    }

  });
}
