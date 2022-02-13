
// import {db,ref,onValue} from '../firebase.js';
// const branch_courses=ref(db,'/Courses');

// onValue(branch_courses,function(snapshot){

//     console.log(sessionStorage.getItem("key"))

// })
var locations=['.program','.skills','.general_info','.participants']

var index=0;
//iterate localStorage
for (var i = 1; i <= sessionStorage.length; i++) {
    
    // set iteration key name
    var key = sessionStorage.key(i);
  
    // use key name to retrieve the corresponding value
    var value = sessionStorage.getItem(key);
  
    // console.log the iteration key and value
  $(locations[index]).text(value);
  index++;  
}
  
  sessionStorage.clear()
