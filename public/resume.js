var directions = document.getElementById('nav-directions');
console.log(directions);
var id;
var targetPos;
var pos = 0;
var target;
directions.addEventListener('click',function(event){
    event.preventDefault();
    target = event.target;
    target = target.innerText+"-container";
    target = target.toLowerCase();
    if(target==null) return;
    console.log(target);
    targetPos = document.getElementById(target).getBoundingClientRect().y;
    console.log(targetPos);
    scroll(targetPos);
});

function scroll(targetPos){
        id = setInterval(function(){
            if(pos>=targetPos){
                clearInterval(id);
                pos = 0;
                return;
            }
            window.scrollBy(0,50);
            pos+=50;
        },20);
}

// Fill all the skill bars when the skill section is visible
// var progressBars = document.querySelectorAll('.skill-progress > div');
// function initializeBars(){
//     for(let bar of progressBars){
//         bar.style.width = 0+'%';     
//     }
// }
// initializeBars();

// function fillBars(){
//     for(let bar of progressBars){
//         let targetWidth = bar.getAttribute('data-bar-width');
//         let currentWidth = 0;
//         let interval = setInterval(function(){
//             if(currentWidth>targetWidth){
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++;
//             bar.style.width = currentWidth+'%';
//         },3);
//     }
// }

// window.addEventListener('scroll',checkScroll);
// var animationDone = false;
// function checkScroll(){
//     let skillPos = document.getElementById('skills-container1').getBoundingClientRect();
//     if(!animationDone && skillPos.top<=window.innerHeight){
//         animationDone = true;
//         console.log("skills-container visible");
//         fillBars();
//     }
//     else if(skillPos.top>window.innerHeight){
//         console.log("greater")
//         animationDone = false;
//         initializeBars();
//     }
// }

var progressBars = document.querySelectorAll('.skill-progress > div');

function initializeBar(bar){
    bar.setAttribute("data-visited", false);
    bar.style.width = 0+'%';
}


for(let bar of progressBars){
    initializeBar(bar);
}


function fillBar(bar){
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = 0;

    var interval = setInterval(function(){
        if(currentWidth>targetWidth){
            clearInterval(interval);
            return;
        }
        bar.style.width = currentWidth+'%';
        currentWidth++;
    },5);
}



function checkScroll(){
    for(let bar of progressBars){
        let scrollPos = bar.getBoundingClientRect();
        
        if(bar.getAttribute("data-visited")=="false" && scrollPos.top<=window.innerHeight){
            bar.setAttribute("data-visited",true);
            console.log(bar.getAttribute("data-visited"));
            fillBar(bar);
        }
        else if(scrollPos.top>window.innerHeight){
           // bar.setAttribute("data-visied",false);
            initializeBar(bar);
        }
    }
}
window.addEventListener('scroll',checkScroll);