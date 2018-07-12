var d=document.getElementById("box")
var count=1
m=function(){
    if(localStorage.getItem("t")===null)
    localStorage.getItem("t",count)
    else
    var v =localStorage.getItem("t")
    var l=d.value
    localStorage.setItem("task"+count,l)
    d.value=""
    localStorage.setItem("t",++count)
    loadtask()
}
function loadtask(){
    console.log("loading task in view")
    var containter=document.getElementById("task2")
    containter.innerHTML=""
    var newul=document.createElement("ol")
    document.getElementById("task2").appendChild(newul)
    var maxcounter= localStorage.getItem("t")
    for(var i=1;i<maxcounter;i++){
        var newli=document.createElement("li")
        var currenttask=localStorage.getItem("task"+i)
        newli.innerHTML=currenttask
        newul.appendChild(newli)
    } 
}