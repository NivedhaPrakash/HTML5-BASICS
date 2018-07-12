var counter =1

dragstartnow = function(e)
{
/*e.preventDefault()*/
e.dataTransfer.setData("sourceid",e.target.id)
console.log("Event started" + counter)
counter++
}

dragstart = function(e)
    {
    e.preventDefault()
    console.log("drag over started")
    }

dragstop = function(e)
        {
       console.log("Event dropped")
        var t=e.dataTransfer.getData("sourceid")
        var temp = document.getElementById(t)
        e.target.appendChild(temp)
        }