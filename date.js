//jshint esversion:6

console.log(module);
function getDate(){
let today = new Date();
let currDay = today.getDay();
let options = {
weekday:"long",
day:"numeric",
month:"long"
};

let day = today.toLocaleDateString("en-US",options);

return date;
}
