const form = document.querySelector('#form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)
    const result = document.querySelector('#result')

    if (weight < 0 || weight === '' || isNaN(weight)){
        result.innerHTML = 'Enter Valid Weight'
    }
    else if (height < 0 || height === '' || isNaN(height)){
        result.innerHTML = 'Enter Valid Height'
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if (bmi < 18.6) {
            result.innerHTML = `${bmi} <br> You are Underweight`
        }
        else if (bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `${bmi} <br> You are normal`
        }
        else {
            result.innerHTML = `${bmi} <br> You are OverWeight`
        }
    }
})