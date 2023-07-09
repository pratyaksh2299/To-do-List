module.exports.getDate=getDate;
function getDate()
{
var today=new Date();
   
var current_date={
    weekday:'long',year:'numeric',month:'long',day:'numeric'
}
var day=today.toLocaleDateString("en-us",current_date);
return day;
}
module.exports.getDay=getDay;
function getDay()
{
var today=new Date();
   
var current_date={
    weekday:'long'
}
var day=today.toLocaleDateString("en-us",current_date);
return day;
}