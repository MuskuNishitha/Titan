let loggin=document.getElementById("loggin");
console.log(loggin);
let divtaggggggg=document.getElementById("divtaggggggg");
console.log(divtaggggggg);
let ninna=document.getElementById("ninna");
console.log(ninna);
loggin.addEventListener("click",()=>{
   let loggin=document.getElementById("loggin");
   console.log(loggin);
  let res= loggin.classList.toggle("true");
  if(res){
    ninna.style.display="block";
    divtaggggggg.style.filter="blur(5px)"
  }
  else{
    ninna.style.display="none";
    divtaggggggg.style.filter="none"
  }
},false);
divtaggggggg.addEventListener("click",()=>{
  ninna.style.display="none";
  divtaggggggg.style.filter="none"

},false)
let whichlist=document.getElementById("whichlist");
console.log(whichlist);
whichlist.addEventListener("click",()=>{
 let res= whichlist.classList.toggle("true");
 if(res){
   ninna.style.display="block";
   divtaggggggg.style.filter="blur(5px)"
 }
 else{
   ninna.style.display="none";
   divtaggggggg.style.filter="none"
 }
},false);
// -------------------------------------------
let overflow1=document.getElementById("overflow1");
console.log(overflow1);
let check1=document.getElementById("check1");
console.log(check1);
let arrw1=document.getElementById("arrw1");
console.log(arrw1);
overflow1.addEventListener("click",(e)=>{
  console.log(e);
  e.stopPropagation()
  let res=overflow1.classList.toggle("true")
  if(res){
  overflow1.style.border="1px solid black";
  arrw1.style.transform="rotate(-180deg)";
  arrw1.style.transition="all 0.5s"
  check1.style.display="block";
  }
  else{
    check1.style.display="none";
    arrw1.style.transform="rotate(0deg)";
    arrw1.style.transition="all 0.5s"
    overflow1.style.border="none";
  }
  
},false)

    
let overflow2=document.getElementById("overflow2");
console.log(overflow2);
let chech2=document.getElementById("chech2");
console.log(check1);
let arrw2=document.getElementById("arrw2");
console.log(arrw2);
overflow2.addEventListener("click",(e)=>{
  console.log(e);
  e.stopPropagation()
  let res=overflow2.classList.toggle("true")
  if(res){
  overflow2.style.border="1px solid black";
  arrw2.style.transform="rotate(-180deg)";
  arrw2.style.transition="all 0.5s"
  chech2.style.display="block";
  }
  else{
    chech2.style.display="none";
    arrw2.style.transform="rotate(0deg)";
    arrw2.style.transition="all 0.5s"
    overflow2.style.border="none";
  }
  
},false)
    
let overflow3=document.getElementById("overflow3");
console.log(overflow3);
let chech3=document.getElementById("chech3");
console.log(chech3);
let arrw3=document.getElementById("arrw3");
console.log(arrw3);
overflow3.addEventListener("click",(e)=>{
  console.log(e);
  e.stopPropagation()
  let res=overflow3.classList.toggle("true")
  if(res){
  overflow3.style.border="1px solid black";
  arrw3.style.transform="rotate(-180deg)";
  arrw3.style.transition="all 0.5s"
  chech3.style.display="block";
  }
  else{
    chech3.style.display="none";
    arrw3.style.transform="rotate(0deg)";
    arrw3.style.transition="all 0.5s"
    overflow3.style.border="none";
  }
  
},false)
// -----------------

let overflow4=document.getElementById("overflow4");
console.log(overflow4);
let chech4=document.getElementById("chech4");
console.log(chech4);
let arrw4=document.getElementById("arrw4");
console.log(arrw4);
overflow4.addEventListener("click",(e)=>{
  console.log(e);
  e.stopPropagation()
  let res=overflow4.classList.toggle("true")
  if(res){
  overflow4.style.border="1px solid black";
  arrw4.style.transform="rotate(-180deg)";
  arrw4.style.transition="all 0.5s"
  chech4.style.display="block";
  }
  else{
    chech4.style.display="none";
    arrw4.style.transform="rotate(0deg)";
    arrw4.style.transition="all 0.5s"
    overflow4.style.border="none";
  }
  
},false)
    
let overflow5=document.getElementById("overflow5");
console.log(overflow5);
let chech5=document.getElementById("chech5");
console.log(chech5);
let arrw5=document.getElementById("arrw5");
console.log(arrw5);
overflow5.addEventListener("click",(e)=>{
  console.log(e);
  e.stopPropagation()
  let res=overflow5.classList.toggle("true")
  if(res){
  overflow5.style.border="1px solid black";
  arrw5.style.transform="rotate(-180deg)";
  arrw5.style.transition="all 0.5s"
  chech5.style.display="block";
  }
  else{
    chech5.style.display="none";
    arrw5.style.transform="rotate(0deg)";
    arrw5.style.transition="all 0.5s"
    overflow5.style.border="none";
  }
  
},false)

// 

let overflow6=document.getElementById("overflow6");
console.log(overflow6);
let chech6=document.getElementById("chech6");
console.log(chech6);
let arrw6=document.getElementById("arrw6");
console.log(arrw6);
overflow6.addEventListener("click",(e)=>{
  console.log(e);
  e.stopPropagation()
  let res=overflow6.classList.toggle("true")
  if(res){
  overflow6.style.border="1px solid black";
  arrw6.style.transform="rotate(-180deg)";
  arrw6.style.transition="all 0.5s"
  chech6.style.display="block";
  }
  else{
    chech6.style.display="none";
    arrw6.style.transform="rotate(0deg)";
    arrw6.style.transition="all 0.5s"
    overflow6.style.border="none";
  }
  
},false)
   
let overflow7=document.getElementById("overflow7");
console.log(overflow7);
let chech7=document.getElementById("chech7");
console.log(chech7);
let arrw7=document.getElementById("arrw7");
console.log(arrw7);
overflow7.addEventListener("click",(e)=>{
  console.log(e);
  e.stopPropagation()
  let res=overflow7.classList.toggle("true")
  if(res){
  overflow7.style.border="1px solid black";
  arrw7.style.transform="rotate(-180deg)";
  arrw7.style.transition="all 0.5s"
  chech7.style.display="block";
  }
  else{
    chech7.style.display="none";
    arrw7.style.transform="rotate(0deg)";
    arrw7.style.transition="all 0.5s"
    overflow7.style.border="none";
  }
  
},false)

let gift=document.getElementById("gift");
console.log(gift);
let moreeeee=document.getElementById("moreeeee");
console.log(moreeeee);
moreeeee.addEventListener("mouseover",(e)=>{
  e.stopImmediatePropagation();
  let  res=moreeeee.classList.toggle("true");
  if(res){
    gift.style.display="block";

  }
  else{
    gift.style.display="none";
  
  
  }
  
},false)
moreeeee.addEventListener("mouseleave",(e)=>{
  e.stopImmediatePropagation();
  let  res=moreeeee.classList.toggle("true");
  if(res){
    gift.style.display="block";

  }
  else{
    gift.style.display="none";
 
  
  }
  
},false);

let  uday=document.getElementById("uday")
console.log(uday);
let karr=document.getElementById("karr")
console.log(karr);
uday.addEventListener("mouseover",(e)=>{
  e.stopImmediatePropagation();
  let  res=uday.classList.toggle("true");
  if(res){
    karr.style.display="block";

  }
  else{
    karr.style.display="none";
 
  
  }
  
},false);
// -------------------
uday.addEventListener("mouseleave",(e)=>{
  e.stopImmediatePropagation();
  let  res=uday.classList.toggle("true");
  if(res){
    karr.style.display="block";

  }
  else{
    karr.style.display="none";
 
  
  }
  
},false);

let sale=document.getElementById("sale");
console.log(sale);
let secccccinn=document.getElementById("secccccinn");
console.log(secccccinn);
sale.addEventListener("mouseover",(e)=>{

  e.stopImmediatePropagation();
  let  res=sale.classList.toggle("true");
  if(res){
    secccccinn.style.display="block";

  }
  else{
    secccccinn.style.display="none";
 
  
  }
},false)
// ---------------------
sale.addEventListener("mouseleave",(e)=>{

  e.stopImmediatePropagation();
  let  res=sale.classList.toggle("true");
  if(res){
    secccccinn.style.display="block";

  }
  else{
    secccccinn.style.display="none";
 
  
  }
},false)
let mlmlml=document.getElementById("mlmlml");
console.log(mlmlml);
let smalalala=document.getElementById("smalalala");
console.log(smalalala)
  
  mlmlml.addEventListener("mouseover",(e)=>{
    e.stopImmediatePropagation();
    let res=mlmlml.classList.toggle("true");
    if(res){
      smalalala.style.display="block"

    }
 else{
  smalalala.style.display="none"

 }
  },false)
  mlmlml.addEventListener("mouseleave",(e)=>{
    e.stopImmediatePropagation();
    let res=mlmlml.classList.toggle("true");
    if(res){
      smalalala.style.display="block"

    }
 else{
  smalalala.style.display="none"
 
 }
  },false)
  let premiunsec=document.getElementById("premiunsec");
  console.log(premiunsec);
  let prewar=document.getElementById("prewar");
  console.log(prewar);
  prewar.addEventListener("mouseover",(e)=>{
    e.stopImmediatePropagation();
    let res=prewar.classList.toggle("true");
    if(res){
      premiunsec.style.display="block"

    }
 else{
  premiunsec.style.display="none"

 }
  },false)
  prewar.addEventListener("mouseleave",(e)=>{
    e.stopImmediatePropagation();
    let res=prewar.classList.toggle("true");
    if(res){
      premiunsec.style.display="block"

    }
 else{
  premiunsec.style.display="none"
 
 }
  },false)
  let  accessarysce=document.getElementById("accessarysce");
  console.log(accessarysce);
  let container=document.getElementById("container");
  console.log(container);
  container.addEventListener("mouseover",(e)=>{
    e.stopImmediatePropagation();
    let res=container.classList.toggle("true");
    if(res){
      accessarysce.style.display="block"

    }
 else{
  accessarysce.style.display="none"

 }
  },false)
  container.addEventListener("mouseleave",(e)=>{
    e.stopImmediatePropagation();
    let res=container.classList.toggle("true");
    if(res){
      accessarysce.style.display="block"

    }
 else{
  accessarysce.style.display="none"
 
 }
  },false)
  //cololok
  //ourbrands
  let  cololok=document.getElementById("cololok");
  console.log(cololok);
  let clocksec=document.getElementById("clocksec");
  console.log(clocksec)
  cololok.addEventListener("mouseover",(e)=>{
    e.stopImmediatePropagation();
    let res=cololok.classList.toggle("true");
    if(res){
      clocksec.style.display="block"

    }
 else{
  clocksec.style.display="none"

 }
  },false)
  cololok.addEventListener("mouseleave",(e)=>{
    e.stopImmediatePropagation();
    let res=cololok.classList.toggle("true");
    if(res){
      clocksec.style.display="block"

    }
 else{
  clocksec.style.display="none"
 
 }
  },false)
  let secoverbrand=document.getElementById("secoverbrand");
  console.log(secoverbrand);
  let ourbrands=document.getElementById("ourbrands");
  console.log(ourbrands);
  ourbrands.addEventListener("mouseover",(e)=>{
    e.stopImmediatePropagation();
    let res=ourbrands.classList.toggle("true");
    if(res){
      secoverbrand.style.display="block"

    }
 else{
  secoverbrand.style.display="none"

 }
  },false)
  ourbrands.addEventListener("mouseleave",(e)=>{
    e.stopImmediatePropagation();
    let res=ourbrands.classList.toggle("true");
    if(res){
      secoverbrand.style.display="block"

    }
 else{
  secoverbrand.style.display="none"
 
 }
  },false)
  let watchessss=document.getElementById("watchessss");
  console.log(watchessss);
  watchessss.addEventListener("mouseover",(e)=>{
    e.stopImmediatePropagation();
    let res=watchessss.classList.toggle("true");
    if(res){
      clocksec.style.display="block"

    }
 else{
  clocksec.style.display="none"

 }
  },false)
  watchessss.addEventListener("mouseleave",(e)=>{
    e.stopImmediatePropagation();
    let res=watchessss.classList.toggle("true");
    if(res){
      clocksec.style.display="block"

    }
 else{
  clocksec.style.display="none"
 
 }
  },false)