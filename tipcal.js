

function Cal(){ 
    let Bill =( documentquerySelector("#Bill").value);
let percent = (document.querySelector('#percentage').value);
let person = ( document.querySelector("#person").value); 

    
    console.log(Bill,percent,person)
    var Tip = (Bill*percent)/person;
    console.log(Tip,'TIP CAL')
    document.getElementById("amount").innerText=(Tip);
}