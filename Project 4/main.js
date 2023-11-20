window.addEventListener('DOMContentLoaded', () => {
    const addbutton = document.getElementById("addbutton");
    const taskList = document.getElementById("tasklist");
    const cleartasks = document.getElementById("clear");
    const taskentry = document.getElementById("taskentry");
    const maincontainer = document.getElementById("main-box");
    const cdate = document.getElementById("date");
    const date = new Date();
    let day = String(date.getDate()).padStart(2,'0');
    let month = String(date.getMonth()+1).padStart(2,"0");
    let year = date.getFullYear();
    cdate.innerHTML = month + "-" + day + "-" + year;
    
    function addtask(){
        if (taskentry.value!=""){
            var listwrap = document.createElement("li");
            var checkbox = document.createElement("input");
            var label = document.createElement("label");
            checkbox.setAttribute("name",taskentry.value);
            checkbox.setAttribute("type","checkbox");
            label.setAttribute("for",taskentry.value);
            label.innerHTML = taskentry.value;
            checkbox.setAttribute("class","task");
            label.setAttribute("class","task");
            listwrap.setAttribute("class","task");

            listwrap.appendChild(checkbox);
            listwrap.appendChild(label);

            taskList.appendChild(listwrap);
            taskentry.value="";
        }
    }
    function clearall(){
        const alltasks = document.querySelectorAll('.task');
        alltasks.forEach( todo =>{
            todo.remove();
        })
    }
    cleartasks.addEventListener("click",clearall);
    addbutton.addEventListener("click",addtask);
    taskentry.addEventListener("keypress",function(event){
        if ( event.key == 'Enter' ){
            addtask();
        }
    });
});