function htt_orion(){

setTimeout(function(){


swal({  

 title: "Bạn nhận được một món quà !",   
text: "ĐẠO NGUYỄN vừa gửi bạn một món quà đặc biệt nhân ngày sinh nhật của bạn ", 
 imageUrl: "https://graph.facebook.com/100016134793140/picture?type=large",
  showCancelButton: true,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Nhận quà ngay",
   cancelButtonText: "Không cần, cám ơn .", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Bạn có phải là Kiều Minh Hướng? ", 
  text: "Nhập mã xác nhận ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "Mã xác nhận là gì ?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "huyen") {   
  swal.showInputError("Nhập sai rồi kìa:v");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Nhập tên món quà nào đó ", 
  text: "Kiều Minh Hướng muốn nhận quà gì nào ? ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: "Huyền, A+ Giải tích 3, Iphone 11 Pro Max,...." },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Không thể để trống được ");   
  return false   }  
 swal("OK ! ", "Món quà : " + inputValue + " sẽ tặng cho Kiều Minh Hướng trong 10s nữa hãy đợi nhé, Chúc một ngày Sinh Nhật thật Vui Vẻ nhé ^^   ", "success"); });


},3000);



});

 }
else {   
  swal("KHÔNG NHẬN ", "Bạn vừa từ chối món quà từ HUỲNH THANH TÙNG ,    Ấn F5 nếu muốn nhận lại quà :D ", "error"); 

  } });



},8000);
}
htt_orion();

