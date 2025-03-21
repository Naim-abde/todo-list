var lists = [
    {
        "name" :"talk to me",
        "time" : "21/03/2025",
        "done" : false
    },
    {
        "name" :"talk to mom",
        "time" : "21/03/2025",
        "done" : false
    },
    {
        "name" :"talk to dad",
        "time" : "21/03/2025",
        "done" : false
    },
]
  
 
 function turnlist(){
    document.getElementById('cards').innerHTML = ""

 
     for(list of lists) {
        document.getElementById("cards").innerHTML += `<div class="card"> 
                        <div class="write"> 
                            <h3 id="name">${list.name}</h3>
                            <i class="fa-regular fa-calendar-days" style="margin-top: 5px;font-size: small; margin-right: 5px;"></i><span id="time">${list.time}</span>
                        </div>
                        <div class="icon">
                            <i class="fa-solid fa-trash" style="background-color: red; color: white;"></i>           
                            <i class="fa-solid fa-check" style="background-color: greenyellow; color: white;"></i>
                            <i class="fa-solid fa-pen" style="background-color: rgb(47, 127, 255); color: white;"></i>
                        </div>
                    </div>`
    
    }            
     

} 
turnlist()  
document.getElementById("plus").addEventListener("click",function(){
    var  text = prompt("enter text")
    var newTask = {
        "name":text,
        "time":"21/15/2002",
        "done":false,
    }
    lists.push(newTask)
    turnlist()
})
 

 
  
     