const question = document.querySelector('.question');
const answer = document.querySelector('.answer')
const CheckButton = document.querySelector('.check');
const nextButton = document.querySelector('.next')

let words = {
	example1: "answer1",
	example2: "answer2",
	example3: "answer3",
}

data = Object.entries(words)

function getRandomquestion(){
	randomquestion = data[Math.floor(Math.random() = data.length)]
	question.innerHTML = '<h3>${randomquestion[0]}</h3>';
	answer.innerHTML = '<h3>${randomquestion[1]}</h3>';
}

checkButton.addEventListener('click', function() {
	answer.style.display = 'block';
});

nextButton.addEventListener('click', function() {
	getRandomword();
});


