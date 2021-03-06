//animation intro

const timeLine = gsap.timeline({defaults: {ease: "power1.out"}});

timeLine.to(".text", {y: "0%", duration: 1, stagger: 0.5, delay: 2});
timeLine.to(".slider", {y: "-100%", duration: 1.5, delay: 1});
timeLine.to(".intro", {y: "-100%", duration: 1}, "-=1");
timeLine.fromTo("#big-text", {opacity: 0}, {opacity: 1, duration: 1});
timeLine.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1});


//animation project


function move(e){
    if(window.innerWidth > 1000){
    const card = document.querySelector('#card');
    let xAxis = (window.innerWidth /2- e.pageX)/10;
    let yAxis = (window.innerHeight / 4  - e.pageY)/45;
    card.style.transform = ` rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}
}

function transition(e) {
    if(window.innerWidth > 1000){
    const card = document.querySelector('#card');
    const img = document.querySelector("#card img");
    const title = document.querySelector("#card h2");
    const project = document.querySelector('#project');
    const button = document.querySelector('button');
    const sideMenu = document.querySelector('.side-menu');
    card.style.transition = "none"
    img.style.transform = "translateZ(225px)";
    title.style.transform = "translateZ(200px)";
    project.style.transform = "translateZ(125px)";
    button.style.transform = "translateZ(100px)";
    sideMenu.style.transform = "translateZ(175px)";
    }
}
function stopAnimate(e) {
    
    const card = document.querySelector('#card');
    card.style.transition = "all 0.5 ease"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`; 
    const img = document.querySelector("#card img");
    const title = document.querySelector("#card h2");
    const project = document.querySelector('#project');    
    const sideMenu = document.querySelector('.side-menu');
    const button = document.querySelector('button');
    img.style.transform = "translateZ(0px)";
    title.style.transform = "translateZ(0px) ";
    project.style.transform = "translateZ(0px)";
    button.style.transform = "translateZ(0px)";
    sideMenu.style.transform = "translateZ(0px)";
}

/*project.addEventListener("mousemove", (e) => {
    
})*/