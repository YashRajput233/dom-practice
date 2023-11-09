let heading=document.querySelector('.heading')
// a.innerHTML="sadfjl"

// let b=document.getElementsByTagName('p')
// console.log(b)
// let c=document.createElement('p')
// c.textContent="asdfkfdnf"
// a.prepend(c)

// let para1=document.querySelector('#para')
// para1.remove()
// console.log(para1.parentElement)
// let newpara= para1.parentElement
// newpara.removeChild('a')

// let div=document.querySelector('.newdiv')
// let newpara=div.childElement('a')
// newpara.remove()

let a=document.querySelector(".bulb")
let b=document.querySelector("button")
let c=true
b.addEventListener("click",function(){
    if(c===true){
        a.style.backgroundColor="yellow"
        b.innerText="OFF"
        c=false
    }
    else if(c===false){
        a.style.backgroundColor="white"
        b.innerText="ON"
        c=true
    }
})  
// heading.style.color="red"
heading.style.cssText = `
color=red;
`

let find=getComputedStyle(heading).backgroundColor
console.log(find)

let img=document.querySelector(".newimg")
console.log(img.getAttribute("alt"))
// img.setAttribute("alt","image123")

// const attributes={
//     src:"https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp" , 
//     alt:"imags"
// }
// document.setAttributes(img,attributes)

// img.src="https://images3.alphacoders.com/823/82317.jpg"

let head=document.querySelector("h2")
let inc=document.querySelector(".inc")
let dec=document.querySelector(".dec")

inc.addEventListener("click",function(){
    head.innerHTML=Number(head.innerHTML)+1
})
dec.addEventListener("click",function(){
    if(head.innerHTML<=0){
        return false
    }
    head.innerHTML=Number(head.innerHTML)-1
})

let box1=document.querySelector('.box1')
let box2=document.querySelector('.box2')

let arr=["red","blue","green","yellow","lightblue"]
box1.addEventListener("click",function(){
    arr.forEach(ele=>box1.style.backgroundColor=ele)

})

box2.addEventListener("mousemove",function(){
    arr.forEach(ele=>box2.style.backgroundColor=ele)
   
})

let nav=document.querySelector('.navbar')
// nav.addEventListener("click",function(e){
//     console.log(e.target,e.currentTarget,e)
// })

 let fn=function(e){
    e.prevenDefault();
    alert("new message");
    nav.removeEventListener("click",fn);
}
nav.addEventListener("click",fn);

