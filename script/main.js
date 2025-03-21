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

      let num = 0
     for(list of lists) {
         
        document.getElementById("cards").innerHTML += `<div class="card"> 
                        <div class="write"> 
                            <h3 id="name"  >${list.name}</h3>
                            <i class="fa-regular fa-calendar-days"   style="margin-top: 5px;font-size: small; margin-right: 5px;"></i><span id="time">${list.time}</span>
                        </div>
                        <div class="icon">
                            <i class="fa-solid fa-trash" onclick="delite(${num})" style="background-color: red; color: white;"></i>           
                            <i class="fa-solid fa-check" style="background-color: greenyellow; color: white;"></i>
                            <i class="fa-solid fa-pen" onclick='update(${num})' style="background-color: rgb(47, 127, 255); color: white;"></i>
                        </div>
                    </div>`
                    num++
    
    }            
     

} 
turnlist()  
document.getElementById("plus").addEventListener("click",function(){
    var  text = prompt("enter text")
    let now = new Date();
    let day = now.getDate();  
    let month = now.getMonth() + 1;  
    let year = now.getFullYear();  
    let date = day +"/"+  month  +"/"+year      

    var newTask = {
        "name":text,
        "time":date,
        "done":false,
    }
    lists.push(newTask)
    turnlist()

})
function delite(num){
    if(confirm("yes or no")){
        lists.splice(num,1)
        turnlist()
    }
    
    
 }
 function update(num){
    let newname = prompt('change name ',lists[num].name)
    let list = lists[num]
    list.name = newname
    let now = new Date();
    let day = now.getDate();  
    let month = now.getMonth() + 1;  
    let year = now.getFullYear();  
    let date = day +"/"+  month  +"/"+year
    list.time = day +"/"+  month  +"/"+year      
     turnlist()

 
 }
 

 
  
     