let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
    ul.classList.toggle("showData");

    if (ul.className == "showData") {
        document.getElementById("bar").className = "fa-solid fa-xmark";
    }
    else {
        document.getElementById("bar").className = "fa-solid fa-bars";
    }
});

// navbar
let shpes = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", () => {
    shops.style.color = "rgb(4, 219, 219)";
    reviews.style.color = "#fff";
    blogs.style.color = "#fff";
    contacts.style.color = "#fff";

});
reviews.addEventListener("click", () => {
    reviews.style.color = "rgb(4, 219, 219)";
    blogs.style.color = "#fff";
    contacts.style.color = "#fff";
    shops.style.color = "#fff";

});
blogs.addEventListener("click", () => {
    blogs.style.color = "rgb(4, 219, 219)";
    contacts.style.color = "#fff";
    shops.style.color = "#fff";
    reviews.style.color = "#fff";
});
contacts.addEventListener("click", () => {
    contacts.style.color = "rgb(4, 219, 219)";
    reviews.style.color = "#fff";
    shops.style.color = "#fff";
    blogs.style.color = "#fff";
});

// card js

let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage");
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("btn");
console.log(crd);

crd.forEach(function (curValue) {
    curValue.addEventListener("click", function () {
        itemPage.style.display = "flex";
        container.style.display = "none";

        let imgSrc = curValue.firstElementChild.src;
        itemImg.src = imgSrc;


        buyBtn.addEventListener("click", function () {
            document.querySelector(".buyPage").style.display = "block";
            document.querySelector(".buyText").innerHTML = `
                <h3>Enter Details :</h3>
                <input type="text" placeholder="Enter your Name" id="name"> <br>
                <input type="text" placeholder="Enter Your Address" id="address"> <br>
                <input type="number" placeholder="Enter Your Mobile No" id="num"> <br>
                <h3>Payment Option:</h3> 
                <select id="">
                    <option value="Google-Pay">Google-Pay</option>
                    <option value="Phone-Pay">Phone-Pay</option>
                    <option value="Bharat-Pay">Bharat-Pay</option>
                    <option value="Cash">Cash-On-Delivery</option>
                </select> 
                <br>
                `
                let button = document.createElement("button");
                button.innerText="Submit";
                document.querySelector(".buyText").appendChild(button);

                button.addEventListener("click",function(){
                    let name=document.getElementById("name");

                    if(name.value=="" && address.value=="" && num.value==""){
                        alert("Please Enter Your Details..")
                    }
                    else{
                        alert("Your Order Confirmed");
                    }
                })

                let cross = document.querySelector(".cross");
                cross.addEventListener("click", function () {
                document.querySelector(".buyPage").style.display = "none";
            });
        });
    });
});
// connect

// function connect(){
//     let names=document.getElementById("names");
//     let number=document.getElementById("numbre");

//     if(names.value=="" && number.value==""){
//         alert("Please Fill the Details");
//     }
//     else{
//         alert("Thanks For Connecting");
//     }
// }

