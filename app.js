const ExplicitPrevention = function (event) {
  var keyPressed = event.keyCode || event.which;
  if (keyPressed === 13) {
      addtask();
      // alert("Test: You pressed the Enter key!!");
    event.preventDefault();
  }
}

let arr=[];
function addtask(){
  let title = document.getElementById('title').value;
  if (title==""){
    alert("Field must not be empty");
  }
  else{
    arr.push(title);
  let c1=document.getElementById('description');
  c1.value=arr.join("\n");
  
  document.getElementById("title").value="";
  }
  
}



document.getElementById('form-Task').addEventListener('submit', saveTask);


 
// Save new To-Do
function saveTask(e) {
  arr=[];
 
  // let title = document.getElementById('title').value;
  let des = document.getElementById('description').value;
  let k=des.split("\n");
  let description=k.join("<br>");
  
  let dt=document.getElementById('dtime').value;
 
 
  let task = {
    dt,
    // title,
    description
  };
 
  if (localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
 
  getTasks();
 
  // Reset form-Task
  document.getElementById('form-Task').reset();
  e.preventDefault();
  document.getElementById("title").focus();
 
}

let  ck=false; 

// Delete To-Do 
function deleteTask(description) {
 
  window.location.reload();
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].description == description) {
      let dt=tasks[i].dt;
      let description=tasks[i].description;
      


      let task33 = {
        dt,description
      };
     
      if (localStorage.getItem('taskscomp') === null) {
        let tasks4 = [];
        tasks4.push(task33);
        localStorage.setItem('taskscomp', JSON.stringify(tasks4));
      } else {
        let tasks4 = JSON.parse(localStorage.getItem('taskscomp'));
        tasks4.push(task33);
        localStorage.setItem('taskscomp', JSON.stringify(tasks4));
      }
      tasks.splice(i, 1);
    }
    
  }
 
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
  
}
 
// Show To-Do List
function getTasks() {
 
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  
    
   tasksView.innerHTML = '';
 
  for (let i = 0; i < tasks.length; i++) {
    let dt=tasks[i].dt;
    // let title = tasks[i].title;
    let description = tasks[i].description;
 
    tasksView.innerHTML +=
      `<div class="card mb-3" id="cd1">
        <div class="card-body">
        <div class="row2" id="df" >
         
          <div class="col-sm-3 text-left dt1" id="dss">
          <br>
            <p>${dt}</p>
          </div>
  
          <div class="col-sm-7 text-left ds1">
            <p>${description}</p>
          </div>
       
          <div class="col-sm-4 text-right">
           <button onclick="deleteTask('${description}')" class="btn3 btn-danger ml-5"> Complete  </button>
          
          </div>
          
        </div>  
        <div id="lnbk"><p></p></div>
       </div>
       
</div>
`;
  }

}
getTasks();




// completed task


function getTasks2() {
  

 
  let tasks = JSON.parse(localStorage.getItem('taskscomp'));
  let tasksView = document.getElementById('tasksc');
  
    
   tasksView.innerHTML = '';
 
  for (let i = 0; i < tasks.length; i++) {
    let dt=tasks[i].dt;
    // let title = tasks[i].title;
    let description = tasks[i].description;
 
    tasksView.innerHTML +=
      `<div class="card2 mb-3" id="cd1">
        <div class="card-body">
        <div class="row2" id="df" >
         
          <div class="col-sm-3 text-left dt12" id="dss">
          <br>
            <p>${dt}</p>
          </div>
  
          <div class="col-sm-7 text-left ds12">
            <p>${description}</p>
          </div>
       
          <div class="col-sm-2 text-right2">
           <button onclick="deleteTask2('${description}')" class="btn4 btn-danger ml-5"> <img src="giphy7.gif" height="45px">Delete </button>
          </div>
          
        </div>  
        <div id="lnbk"><p></p></div>
       </div>
      </div>`;
  }
  
  
}




// Delete To-Do 
function deleteTask2(description) {
 
  let tasks = JSON.parse(localStorage.getItem('taskscomp'));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].description == description) {
      
      tasks.splice(i, 1);
    }
  }
 
  localStorage.setItem('taskscomp', JSON.stringify(tasks));
  getTasks2();
}

  
 

 

  
 

 
