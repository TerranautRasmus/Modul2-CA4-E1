

function insertToDivs(myForm){
    var firstname=myForm.firstname.value;
    var lastname=myForm.lastname.value;
    var phone=myForm.phone.value;
    var email=myForm.email.value;
    
    
    
    document.getElementById("div1").innerHTML = firstname;
    document.getElementById("div2").innerHTML = lastname;
    document.getElementById("div3").innerHTML = phone;
    document.getElementById("div4").innerHTML = email;
   
}

//Opgave A-B
$(document).ready(function() {
    $("#div1").on("click", function(){ return insertToDivs2(this, $("#firstname").val());});
    $("#div2").on("click", function(){ return insertToDivs2(this, $("#lastname").val());});
    $("#div3").on("click", function(){ return insertToDivs2(this, $("#phone").val());});
    $("#div4").on("click", function(){ return insertToDivs2(this, $("#email").val());});
});

function insertToDivs2(divEl, text) {
    $(divEl).html(text);
}

//Opgave C

var arrayStud = [];

function adminStud(studobj, callback){
  callback(studobj);
}
function logStud(student){
    console.log(student.id);
    console.log(student.name);
    console.log(student.classroom);
   }

function RegisterItem(Student){
    arrayStud.push(Student);
    console.log(arrayStud);
}

adminStud({id:1,name:"Rasmus",classroom:"2a"},logStud);
adminStud({id:1,name:"Rasmus",classroom:"2a"},RegisterItem);