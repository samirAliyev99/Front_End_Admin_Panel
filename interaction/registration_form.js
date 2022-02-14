import {db,set,ref,onValue,push,remove} from '../firebase.js';

const branch_courses=ref(db,'/Registration');
const check=ref(db,'/namePassword');

document.querySelector("#send").addEventListener("click",function(){

    var course_name = "";

    $('.dropdown-list-item').on('click', function() {
        var selectedCourse = $('.dropdown-select span').text($(this).attr('data-course'));
        course_name = $('#course_name :selected').text(selectedCourse);
    });





    // alert(course_name)

    var full_name=$("#name").val();
    var phone_number=$("#tel").val();
    var email=$("#email").val();
   
    
    var obj=push(branch_courses);
    set(obj,{
       
        course_name:[course_name],
        full_name:[full_name],
        phone_number:[phone_number],
        email:[email]
            })

 })


