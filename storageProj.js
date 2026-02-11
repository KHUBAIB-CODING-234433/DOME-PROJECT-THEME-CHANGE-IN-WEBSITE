// // set time out in the java script 
// let a = setInterval(function (){
// console.log("hallo");
// },2000);
// clearInterval(a);
// let count = 10;
//  let v =setInterval(function(){
//     if(count>=1){
//         console.log(count--)
//     }
//     else{
//         console.log(clearInterval(v))
        
//     }
// },2000);


// let count = 0;
// let progress = document.querySelector(".progress-fill");
// let progresstext = document.querySelector("#mytext");
// setInterval(function(){
// if(count<=99){
//     count++;
//     progress.style.width=`${count}%`;
//     progresstext.textContent=`${count}%`;
    
// }
// },30);

// storage and the cokkies in  the java script 
// local storage  save== remove-- fetch== retrived
// sessional storage are the same as the localstorage  used for 5 mb data storage in the backend iof the java script
// let name = localStorage.setItem("name","khubaib");
// let nam = localStorage.getItem("name");
// console.log(nam);
// localStorage.removeItem("name");
// cookies in java script  chota data store karnay ka lia use ho ga mainly 4kb data 

// make a vebsite that has a card in the search something in the card and display this card 
 function lightordark(){


if(window.matchMedia(`(prefers-color-scheme:dark)`).matches){
document.body.classList.add("dark");
document.body.classList.remove("light");

}
else{
    document.body.classList.add("light");
    document.body.classList.remove("dark");
};

 };
 
lightordark();
// document.body.classList.add(localStorage.setItem("theme"));
if(localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"));

}
else{
    lightordark();
}
window.matchMedia(`(prefers-color-scheme:dark)`).addEventListener("change",function(){
    if(!localStorage.getItem("theme")){
        lightordark();
    }
    lightordark();
});
 let btn = document.querySelector("#togletheme")
 btn.addEventListener("click",function(){
    console.log(btn);
if(document.body.classList.contains("dark")){
     document.body.classList.remove("dark");
     document.body.classList.add("light");
     localStorage.setItem("theme","light")
     }
     else{
   document.body.classList.remove("light");
   document.body.classList.add("dark")
   localStorage.setItem("theme","dark")
     } 
// document.body.classList.toggle("dark");
// document.body.classList.toggle("light");
 });
 
// document.body.classList.add(localStorage.setItem("theme"))









