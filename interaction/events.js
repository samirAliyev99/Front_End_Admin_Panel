
import {db,ref,onValue} from '../firebase.js';
const branch_event=ref(db,'/Events');

var images=['../mainPage/img/11111.png','../mainPage/img/ff5f7da7749bd713957f0c23b505a55c.jpg'];
var index=0;

 onValue(branch_event,function(snapshot){
    
    var obj=snapshot.val();
    $("#inter_events").empty();
    // Getting data from database
    for (var [key,values] of Object.entries(obj)){

         for (var [key1,name] of Object.entries(values)){
        
      
          }


          // To send front starts
            const div1= $('<div>', {
              class: 'col-lg-4 col-md-6 col-sm-12 mb-4 events'
             });
          
           const div2=  $('<div>', {
              class: "articles"
             });
             
            const div3= $('<div>', {
              class: 'articles_grid_thumb'
             });
             
            const div4= $('<a>', {
              href:"mainEventsIATC.html",
              class:"clicked",
              data_head:key1,
              data_content:name
              });
             
            const div5= $('<img>', {
              src:images[index],
              class:"img-fluid"
          });
             
           const div6=  $('<div>', {
              class:"articles_grid_caption event-name"
          });
          const div7=  $('<h4>', {
              text:key1
          });
          
          
          $("#inter_events").append(div1);
          div1.append(div2);
          div2.append(div3,div6);
          div4.append(div5);
          div3.append(div4)
          div6.append(div7)

          index++;


   }


   
  $('.clicked').click(function(){
    

    var a=$(this).attr("data_head")
    var b=$(this).attr("data_content")
    
    location.href="mainEventsIATC.html"
    sessionStorage.setItem(a, b);


       }) 
       
    })
