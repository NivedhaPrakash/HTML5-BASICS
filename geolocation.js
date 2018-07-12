var g = document.getElementById("geo")
getCurrentLocation = function(){
    navigator.geolocation.getCurrentPosition(SuccessfullyGotLoacation,FailureInLocation)
}
function SuccessfullyGotLoacation(location) {
    var lat=location.coords.latitude
    var log=location.coords.longitude
    g.innerHTML=lat + ","+ log
}
function FailureInLocation(){
    g.innerHTML="Sorry, No Access To GeoLocation"
}