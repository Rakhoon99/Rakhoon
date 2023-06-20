const orderlist=document.querySelector(".orderlist");
const uplood=document.querySelector(".uplood");
const tbody=document.querySelector(".tbody");

let constemar={};

uplood.addEventListener("click",d=>{
    const productname=document.querySelector("#producttext");

    const input_image=document.querySelector("#input_image");

    const title=document.querySelector("#title");

  

    const createtd=document.createElement("td");

    const text=createtd.appendChild(document.createTextNode(title.value));
    const product_name=createtd.appendChild(document.createTextNode(productname.value));
    const imageurl=createtd.appendChild(document.createTextNode(input_image.value));
    createtd.append(text);
    createtd.append(product_name);
    createtd.append(imageurl);
    tbody.appendChild(createtd);
    constemar.append(createtd);

    
    
   console.log("this is uplood");
});


const createtd=document.createElement("td");


