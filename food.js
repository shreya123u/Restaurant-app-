let trendFood = document.querySelectorAll(".trendFood");
let foodCard = document.querySelectorAll(".foodCard");

 let arrow = document.getElementById("arrow");
 arrow.addEventListener("click", function(){
    window.scrollTo({top:0, behavior:"smooth"})
 })



let count = 0;
console.log(trendFood);

trendFood.forEach((imgs, index)=>{
    imgs.style.left=`${index*100}%`;
})


const myFun  = ( ) =>{
    trendFood.forEach((curImg)=>{
        curImg.style.transform=`translateX(-${count * 100}%)`
    })
     
}

setInterval(()=>{
    count++;
    if(count == trendFood.length){
        count=0
    }
    myFun()
},4000)




foodCard.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon"  class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
       <h2>Food Details</h2>
       <p>Your choice of freshly grilled meat or sofritas served in a delicious bowl with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.</p>

        `
        document.querySelector("body").appendChild(div)
        document.querySelector("#icon").addEventListener("click", function(){
            div.remove();
        })
    })
})
foodCard.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon"  class="fa-solid fa-xmark"></i>
        <img src=${curCard.secondElementChild.src} alt="">
       <h2>Food Details</h2>
       <p>Biryani is a celebratory rice and meat dish cherished in the Indian sub-continent. A traditional biryani consists of fluffy basmati rice layered over tender & succulent pieces of meat, accompanied with the mesmerizing aromas of spices, herbs & caramelized onions.</p>
        `
        document.querySelector("body").appendChild(div)
        document.querySelector("#icon").addEventListener("click", function(){
            div.remove();
        })
    })
})
foodCard.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon"  class="fa-solid fa-xmark"></i>
        <img src=${curCard.thirdElementChild.src} alt="">
       <h2>Food Details</h2>
       <p>Paneer Butter Masala, also known as butter paneer is a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter. As the name denotes, the curry is cooked in butter which imparts it's characteristic buttery flavor to the dish.</p>

        `
        document.querySelector("body").appendChild(div)
        document.querySelector("#icon").addEventListener("click", function(){
            div.remove();
        })
    })
})
foodCard.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon"  class="fa-solid fa-xmark"></i>
        <img src=${curCard.forthElementChild.src} alt="">
       <h2>Food Details</h2>
       <p>Chicken ghee roast is fiery red in colour, and has a tangy and spicy flavor with ghee and roasted spices. A few key ingredients of chicken ghee roast are chicken, curds, onions, ghee, jaggery, tamarind, ginger, garlic and regional spices and condiments</p>

        `
        document.querySelector("body").appendChild(div)
        document.querySelector("#icon").addEventListener("click", function(){
            div.remove();
        })
    })
})
foodCard.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon"  class="fa-solid fa-xmark"></i>
        <img src=${curCard.fifthElementChild.src} alt="">
       <h2>Food Details</h2>
       <p>The perfect pairing for this dish is rice – whether Basmati or brown rice – to balance the spiciness and add texture to the meal. To prepare Paneer Masala with Rice, start by warming oil in a pan and adding onions and ginger-garlic paste.</p>

        `
        document.querySelector("body").appendChild(div)
        document.querySelector("#icon").addEventListener("click", function(){
            div.remove();
        })
    })
})
