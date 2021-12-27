// document.onclick = function (test){
//     console.log(test.target.id);
// }
//years
let submit = document.getElementById("submit")
let chooYEARS = document.getElementById("selectYears") ;


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
let  select = document.getElementById("2021") ;


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
        validatdata()
})  

// 
const validatdata = () => {
    const  optgroupValue = yearvalue.value;
    console.log(optgroupValue);
}
    // addEventListener()
