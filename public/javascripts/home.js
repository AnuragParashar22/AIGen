


// popup scene 

// var showme = document.querySelectorAll("#showme");
// showme = [...showme];
// showme.forEach(function (elem) {
//     elem.addEventListener("mouseenter", function (dets) {
//         if (dets.target.dataset.name == 1) {
//             document.querySelector(".extra").style.opacity = "1";
//             document.querySelector(".extra").style.display = "flex";
//         }
//         else {
//             document.querySelector(".extra2").style.opacity = "1";
//             document.querySelector(".extra2").style.display = "flex";

//         }

//     })
//     elem.addEventListener("mouseleave", function (dets) {
//         if (dets.target.dataset.name == 1) {
//             document.querySelector(".extra").style.opacity = "0";
//             document.querySelector(".extra").style.display = "none"
//         }
//         else {
//             document.querySelector(".extra2").style.opacity = "0";
//             document.querySelector(".extra2").style.display = "none"
//         }
//     })

// });

var tl = gsap.timeline();
// function ShowAnimation() {

//     tl.from(".light", {
//         x: "-10vw",
//         opacity: 0,
//         ease: Expo.easeInOut,
//         duration: 1,
//     })
//         .from(".design", {
//             y: 30,
//             opacity: 0,
//             delay: -.5,
//             ease: Expo.easeInOut,
//             duration: 1,
//         })
//         .from(".aura", {
//             x: "-20vw",
//             opacity: 0,
//             ease: Expo.easeInOut,
//             delay: -1,
//             duration: 1.5,
//         })
//         .from(".shopnow", {
//             x: "-20vw",
//             opacity: 0,
//             ease: Expo.easeInOut,
//             delay: -1.4,
//             duration: 1.5,
//         })


// }










var currentshowing = 1;


function nav() {
    gsap.from(".navigation", {
        y: -100,
        ease: "power3",
        opacity: 0,
        duration: 2,
    })
}
nav()

var showinginterval;



var over = 0;

// document.getElementById("more").addEventListener("click", function () {

//     if (over == 0) {
//         document.querySelector(".overlayer").style.width = "100%";
//         document.querySelector(".textcontent").style.display = "flex";
//         document.querySelector(".overlayer").style.backgroundColor = "#D0E8E4";

//         // document.querySelectorAll("#same").style.opacity="1"
//         over = 1
//     }
//     else {
//         document.querySelector(".overlayer").style.width = "0%";
//         // document.querySelectorAll("#same").style.opacity = "0"
//         document.querySelector(".overlayer").style.backgroundColor = "#000";


//         document.querySelector(".textcontent").style.display = "none";

//         over = 0;


//     }
// })








