// document.onclick = function (test){
//     console.log(test.target.id);
// }
//years
let submit = document.getElementById("submit") ;
let chooYEARS = document.getElementById("selectYears") ;
let chooMOUNTH = document.getElementById("MOUNTH") ;
let chooDAYS = document.getElementById("DAYS") ;



function years(start , end) {
    
    document.write(`<optgroup label="years" id="chooYEARS">`)
    for (let i = start ; i <= end ; i++ ){
        document.write("<option value='" + i +"' "  + "id='" + i +"'> " + i + "</option>")
    }

    document.write(`</optgroup>`)
    

}
years(1900 , 2021)
let optgroup = document.getElementById("chooYEARS") ;
chooYEARS.appendChild(optgroup)
let  select = document.getElementById("2001") ;


select.setAttribute("selected" , "");


//days
let selectdays = document.getElementById("DAYS") ;

function dayes(start , end) {
    document.write(`<optgroup label="days" id="choodays">`)
        for(let i = start ; i <= end ; i++){
            document.write("<option value=" + i + ">" + i + "</option>")
        }
    document.write(`</optgroup>`)
    
}
dayes(1 , 31)
let choodays = document.getElementById("choodays") ;

selectdays.appendChild(choodays);

// save data


let yearvalue = document.querySelectorAll(".box select #chooMOUNTH option");



submit.addEventListener("click" , function(e){
        e.preventDefault() ;
        let date = new Date ( `${chooYEARS.value} , ${chooMOUNTH.value} , ${chooDAYS.value}`).getTime() ;
        let Defaultdate = new Date ().getTime() ;
        let birthDate = Defaultdate - date ; 
        let Years = Math.floor(birthDate * (3.16887646  * Math.pow(10 , -11)))
        let Months = Math.floor(birthDate * (3.80265176  * Math.pow(10 , -10)))
        let Weeks = Math.floor(birthDate * (1.65343915  * Math.pow(10 , -9)))
        let Days = Math.floor(birthDate * (1.15740741  * Math.pow(10 , -8)))
        let Hours = Math.floor(birthDate * (2.77777778  * Math.pow(10 , -7)))
        let Minutes = Math.floor(birthDate * (1.66666667 * Math.pow(10 , -5)))
        document.getElementById("spanYears").innerHTML = Years
        document.getElementById("spanMonths").innerHTML = Months
        document.getElementById("spanWeeks").innerHTML = Weeks
        document.getElementById("spanDays").innerHTML = Days
        document.getElementById("spanHours").innerHTML = Hours
        document.getElementById("spanMinutes").innerHTML = Minutes
        box2()
        
})  


function box2() {
    ele = document.getElementById("box2")
    ele.style.display = "flex"
    window.scrollTo({left:0 , top: ele.offsetTop + 250 ,behavior:"smooth"})
    
}