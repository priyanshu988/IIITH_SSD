function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function myKeyPress(e) {
    var keynum;

    if (window.event) { // IE                  
        keynum = e.keyCode;
    } else if (e.which) { // Netscape/Firefox/Opera                 
        keynum = e.which;
    }


}
function alertfunction() {

    // validation code here ...

    var cell1 = document.getElementById("name").value;

    var cell2 = document.getElementById("email").value;

    var cell3 = document.getElementById("username").value;

    var cell4 = document.getElementById("lead").value;
    alert("Manager Name: " + cell1 + "\n" + "Group Email: " + cell2 + "\n" + "Server Username: " + cell3 + "\n" + "Team lead: " + cell4 );

}
// window.addEventListener('keydown', function (e) {
    
//     if (e.key = "control" )
//     {this.onclick=myFunction();}
//   }, false);


  function KeyPress(e) {
    var evtobj = window.event? event : e
    if (evtobj.keyCode == 77 && evtobj.ctrlKey) this.onclick=myFunction(); ;
}document.onkeydown = KeyPress;

function passwordcheck()
{
    let in1=document.getElementById("password").value;
    let in2=document.getElementById("cpassword").value;
    
    if(in1==in2)
    {
        return 1;
    }
    else
    {
        alert("Password Not Matched");
        return 0;
    }
}