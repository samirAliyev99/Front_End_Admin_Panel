
import {db,ref,onValue} from '../firebase.js';
const branch_courses=ref(db,'/Courses');

var images=['../mainPage/img/8.png','../mainPage/img/41.png','../mainPage/img/k1.png','../mainPage/img/k2.png','../mainPage/img/k4.png','../mainPage/img/k5.png']
var index=0;


 onValue(branch_courses,function(snapshot){
    
    let obj=snapshot.val();
    let member_info=[]
    let sending_data=[]
    // Getting data from database
    for (var [key,values] of Object.entries(obj)){

         for (var [key1,name] of Object.entries(values)){
            

            member_info.push(name);




            // // sending data to pages

            // $('.clicked').click(function(){
    

            //     var a=$(this).attr("data_head")
            //     var b=$(this).attr("data_content")
                
            //     location.href="mainEventsIATC.html"
            //     sessionStorage.setItem([a,b]);
            
            // })






   }
   
//             // To send front starts
            const div1= $('<div>', {
                class: 'shadow-sm courses-card col-md-5 d-flex bg-light m-4 p-3 rounded border-1'
               });


        
               $("#inter_courses").append(div1);



             const div2=  $('<img>', {
                class: "img-fluid  mr-3 rounded",
                src:images[index],
                class:"clicked_course",
                data_general:member_info[2],
                data_participants:member_info[4],
                data_program:member_info[5],
                data_skills:member_info[7]
               });

               div1.append(div2);
               
              const div3= $('<div>', {
                class: "courses-info",
                });
               
               div1.append(div3);

              const div4= $('<h4>', {
                text:member_info[3]
               });
               
               div3.append(div4);


               
               const muellim=$('<p>', {
                text:"Müəllim:"
               });

               div3.append(muellim)


              const div5= $('<strong>', {
                
                text:member_info[0]
            });
               

            div3.append(div5)


            // link facebook
            const classTime = $('<div>', {
                class: "time row"
            });
            div3.append(classTime);
            const p1 = $('<p>', {
                class: "course-info"
            });
            classTime.append(p1);
            const week = $('<span>', {
                class: "week"
            })
            p1.append(week);
            const div7 = $('<i>', {
                class: "fas fa-desktop ml-3",
            });
            week.append(div7);
            const spanWeek = $('<span>', {
                text: member_info[1]+" həftə"
            });
            week.append(spanWeek);
            const student = $('<span>', {
                class: "student"
            });
            p1.append(student)
            const div8 = $('<i>', {
                class: "fas fa-users ml-5"
            });
            student.append(div8);
            const spanStudent = $('<span>', {
                text: member_info[6]+" nəfər"
            });
        
            student.append(spanStudent);



        


                while(member_info.length>0)
                member_info.pop();            
                index++;    
}








            
            $('.clicked_course').click(function(){
                


                var general=$(this).attr("data_general")
                var participants=$(this).attr("data_participants")
                var program=$(this).attr("data_program")
                var skilss=$(this).attr("data_skills")

            
                sending_data.push(general)

                sending_data.push(participants)
                sending_data.push(program)
                sending_data.push(skilss)


                sessionStorage.setItem("key", sending_data)
                location.href="../mainPage/mainFullstack.html";


             }) 

             console.log(sending_data)

            })
