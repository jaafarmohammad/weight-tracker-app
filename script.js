const date=document.getElementById("date");
const weight=document.getElementById("weight");
const button=document.getElementById("button");
const output=document.getElementById("output");
const letters=/([A-Z a-z * & ^ % $ # @ ! _ + = : ; ' " , / ? | ])/;


//when button is clicked it stores the data locally.
//=====================================================================
button.addEventListener("click", ()=>{
    let key=date.value;
    let value=weight.value;

    if((key&&value)&&(!isNaN(weight))){
        
        localStorage.setItem(key,value);
        location.reload();
    }else{
        alert("Must input numbers")
    }
});
//prints the stored data to the output area.
//=====================================================================
for(let i=0;i<localStorage.length;i++){
    
    let key=localStorage.key(i);
    let value=localStorage.getItem(key);
     
    

    output.innerHTML+=`Date(${key}) Weight(${value}kg) <br>`;
}