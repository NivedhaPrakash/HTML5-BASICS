var canva=document.getElementById("can1")

var canv=canva.getContext("2d")
canv.beginPath()
/*canv.moveTo(0,0)
canv.lineTo(400,400)
canv.stroke();
canv.strokeText('nive',0,0)*/
canv.arc(200,200,150,0,360,false)
canv.moveTo(160,150)

canv.arc(150,150,10,0,360,false)
canv.moveTo(260,150)

canv.arc(250,150,10,0,360,false)
canv.moveTo(200,150)

canv.lineTo(200,250)
//canv.stroke()
canv.moveTo(300,220)

canv.arc(200,220,100,0,Math.PI,false)
canv.stroke()