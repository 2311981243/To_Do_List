var container=document.getElementById("container")
var task=document.getElementById("task");
var taskArray=[]
function addTask()
{
    var task_toBeDone=document.getElementById("task").value;

    var obj=
    {
        id: Date.now(),
        task:task_toBeDone,
        status:false
    }

    
    // setting the local storage
    taskArray.push(obj);
    var storage=JSON.stringify(taskArray);
    localStorage.setItem("task",storage);



    // Checking the input bar
   if(task_toBeDone=='')
    alert("Enter a Valid Task!");
    

   else
    // Creating Required Elements
    var holder=document.createElement("div");
    var content=document.createElement("p");

    content.id=obj.id;

    var remove=document.createElement("button");
    var done=document.createElement("button");

    // Assigning values to the elements that are created
    content.innerText=task_toBeDone;
    remove.innerText="❌";
    done.innerText="✔";

    //Now assigning all the contents into single div
    holder.appendChild(content)
    holder.appendChild(remove)
    holder.appendChild(done)


    // styling the holder
    holder.style.height="50px";
    holder.style.width="360px";
    holder.style.backgroundColor="gold"
    holder.style.display="flex"
    holder.style.marginLeft="10px"
    holder.style.marginTop="17px"


    // Giving styling to the buttons
    remove.style.backgroundColor="transparent"
    remove.style.border="transparent"
    remove.style.position="absolute"
    remove.style.marginLeft="330px"
    remove.style.marginTop="12px"


    done.style.backgroundColor="transparent"
    done.style.border="transparent"
    done.style.color="green"
    done.style.position="absolute"
    done.style.marginLeft="310px"
    done.style.marginTop="12px"


    console.log(content.id)
    // Appending them to the list
    container.appendChild(holder)



    // Cleaning the input bar
    task.value="";


    //to remove the task
    remove.addEventListener("click",function()
   {
    var list_oftask=JSON.parse(storage);
    list_oftask.forEach(function(value,index) {
        if(value.id==content.id)
        {
            list_oftask.splice(index, 1);
        }
        container.removeChild(holder)
        storage=JSON.stringify(list_oftask);
    });
    localStorage.setItem("task",storage);
   });

   // to mark the task to be done
   done.addEventListener("click",function()
{
    content.style.textDecoration="line-through";
    content.style.color="green"
})

}
