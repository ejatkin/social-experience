window.onload = function(){

  document.getElementById('country-filter').addEventListener('change', function(changeEvent){
    console.log(changeEvent);
    var country = changeEvent.srcElement.value;
    var stories = document.getElementsByClassName('story');
    for (var i =0; i < stories.length; i++){
      var countryElement = stories[i].firstChild;
      if (countryElement.getAttribute('value') !== country){
        stories[i].style = 'display:none';
      } else {
        stories[i].style = '';
      }
    }
  });
}
