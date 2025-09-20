// ...........showing data from form 



let el= function (el){
    return document.getElementById(el)
}

let screenCover=el('screenCover');
let updatePomo=el('updatePomo');
let updatetime=el('updatetime');
let formBtn=el('formBtn');

screenCover.style.display = 'none';
updatePomo.style.display = 'none';
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

    // if(focusInpputVal.value<=0 || (shortBrInputVal.value)<=0 || longBrInputVal.value <=0){
    //     alert("negative values not allowed")
    //     focusTime='';
    //     shortTime='';
    //     longTime='';
    //     return;
    // }

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

// ...........Form handling and Ui part..........

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


//............... timer managing......and update UI.......

let startBtn= el('startBtn');

console.log('hello');
let secVal=60;
let strtInterval;
let secCount=0;

let minVal=25;


function updateUi(){
    console.log('inside updatUi')

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

// ....................Start Button and Pause handling............

function startBtnHandler(btnVal){
    console.log('strt button clicked')
    startBtn.classList.add('btn');
    resetBtn.classList.remove('btn');
    if(minVal<=0){
        alert("Please enter time in minutes (positive value)");
        ShowForm();
        return;

    }
    if (startBtn.textContent==='Start'){        
        startBtn.textContent='Pause'; 
        updateUi()
        
    }
    else if(startBtn.textContent==='Pause') {
        console.log('Paused!!');
        clearInterval(strtInterval);
        startBtn.textContent='Start'; 
        minVal=minVal+1;
        // startBtn.removeEventListener('click',startBtnHandler);
    }
}

startBtn.addEventListener('click',startBtnHandler);

// ...............RESET button..............

let resetBtn=el('resetBtn');
let isReset=0;

function resetBtnHandler(){
    console.log('reset button clicked!!');

    isReset=1;

    increaseTimeBtn.forEach((el)=>{
        el.classList.remove('addTimeStyle');
    })

    resetBtn.classList.add('btn');
    startBtn.classList.remove('btn');

    startBtn.textContent='Start'; 
    clearInterval(strtInterval);

    if(focusActive==2 || focusActive==1){
        focusActive=0;
        FocusBtnHandler()
    }else if(shrtActive==1){
        shrtActive=0;
        shrtBtnHandler()
    }else if (longActive==1 ){
        longActive=0;
        lngBtnHandler()
    }

    secVal=60;
    secCount=0;

}
resetBtn.addEventListener('click',resetBtnHandler);


// ...............................mode handling...............................

let controls= el('controls');
let focusActive=1;
let shrtActive=0;
let longActive=0;


function setMival(val=24){
    
    minVal=val;

    if(val=='' || val==null){
        val=25;
    }
    console.log('minval in minVal function::',minVal);

    return minVal;

}

// /*Experiment starts  here

let FocusBtn = el('FocusBtn');
let shrtBtn = el('shrtBtn');
let lngBtn = el('lngBtn');


function FocusBtnHandler(){
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

    // FocusBtn.removeEventListener('click',FocusBtnHandler)

}FocusBtnHandler();

function shrtBtnHandler(){
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

function lngBtnHandler(){
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

FocusBtn.addEventListener('click',FocusBtnHandler);
shrtBtn.addEventListener('click',shrtBtnHandler);
lngBtn.addEventListener('click',lngBtnHandler);

// experiment ends Here */

let addTime=el('addTime');
let increaseTimeBtn= document.querySelectorAll('.increaseTimeBtn')


function addTimeHandler(event){
    console.log('inside addTimeHandler!!');

    if(event.target.textContent==='+25'){
        minVal=Number(minVal)+25;                 
    }
    else if(event.target.textContent==='+10'){
        minVal=Number(minVal)+10;
    }else if(event.target.textContent==='+5'){
        minVal=Number(minVal)+5;
    }else if(event.target.textContent==='+1'){
        minVal=Number(minVal)+1;
    }

    timer.textContent=`${minVal}:00`;

    event.target.classList.add('addTimeStyle');
    
    clearInterval(strtInterval);
    startBtn.textContent='Start';

    secVal=60;
    secCount=0;

}


addTime.addEventListener('click',addTimeHandler)


// ..................left Side/ task Part....................

// Load tasks from localStorage
let addTaskArr=[];
let completedTaskArr=[];

let taskBody=el('taskBody');

let pendingTaskBtn=el('pendingTaskBtn')
let CompletedTaskBtn=el('CompletedTaskBtn')

let addTask=el('addTask');
let leftBody=el('leftBody');
let taskForm=el('taskForm');

let deleteTask;
let deleteTaskBtn;

let taskInputVal;

const savedPending = localStorage.getItem('pendingTasks');
addTaskArr = savedPending ? JSON.parse(savedPending) : [];

const savedCompleted = localStorage.getItem('completedTasks');
completedTaskArr = savedCompleted ? JSON.parse(savedCompleted) : [];


addNewNotes();


addTask.addEventListener('click',addTaskHandler)

function addTaskHandler(){
    leftBody.classList.add('hidden')
    taskForm.classList.remove('hidden')
}

let addTaskBtn = el('addTaskBtn');
let closeBtn= el('closeBtn');

addTaskBtn.addEventListener('click',addTaskBtnHandler)

let taskInput=el('taskInput');
// let dateInput = el('dateInput');
let taskIndex=0;

console.log('task input value is::',taskInput.value);

function addTaskBtnHandler(event){

    console.log('inside add task handler!!');
    console.log('task input value inside the function is::',taskInput.value);

    taskInputVal=taskInput.value;
    dateInputVal=new Date();
    dateInputVal=dateInputVal.toLocaleDateString();

    if((taskInput.value!='' ||event.key==='Enter' ) ){
        addTaskArr.push({taskIndex,taskInputVal,dateInputVal});
        localStorage.setItem('pendingTasks', JSON.stringify(addTaskArr));
    }else{
        console.log('alert');
        alert('Please add Task and Date')
        if (taskInput.value === '') {
        taskInput.focus();
        } 
        taskForm.classList.remove('hidden')
        return;
    }

    taskInput.value='';
    taskIndex++;
    // console.log(addTaskArr)
    console.log('done clicked!!');
    addNewNotes()
    updateTaskSelection();
    // addTaskArr.splice(taskIndex,1);
    // taskIndex--;
    console.log('taskindex in addTassk',taskIndex);
    console.log('array is ::',addTaskArr);
    leftBody.classList.add('hidden')
    // taskForm.classList.add('hidden')

}


let leftBodyParent=el('leftBodyParent')
// closeBtn.addEventListener('click',closeBtnHandler);


function addNewNotes(){
    // leftBodyParent.innerHTML='';
    // leftBody.style.display = '';
    taskBody.innerHTML = '';
    pendingTaskBtn.classList.add('btn');
    CompletedTaskBtn.classList.remove('btn');
    leftBody.classList.remove('leftBodyComplete');


    if (addTaskArr.length <= 0) {
        leftBody.classList.remove('hidden');
        taskForm.classList.add('hidden');
    } else {
        leftBody.classList.add('hidden');
        taskForm.classList.remove('hidden');
    }

    addTaskArr.forEach((element,index)=>{  
        let taskDiv= document.createElement('div');
        taskDiv.classList.add('tasks');

        let taskName= document.createElement('div');
        taskName.textContent=element.taskInputVal;
        taskName.classList.add('taskName')
        taskDiv.appendChild(taskName);

        let taskDate=document.createElement('div');
        taskDate.textContent=element.dateInputVal;
        taskDate.classList.add('taskDate')
        taskDiv.appendChild(taskDate);

        deleteTask=document.createElement('div');
        deleteTask.classList.add('deleteTask');
        deleteTask.innerHTML='<i class="fa-solid fa-trash"></i>';
        // deleteTask.setAttribute('id','deleteTaskBtn')
        // console.log('addtaskarr length in addNewNotes  before',addTaskArr.length);
        // console.log('the array::',addTaskArr)        


        deleteTask.addEventListener('click',(value)=>{
            console.log('delete clicked!!!');
            if(completedTaskArr.length>=8){
                completedTaskArr.shift();
                completedTaskArr.push(addTaskArr[index]);
            }else{
                if(addTaskArr[index]){
                    completedTaskArr.push(addTaskArr[index]);
                }
            }

            addTaskArr.splice(index,1);
            console.log('addTaskArr.length',addTaskArr.length);

            localStorage.setItem('pendingTasks', JSON.stringify(addTaskArr));
            localStorage.setItem('completedTasks', JSON.stringify(completedTaskArr));

            if(addTaskArr.length<=0){
                // addTaskArr.length=0;
                leftBody.classList.remove('hidden')
                taskForm.classList.add('hidden')
            }
            taskWrapper.classList.add('hidden')
            addNewNotes()
        })

        let taskWrapper=document.createElement('div');
        taskWrapper.classList.add('taskWrapper');
        
        taskWrapper.appendChild(taskDiv);
        taskWrapper.appendChild(deleteTask);

        taskBody.appendChild(taskWrapper);
     
    })
    updateTaskSelection()
 
}
// localStorage.setItem('pendingTasks', JSON.stringify(addTaskArr));
// localStorage.setItem('completedTasks', JSON.stringify(completedTaskArr));

function updateTaskSelection(){
    console.log('taskSelectionHandler slicked!!')
    taskSelection.innerHTML = '';

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Task';
    defaultOption.selected = true;
    defaultOption.disabled = true;
    taskSelection.appendChild(defaultOption);

    
    addTaskArr.forEach((element,index)=>{
        const taskoption=document.createElement('option')
        taskoption.value=index
        
        let text = element.taskInputVal;
        if (text.length > 20) {
            text = text.substring(0, 17) + '...';
        }
        // console.log("text::=",text);

        taskoption.textContent=text
        taskSelection.appendChild(taskoption);
        // taskSelection.options=element;
        // console.log('taskSelection::',taskSelection);
    })


}

taskSelection.addEventListener('change',function(){
    const selectedIndex=taskSelection.value;
})


// .................delete Task..............

CompletedTaskBtn.addEventListener('click',CompletedTaskBtnHandler);
pendingTaskBtn.addEventListener('click', addNewNotes);


function CompletedTaskBtnHandler(){
    console.log('complete task clicked!!');

    // leftBody.classList.add('leftBodyComplete');

    leftBody.classList.add('hidden')
    taskBody.innerHTML = '';
    pendingTaskBtn.classList.remove('btn');
    CompletedTaskBtn.classList.add('btn');

    completedTaskArr.forEach((element,index)=>{  
        if (!element || !element.taskInputVal) return;

        dateInputVal=new Date();
        dateInputVal=dateInputVal.toLocaleDateString();

        let taskDiv= document.createElement('div');
        taskDiv.classList.add('tasks');

        let taskName= document.createElement('div');
        taskName.textContent=element.taskInputVal;
        taskName.classList.add('taskName')
        taskDiv.appendChild(taskName);

        let taskDate=document.createElement('div');
        taskDate.textContent=element.dateInputVal;
        taskDate.classList.add('taskDate')
        taskDiv.appendChild(taskDate);

        let taskWrapper=document.createElement('div');
        taskWrapper.classList.add('taskWrapper');
        
        taskWrapper.appendChild(taskDiv);
        taskBody.appendChild(taskWrapper);
     
    })
}

console.log('taskSelection::',taskSelection.options);

taskSelection=el('taskSelection')








// localStorage.clear();
