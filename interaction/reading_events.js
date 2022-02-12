
//iterate localStorage
for (var i = 0; i < sessionStorage.length; i++) {

  // set iteration key name
  var key = sessionStorage.key(i);

  // use key name to retrieve the corresponding value
  var value = sessionStorage.getItem(key);

  // console.log the iteration key and value
  console.log('Key: ' + key + ', Value: ' + value);  

}

$(".post-title").text(key)
$(".breadcrumb-title").text(key)
$(".paragraph").text(value)
sessionStorage.clear()
