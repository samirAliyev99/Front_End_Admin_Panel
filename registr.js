import {db,set,ref,onValue,push,remove} from './firebase.js';

const branch_courses=ref(db,'/Registration');
const check=ref(db,'/namePassword');
 
 onValue(check,function(snapshot){
    var obj_check=snapshot.val();
    let data = sessionStorage.getItem('key');

    for (let [check_key,check_values] of Object.entries(obj_check)){
        if(check_key!=data){
            location.href = '/Log_in/Log_In.html';

        }
    }
 })

 onValue(branch_courses,function(snapshot){
    var obj=snapshot.val();
    // Identify the exact row
    var row_number=1; 
    
    $('tbody').empty();

// Getting data from database
    for (let [key,values] of Object.entries(obj)){
        let identify_class=1;

        const tr = $('<tr>');
        const td1 = $('<td>').html(row_number);

        tr.append(td1)
         for (var [key1,name] of Object.entries(values)){
           
             const td2 = $('<td>',{
               class:identify_class
           }).html(name);
          

           tr.append(td2);
           $('tbody').append(tr);
           identify_class++;
           }
   const td9 = $('<td>');
   tr.append(td9);
    // button remove
    const button1 = $('<button>',{
        class:"btn btn-danger",
        text:"Delete",

    });

    td9.append(button1);

   row_number++;

   button1.click(function(){

        remove(ref(db,'/Registration/'+key));
        // location.reload();

    });

}

})


