function validate_form ()
{
    valid = true;
    var name = (document.myForm.name.value).trim(); 
    var phone = (document.myForm.tel.value).trim();
    var email = (document.myForm.email.value).trim();

    if ( name == "" )
    {
        alert ( "Zəhmət olmasa 'Full Name' hissəsini doldurun." );
        valid = false;
    } else if ( phone == "" ){
        alert ( "Zəhmət olmasa 'Phone Number' hissəsini doldurun." );
        valid = false;
    } else if ( email == "" ) {
        alert ( "Zəhmət olmasa 'Email' hissəsini doldurun." );
        valid = false;
    } else {
        alert ( "Müraciətiniz qeydə alındı!" );
    } 

    return valid;
}

// function isInputNumber (e) {
//     var ch = String.fromCharCode(e.which);
//     if (!([0-9].test(ch))){
//         e.preventDefault();
//     }
// }

$('.dropdown-list-item').on('click', function() {
    $('.dropdown-select span').text($(this).attr('data-course'));
});
























// swal({
//     title: 'Müraciətiniz qəbul edilmədi!',
//     text: "Zəhmət olmasa məlumatlarınızı tam şəkildə daxil edin",
//     type: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#DA0B4E',
//     confirmButtonText: 'Anladım',
//     confirmButtonClass: 'btn btn-success',
//     buttonsStyling: false
//   }).then(function () {
//     swal(
//       'Deleted!',
//       'Your file has been deleted.',
//       'success'
//     )
//   })