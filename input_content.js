const productlist=document.querySelector(".productlist");
const inputcontent=document.querySelector(".inputcontent");
const showcontent=document.querySelector(".show_content");
const incomeproduct=document.querySelector(".incomeproduct");
productlist.addEventListener("click",a=>{
   
    inputcontent.style.display="none";
    showcontent.style.display="block";

});
incomeproduct.addEventListener("click",e=>{
   showcontent.style.display="none";
   inputcontent.style.display="block";
});