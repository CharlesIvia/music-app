const sounds = document.querySelectorAll(".sound");
console.log(sounds);
const pads = document.querySelectorAll(".pads div"); //select all divs in pads div
const visual = document.querySelector(".visual");
const colors = ["#60d394","#282928","#c060d3","#d3d160","#6860d3","#60b2d3"];

//playSound

let playSound = ()=>{
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
        });

        pad.addEventListener('click', function(){
            sounds[index].play();

            createBubbles(index);
        });
    });
}

//Create bubles on click

const createBubbles = (index)=> {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function(){
        visual.removeChild(this);
    });
};

//Play sounds

window.addEventListener('load',playSound());