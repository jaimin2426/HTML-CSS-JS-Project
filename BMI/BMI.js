const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = (document.querySelector('#results'))

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give valid height! ${height} not valid`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give valid weight! ${weight} not valid`;
    }else{
        const bmi = (weight / ((height*weight)/10000)).toFixed(2);
        if(bmi < 18.6){
            results.innerHTML = `<span> Under Weight ${bmi}</span>`;
        }else if(bmi >= 18.6 && bmi < 24.9){
            results.innerHTML = `<span> Normal Range ${bmi}</span>`;
        }else{
            results.innerHTML = `<span> OverWeight ${bmi}</span>` ;
        }
    }

    
    
    
}) 