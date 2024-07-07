var housekeeper={
    yearOfExperience:12,
    name:"jane",
    CleaningRepertoire:["bathroom","lobby","bedroom"]
}

function housekeeper(yearsOfExperience,name,CleaningRepertoire){
    this.yearOfExperience=yearsOfExperience;
    this.name=name;
    this.CleaningRepertoire=CleaningRepertoire;
    this.clean =function(){
        alert("cleaning in progress");
    }
}
var housekeeper1=new housekeeper(9,"tom",["lobby","bedroom"]);
var housekeeper2=new housekeeper(14,"janet",["lobby","bedroom"]);
housekeeper1.clean();//enter 



function anotherAddEventListner(typeOfEvent,callback){
    //detect event code....
    var eventThatHappend={
        eventType:"keypress",
        key:"p",
        durationOfKeypress:2
    }
    if (eventThatHappend.eventType===typeOfEvent){
        callback(eventThatHappend);
    }
}
//enter in console
anotherAddEventListner("keypress",function(event){
    console.log(event);
});//enter

document.addEventListener("keypress",function(event){
    console.log(event);
});
//enter and it shows which key is press by keyevent i



    
