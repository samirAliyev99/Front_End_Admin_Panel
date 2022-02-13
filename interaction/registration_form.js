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


 

//  onValue(check,function(snapshot){
//     var obj_check=snapshot.val();
//     let data = sessionStorage.getItem('key');

//     for (let [check_key,check_values] of Object.entries(obj_check)){
//         if(check_key!=data){
//             location.href = '/Log_in/Log_In.html';

//         }
//     }
// //  })

//  onValue(branch_courses,function(snapshot){
//     var obj=snapshot.val();
//     // Identify the exact row
//     var row_number=1; 
    
//     $('tbody').empty();

// // Getting data from database
//     for (let [key,values] of Object.entries(obj)){
//         let identify_class=1;

//         const tr = $('<tr>');
//         const td1 = $('<td>').html(row_number);

//         tr.append(td1)
//          for (var [key1,name] of Object.entries(values)){
           
//              const td2 = $('<td>',{
//                class:identify_class
//            }).html(name);
          

//            tr.append(td2);
//            $('tbody').append(tr);
//            identify_class++;
//            }
//    const td9 = $('<td>');
//    tr.append(td9);
//     // button remove
//     const button1 = $('<button>',{
//         class:"btn btn-danger",
//         text:"Delete",

//     });

//     // button update
//     const button2 = $('<button>',{
//         class:"btn btn-warning",
//         text:"Update"
//     });

//     td9.append(button1, button2);

//    row_number++;

//    button1.click(function(){

//         remove(ref(db,'/Courses/'+key));
//         // location.reload();

//     });

// // Update functionality
//     button2.click(function(){

//         $("#course_name").val($('.1').html());
//         $("#course_duration").val($('.2').html());
//         $("#course_seats").val($('.3').html());
//         $("#course_information").val($('.4').html());
//         $("#course_participants").val($('.5').html());
//         $("#course_program").val($('.6').html());
//         $("#course_skills").val($('.7').html());
//         $("#course_assigned_instructors").val($('.8').html());
//     remove(ref(db,'/Courses/'+key));
    
// });
// }

// })


