const adviceNumber = document.querySelector('.advice__tag-number')
const adviceText = document.querySelector('.advice__text')
const button = document.querySelector('.advice__button')
const buttonImg = document.querySelector('.advice__button-img')
const URL = 'https://api.adviceslip.com/advice'

const diceRoll = () => {
	buttonImg.classList.add('animate')
	setTimeout(showAdvice, 1000)
}

async function showAdvice() {
	try {
		const res = await axios.get(URL)
		adviceNumber.textContent = res.data.slip.id
		adviceText.textContent = res.data.slip.advice
	} catch {
		console.error(`Something went wrong. Try again later.`)
	}

	buttonImg.classList.remove('animate')
}

button.addEventListener('click', diceRoll)
