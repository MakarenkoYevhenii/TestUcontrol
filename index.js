// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
const btNotofi=document.getElementById("notification")
var notifyModal=document.getElementById("notificationModal")


const myAccBtn=document.getElementById("myAccBtn")
const historyBtn=document.getElementById("historyBtn")
const notifiBtn=document.getElementById("notifiBtn")

const myAcc=document.getElementById("myAcc")
const history=document.getElementById("history")
const notifi=document.getElementById("notifications")

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
}

myAccBtn.onclick=function(){
    myAcc.style.display="flex"
    myAcc.className="active"
    history.style.display="none"
    notifi.style.display="none"
}
historyBtn.onclick=function(){
    history.style.display="flex"
    history.className="active"
    myAcc.style.display="none"
    notifi.style.display="none"
}
notifiBtn.onclick=function(){
    notifi.style.display="flex"
    notifi.className="active"
    history.style.display="none"
    myAcc.style.display="none"
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    notifyModal.style.display="none"
}
span1.onclick= function(){
    notifyModal.style.display="none"
}
btNotofi.onclick=function(){
    modal.style.display = "none";
    notifyModal.style.display="flex"
}
// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal||event.target==notifyModal) {
      modal.style.display = "none";
      notifyModal.style.display = "none";
    }
  }