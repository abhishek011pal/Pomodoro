
/*restaritng JS
let hours=0
let minutes=3
let seconds=0

let hrs=document.querySelector('.hrs');
let newHrs=hours;
let oldHrs=hours;
hrs.textContent=newHrs;

let min=document.querySelector('.min');
let oldMin=minutes;


let sec=document.querySelector('.sec');
let oldSec=seconds;


let newsec=seconds+60;
sec.textContent=newsec;
let secInterval;


let newMin;
newMin=minutes-1;
min.textContent=newMin;
let minInterval;
let minCount=0;


let startBtn=document.querySelector('.startBtn');
// let pauseBtn=document.querySelector('.pauseBtn');
let resetBtn=document.querySelector('.resetBtn');
// pauseBtn.style.display='none';

let startCount=false;
function timerStart(){    
    startCount=true;

    if (startBtn.textContent == 'Start'){
        console.log('if start')
        startBtn.textContent='Pause';
        secInterval=setInterval(()=>{
            if(minCount==oldMin && hours==0){
                sec.textContent=0;
                clearInterval(secInterval);
            }

            newsec=newsec-1;
            sec.textContent=newsec;
            if (newsec==0){
                newsec=newsec+60;
            }
        },1000);

        minInterval=setInterval(()=>{                
            minCount++;
            if(minCount==oldMin){
                min.textContent=0;
                clearInterval(minInterval);
            }
            if(newMin==0){
                min.textContent=0
            }else{
                min.textContent=newMin;
            }

            newMin=newMin-1
            minutes=minutes-1
        },1000*60);
    }else{
        console.log('pause iff');
        // startBtn.removeEventListener('click',timerStart);
        clearInterval(minInterval);
        clearInterval(secInterval);
        startBtn.textContent='Start'
        // console.log('pause iff22');

    } 

    // startBtn.style.display='none';
    // pauseBtn.style.display='block';
    // pauseBtn.classList.add('btn');
    // resetBtn.classList.remove('btn');
    // startBtn.classList.add('btn');

}
startBtn.addEventListener('click',timerStart);


----this part is commented
pauseBtn.addEventListener('click',pauseTimer)

function pauseTimer(){
    console.log('paused clicked!!!')

    clearInterval(minInterval);
    clearInterval(secInterval);

    // let pausehrs=hrs.textContent;
    // hrs.textContent=pausehrs;

    // let pauseMin=min.textContent;
    // min.textContent=pauseMin;

    // let pauseSec=sec.textContent;
    // sec.textContent=pauseSec;

    // pauseBtn.removeEventListener('click',pauseTimer);
    // pauseBtn.removeEventListener('click',timerStart);

    pauseBtn.style.display='none'
    startBtn.style.display='block'

}

-- this part is commented

console.log('start'=='START')

restaritng JS*/


// ...........showing data from form 

let el= function (el){
    return document.getElementById(el)
}

let screenCover=el('screenCover');
let updatePomo=el('updatePomo');
let updatetime=el('updatetime');
let formBtn=el('formBtn');

let isForm=0;

// console.log(updatetime)
let focusInpputVal= el('pomoDur1');
let shortBrInputVal = el ('pomoDur2');
let longBrInputVal= el('pomoDur3')
let focusTime;
let shortTime;
let longTime;

function submitUpdateTimeForm(event){
    event.preventDefault();
    focusTime=focusInpputVal.value;        
    shortTime=shortBrInputVal.value;
    longTime=longBrInputVal.value;

    minVal = focusTime - 1; 
    secVal = 60;
    secCount = 0;
    timer.textContent= `${focusTime} : 00`;
    
    
    screenCover.style.display='none';
    updatePomo.style.display='none';
    isForm = 0;

    startBtn.classList.add('btn');
    resetBtn.classList.remove('btn');

}

// ..................if block to show the initial time on screen....
let timer= el('timer')
if(timer.textContent.trim()=='' || timer.textContent.trim() ==null){
    timer.textContent= `${focusInpputVal.placeholder} : 00`;
}
console.log('text content of timer:',timer.textContent)


function ShowForm(){
    // console.log('form!!')    
    resetBtnHandler()
    focusTime=focusInpputVal.value;        
    shortTime=shortBrInputVal.value;
    longTime=longBrInputVal.value;
    if(!isForm){
        console.log('iff');
        screenCover.style.display='block';
        updatePomo.style.display='flex';
        isForm=1;
    }else{
        console.log('else');
        screenCover.style.display='none';
        updatePomo.style.display='none';
        isForm=0
    }    
}

updatetime.addEventListener('click',ShowForm);
screenCover.addEventListener('click',ShowForm);
formBtn.addEventListener('click',submitUpdateTimeForm);


//............... timer managing.............

let startBtn= el('startBtn');

console.log('hello');
let secVal=60;
let strtInterval;
let secCount=0;

let minVal; 


function updateUi(){
    console.log('updatUi called')

    setMival();
    console.log('minVal in updateAi is::',minVal);

    minVal=minVal-1;
    strtInterval=setInterval(()=>{
        if(secVal==0){
        secVal=60;
        }

        secVal=secVal-1;                   

        if (secCount>=60){
            minVal=Number(minVal)-1
            secCount=0;
        }
        
        if (secVal>=10){
            timer.textContent= `${minVal} : ${secVal}`;
        }else{
            timer.textContent= `${minVal} : 0${secVal}`;
        }
        
        if(minVal==0){
            clearInterval(strtInterval);
        }
        secCount++;
    },1000)
}

function startBtnHandler(btnVal){
    console.log('strt button clicked')
    startBtn.classList.add('btn');
    resetBtn.classList.remove('btn');
    if (startBtn.textContent==='Start'){        
        startBtn.textContent='Pause'; 
        updateUi()
        
    }
    else if(startBtn.textContent==='Pause') {
        console.log('Paused!!');
        clearInterval(strtInterval);
        startBtn.textContent='Start'; 
        // startBtn.removeEventListener('click',startBtnHandler);
    }
}

startBtn.addEventListener('click',startBtnHandler);


let resetBtn=el('resetBtn');

function resetBtnHandler(){
    console.log('reset button clicke!!');

    resetBtn.classList.add('btn');
    startBtn.classList.remove('btn');
    if(focusInpputVal.value=='' || focusInpputVal.value==null){
        timer.textContent= `${focusInpputVal.placeholder} : 00`;
    }else{
        timer.textContent= `${focusInpputVal.value} : 00`;

    }
    startBtn.textContent='Start'; 
    clearInterval(strtInterval);
    secVal=60;
    secCount=0;
    minVal= focusInpputVal.placeholder;
    minVal=minVal-1;
    // resetBtn.removeEventListener('click',resetBtnHandler);
}
resetBtn.addEventListener('click',resetBtnHandler);


// ...............................mode handling...............................

let controls= el('controls');
let focusActive=1;
let shrtActive=0;
let longActive=0;

// let modeBtn=controls.querySelectorAll('modeBtn');

// modeBtn[0].classList.add('btn');

// console.log('modeBtn::',modeBtn);
// console.log(controls.target);
// function modeHandler(event){
//     console.log('modeHandler called!!');
//     console.log('controls.target.textContent::',event.target);
// // we can use forEach loop to loop through the items and add some properties on it 
//     if(event.target.textContent==='Focus'){
//         focusActive=2;
//         shrtActive=0;
//         longActive=0;
//     }
//     else if(event.target.textContent==='Short Break'){
//         focusActive=0;
//         shrtActive=1;
//         longActive=0;
//     }else{
//         focusActive=0;
//         shrtActive=0;
//         longActive=1;
//     }
//     // controls.removeEventListener('click',modeHandler);
// }

// controls.addEventListener('click',modeHandler);

// things that need to cover yesterday
// 1.update UI when user clicks on the shortbreak or longbreak to show initial timings
// 2.add class 'btn' to shrtbreak after clicking
// 3.update start btn and resetbtn accordingly


function setMival(val=24){
    // if(focusActive==1 || focusActive==2){
    //     if(focusInpputVal.value=='' || focusInpputVal.value==null){
    //         minVal=focusInpputVal.placeholder;
    //     }else{
    //         minVal=focusInpputVal.value;
    //     }
    // }else if(shrtActive==1){
    //     if(shortBrInputVal.value=='' || shortBrInputVal.value==null){
    //         minVal=shortBrInputVal.placeholder;
    //     }else{
    //         minVal=shortBrInputVal.value;
    //     }
    // }else{
    //     if(longBrInputVal.value=='' || longBrInputVal.value==null){
    //         minVal=longBrInputVal.placeholder;
    //     }else{
    //         minVal=longBrInputVal.value;
    //     }
    // }
    if(val==null || val==''){
        val=24;
    }
    minVal=val;

    console.log('minval in minVal function::',minVal);

    return minVal;

}



let FocusBtn = el('FocusBtn');
let shrtBtn = el('shrtBtn');
let lngBtn = el('lngBtn');

function FocusBtnHandler(){
    if(focusInpputVal.value=='' || focusInpputVal.value==null){
            minVal=focusInpputVal.placeholder;
    }else{
        minVal=focusInpputVal.value;
    }

    setMival(minVal);
    formBtn.classList.add('btn');
    shrtBtn.classList.remove('btn');
    lngBtn.classList.remove('btn');

    // FocusBtn.removeEventListener('click',FocusBtnHandler)

}

function shrtBtnHandler(){
    console.log('shrt breakclicked!!');
    if(shortBrInputVal.value=='' || shortBrInputVal.value==null){
            minVal=shortBrInputVal.placeholder;
    }else{
        minVal=shortBrInputVal.value;
    }

    timer.textContent=`${minVal}:00`
    
    console.log('value of minval is::',minVal);
    setMival(minVal);
    
    clearInterval(strtInterval);
    startBtn.textContent='Start'; 
    // updateUi();

    formBtn.classList.remove('btn');
    lngBtn.classList.remove('btn');
    shrtBtn.classList.add('btn');

}

function lngBtnHandler(){

    if(longBrInputVal.value=='' || longBrInputVal.value==null){
            minVal=longBrInputVal.placeholder;
    }else{
        minVal=longBrInputVal.value;
    }

    timer.textContent=`${minVal}:00`
    setMival(minVal);

    formBtn.classList.remove('btn');
    shrtBtn.classList.remove('btn');
    lngBtn.classList.add('btn');

}

FocusBtn.addEventListener('click',FocusBtnHandler);
shrtBtn.addEventListener('click',shrtBtnHandler);
lngBtn.addEventListener('click',lngBtnHandler);





// ...............for optimisation...........................

controls.addEventListener('click',ControlsHandler);

function ControlsHandler(event){
    if(event.target.textContent==='Focus'){
        console.log("inside FocusBtnHandler");
        if(focusInpputVal.value=='' || focusInpputVal.value==null){
            minVal=focusInpputVal.placeholder;
        }else{
            minVal=focusInpputVal.value;
        }

        timer.textContent=`${minVal}:00`
        setMival(minVal);

        secVal=60;
        strtInterval;
        secCount=0;

        clearInterval(strtInterval);
        startBtn.textContent='Start'; 

        FocusBtn.classList.add('btn');
        shrtBtn.classList.remove('btn');
        lngBtn.classList.remove('btn');

        focusActive=2;
    }else if (event.target.textContent==='Short Break'){
        console.log('shrt breakclicked!!');
        if(shortBrInputVal.value=='' || shortBrInputVal.value==null){
                minVal=shortBrInputVal.placeholder;
        }else{
            minVal=shortBrInputVal.value;
        }

        timer.textContent=`${minVal}:00`
        
        console.log('value of minval in shrtHandler is::',minVal);
        setMival(minVal);
        
        secVal=60;
        strtInterval;
        secCount=0;

        clearInterval(strtInterval);
        startBtn.textContent='Start'; 
        // updateUi();

        FocusBtn.classList.remove('btn');
        lngBtn.classList.remove('btn');
        shrtBtn.classList.add('btn');

        shrtActive=1;
    }
    else if(event.target.textContent==='Long Break'){
        console.log("inside FocusBtnHandler");

        if(longBrInputVal.value=='' || longBrInputVal.value==null){
                minVal=longBrInputVal.placeholder;
        }else{
            minVal=longBrInputVal.value;
        }

        timer.textContent=`${minVal}:00`
        setMival(minVal);

        secVal=60;
        strtInterval;
        secCount=0;

        clearInterval(strtInterval);
        startBtn.textContent='Start';

        FocusBtn.classList.remove('btn');
        shrtBtn.classList.remove('btn');
        lngBtn.classList.add('btn');

        longActive=1;
    }
}




// ...........HTML
/*

<div class="calenderwrapper">
    <div class="calender">
        <!-- <iframe src="https://calendar.google.com/calendar/embed?src=yourcalendarid&ctz=Asia/Kolkata" 
        style="border: 0;border-radius: 1.5rem;" width="300" height="300" frameborder="0" scrolling="no"></iframe> -->
        <i class="fa-solid fa-calendar-days"></i>
    </div>
    
    <div class="futuretasks">
        <i class="fa-solid fa-angle-left hover " ></i>
        <i class="fa-solid fa-angle-right hover "></i>
    </div>
</div>


*/
// ........................HTML Task Form...........................

<div class="taskForm hidden" id="taskForm">   
    <div class="close">
        <i class="fa-solid fa-xmark"></i>
    </div>

    <form autocomplete="off">
        <div class="formInputBox">
            <label>Enter tasks</label>
            <br>
            <input type="text" id="taskInput" placeholder="Enter Task">
            
            <label>Select Date</label><br>
            <input type="date" id="dateInput" placeholder="Select Date">
        </div>
        
        <div class="taskFormBtn">
            <button type="button" id="addTaskBtn">Add Task</button>
        </div>
    </form>
</div>

.taskForm{
    display: flex;
    border: 0.5px solid whitesmoke;
    border-radius: 0.5rem;
    /* background-color: rgba(255, 45, 255, 0.077); */
    background:linear-gradient(to bottom, rgba(128, 0, 128, 0.568) 70%, rgba(240, 71, 48, 0.432));
    box-shadow: 1px 1px 27px 0px rgb(81, 81, 81);
    width: 70%;
    /* height: 100%; */
    padding: 1rem;
    justify-content: center;
    color: white;
    position:absolute;

    /* font-weight: 500; */
    /* font-size: 1rem; */
    /* gap: 1rem; */
    /* text-align: center; */
}
.formInputBox label{
    font-size: 1.2rem;
    font-weight: 500;
    color: #c9c8c8;
}
.taskForm input{
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 0.8rem;
    font-size: 1.2rem;
    margin: 0.8rem;
}

.taskFormBtn{
    justify-self:start;
    align-self:stretch;
}
#addTaskBtn{
    border: 1px solid white;
    padding: 0.5rem;
    margin: 0.4rem;
    border-radius: 0.3rem;
    color: #c9c8c8;
    transition: all 0.5s ease, transform 0.3s;
    /* align-self: center; */
    /* justify-self: center; */

}
#addTaskBtn:active{
    background-color: rgb(79, 78, 78);
    color: white;
    box-shadow: inset 1px 1px 5px 12px rgb(243, 61, 61);

}



             