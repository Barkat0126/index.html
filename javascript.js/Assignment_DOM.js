// getting the html element

const DecrementBtn = document.getElementsByClassName("DecrementBtn")
const displayBtn = document.getElementsByClassName("displayBtn")
const IncremnetBtn = document.getElementsByClassName("IncremnetBtn")
const resetBtn = document.getElementsByClassName("resetBtn")

//for decrement btn click
/*
DecrementBtn.addEventListener("click", () => {
    const value = Number(displayBtn.innerText);
    if(value > 0){
        displayBtn.innerText = value -1;
    }
    else{
        alert("negative value is not allowed")
    }
});
// for increment button click
IncremnetBtn.addEventListener("click", () => {
    const value = Number(displayBtn.innerText);
    if (value >= 10) {
      alert("10+ values are not allowed");
    } else {
        displayBtn.innerText = value + 1;
    }
  });
  
  // for reset button click
  resetBtn.addEventListener("click", () => {
    resetBtn.innerText = 0;
  });
  */
/*
document.getElementsByClassName("Decrement_btn").AddEventListner("click",function(){
    alert("click");
});*/


//new code
let count = 0;
//DecrementBtn
document.getElementById("DecrementBtn").onclick = function(){
    count-=1;
    document.getElementById("displayBtn").innerText = count;
    if(count > 0){
        displayBtn.innerText = count -1;
    }
    else{
        alert("negative value is not allowed")
    }
}
//IncremnetBtn
document.getElementById("IncremnetBtn").onclick = function(){
    count+=1;
    document.getElementById("displayBtn").innerText = count;
    if(count <=9){
        displayBtn.innerText = count;
    }
    else{
        alert("only single digit value is allowed")
    }
}
//resetBtn
document.getElementById("resetBtn").onclick = function(){
    count = 0;
    document.getElementById("displayBtn").innerText = count;
}