const generateBtn = document.getElementById('generate-btn')
const number = document.getElementById('number')

const randomNumberGenerator = () =>{
    let randomNumber = Math.floor(Math.random() * 10 + 1)

    number.innerText = randomNumber
}

generateBtn.addEventListener('click', randomNumberGenerator)


let btn = document.querySelector('.change')

let bgrcchanger = () =>{
    let colors = ['red', 'yellow', 'blue', 'green', 'black']
    let random = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[random]
}

setInterval(bgrcchanger, 3000)

btn.addEventListener('click', bgrcchanger)






