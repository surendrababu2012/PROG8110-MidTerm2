import Tax from "./Tax.js";

    let amount = document.getElementById("income");
    amount.addEventListener("keypress", function (evt) {
        if (evt.key === "Enter") {
            evt.preventDefault();
            const deduct = document.getElementById('deduct');
            deduct.focus()
        }
    });

    let alreadyTax = document.getElementById("deduct");
    alreadyTax.addEventListener("keypress", function (evt) {
        if (evt.key === "Enter") {
            evt.preventDefault();
            const calculate = document.getElementById('calculate');
            calculate.click();
            $("#calculate").click();
        }
    });
    let btn = document.getElementById('calculate');
    btn.addEventListener('click', (event)=>{
        event.preventDefault();

        const amount = document.getElementById('income').value;
        const deduct = document.getElementById('deduct').value
        const incomeSpace = document.getElementById('Amo')

        ;        
        const oHst = new Tax();
        incomeSpace.innerHTML = amount;

        const incomeAmount = document.getElementById('Amo');

        incomeAmount.innerHTML = amount;

        //print values
        var values = oHst.calculate(amount, deduct);
        const ontarioTax = document.getElementById('OntarioTax');
        ontarioTax.innerHTML = values[0];
        const federalTax = document.getElementById('FederalTax');
        federalTax.innerHTML = values[1];
        const totalTax = document.getElementById('TotalTax');
        totalTax.innerHTML = parseFloat(values[0]) + parseFloat(values[1]);
        const owingTax = document.getElementById('OwingTax')
        owingTax.innerHTML = parseFloat(amount) - ( parseFloat(values[0]) + parseFloat(values[1]));


    })
    
// });

