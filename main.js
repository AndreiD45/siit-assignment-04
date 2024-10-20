const result = document.querySelector(`#result span`);
console.log(result);

const record = document.querySelector(`#record span`)
console.log(record);

const btnElement = document.querySelectorAll(`button`);
console.log(btnElement);

for (let i = 0; i < 5; i++) {   
    btnElement[i].addEventListener(`click`, function(){
        console.log(`button was clicked`)
        result.textContent = Number(result.textContent) + btnValue();
    })
    
    function btnValue(){
        value = btnElement[i].textContent;
        value = Number(value);
        return value;
    }
}

btnElement[2].removeEventListener;
btnElement[2].addEventListener(`click`, function(){
    console.log(`button was clicked`)
    result.textContent = 0
})


for (let i = 0; i < 5; i++) {   
    btnElement[i].addEventListener(`click`, function(){
        console.log(`Last action recorded!`)
        record.textContent = btnElement[i].textContent
    })
}
