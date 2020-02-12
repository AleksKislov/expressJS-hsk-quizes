
let view = {

    //display random answer options including 1 correct answer
    displayOptions(objArr, questionsArr) {
        
        const formControls = objArr.getElementsByClassName('form-control')
        const inputGroupText = objArr.getElementsByClassName('input-group-text')
        const questionBank = questionsArr.map(e => e.chinese)

        for(let i= 0; i < formControls.length; i++) {

            formControls[i].innerHTML = '<option>Выберите правильный вариант</option>'

            //grab innerText of question
            let question = inputGroupText[i].innerHTML
            let rightIndex = questionBank.indexOf(question)

            //create arr for options and put right answer in
            let options = []
            options.push(questionsArr[rightIndex].translation)

            //put other 4 options in
            for (let j=1; j < 5; j++) {
                let randInd = Math.trunc(Math.random() * questionsArr.length)

                if(randInd !== rightIndex) {
                    options.push(questionsArr[randInd].translation)
                }
            }

            model.shuffle(options)

            for(let k=0; k < options.length; k++) {
                let elem = document.createElement('option')
                elem.innerHTML = options[k]
                formControls[i].appendChild(elem)
            }

        }
    },

    // display random questions for chinese characters
    displayQuestions(objArr, questionsArr) {
        const inputGroupText = objArr.getElementsByClassName('input-group-text')

        for(let i=0; i < inputGroupText.length; i++) {

            inputGroupText[i].innerHTML = questionsArr[Math.trunc(Math.random() * questionsArr.length)].chinese

            //refresh its color
            inputGroupText[i].style.backgroundColor = '#f0f0f0'
            inputGroupText[i].style.color = '#555'
            inputGroupText[i].style.borderColor = '#ced4da'
        }
    },

    // display random questions for pinyin
    displayPinyinQuestions(objArr, questionsArr) {
        const inputGroupText = objArr.getElementsByClassName('input-group-text')

        for(let i=0; i < inputGroupText.length; i++) {

            inputGroupText[i].innerHTML = questionsArr[Math.trunc(Math.random() * questionsArr.length)].pinyin

            //refresh its color
            inputGroupText[i].style.backgroundColor = '#f0f0f0'
            inputGroupText[i].style.color = '#555'
            inputGroupText[i].style.borderColor = '#ced4da'
        }
    },

    displayPinyinOptions(objArr, questionsArr) {
        
        const formControls = objArr.getElementsByClassName('form-control')
        const inputGroupText = objArr.getElementsByClassName('input-group-text')
        const questionBank = questionsArr.map(e => e.pinyin)

        for(let i= 0; i < formControls.length; i++) {

            formControls[i].innerHTML = '<option>Выберите правильный вариант</option>'

            //grab innerText of question
            let question = inputGroupText[i].innerHTML
            let rightIndex = questionBank.indexOf(question)

            //create arr for options and put right answer in
            let options = []
            options.push(questionsArr[rightIndex].translation)

            //put other 4 options in
            for (let j=1; j < 5; j++) {
                let randInd = Math.trunc(Math.random() * questionsArr.length)

                if(randInd !== rightIndex) {
                    options.push(questionsArr[randInd].translation)
                }
            }

            model.shuffle(options)

            for(let k=0; k < options.length; k++) {
                let elem = document.createElement('option')
                elem.innerHTML = options[k]
                formControls[i].appendChild(elem)
            }

        }
    },

    displayAudioQuestionsAndOptions(objArr, questionsArr) {
        const audioButtons = objArr.getElementsByClassName('btn-secondary')
        const formControls = objArr.getElementsByClassName('form-control')

        model.audioAnswers = []
        let answers = []

        for(let i=0; i < audioButtons.length; i++) {
            let randInd = (Math.trunc(Math.random() * questionsArr.length))
            answers.push(randInd)

            //add random audio to buttons
            audioButtons[i].addEventListener('click', () => {
                const audio = new Audio('audio/'+ level + '/' + randInd + '.mp3')
                audio.play();
            })

            //refresh its color
            audioButtons[i].style.backgroundColor = '#f0f0f0'
            audioButtons[i].style.color = '#555'
            audioButtons[i].style.borderColor = '#ced4da'
        }

        model.audioAnswers = answers

        //add options
        for(let i= 0; i < formControls.length; i++) {

            formControls[i].innerHTML = '<option>Выберите правильный вариант</option>'

            //right index 
            let rightIndex = parseInt(answers[i])

            //create arr for options and put right answer in
            let options = []
            options.push(questionsArr[rightIndex].translation)

            //put other 4 options in
            for (let j=1; j < 5; j++) {
                let randIndex = Math.trunc(Math.random() * questionsArr.length)

                if(randIndex !== rightIndex) {
                    options.push(questionsArr[randIndex].translation)
                }
            }

            model.shuffle(options)

            for(let k=0; k < options.length; k++) {
                let elem = document.createElement('option')
                elem.innerHTML = options[k]
                formControls[i].appendChild(elem)
            }

        }
    },

}

let model = {
    shuffle(arr) {

        for (let i=0; i < arr.length; i++) {
            let randInd = Math.trunc(Math.random() * arr.length)
            let temp = arr[i]
            arr[i] = arr[randInd]
            arr[randInd] = temp
        }

        return arr;
    },

    audioAnswers: []
}

const controller = {

    checkTranslate(objArr, questionsArr) {
        const inputGroupText = objArr.getElementsByClassName('input-group-text')
        const questionBank = questionsArr.map(e => e.chinese)
        const answerBank = questionsArr.map(e => e.translation)
        const formControls = objArr.getElementsByClassName('form-control')


        for(let i=0; i < inputGroupText.length; i++) {

            let correctInd = questionBank.indexOf(inputGroupText[i].innerHTML)
            let answer = formControls[i].options[formControls[i].selectedIndex].innerHTML
            let answerInd = answerBank.indexOf(answer)

            if(formControls[i].selectedIndex !== 0) {
                if(correctInd === answerInd) {
                    inputGroupText[i].style.backgroundColor = '#2bad7e'
                    inputGroupText[i].style.color = 'white'
                    inputGroupText[i].style.borderColor = '#2b8a67'
                } else {
                    inputGroupText[i].style.backgroundColor = '#c73636'
                    inputGroupText[i].style.color = 'white'
                    inputGroupText[i].style.borderColor = '#b02323'
                }
            }
        }
    },

    checkPinyin(objArr, questionsArr) {
        const inputGroupText = objArr.getElementsByClassName('input-group-text')
        const questionBank = questionsArr.map(e => e.pinyin)
        const answerBank = questionsArr.map(e => e.translation)
        const formControls = objArr.getElementsByClassName('form-control')


        for(let i=0; i < inputGroupText.length; i++) {

            let correctInd = questionBank.indexOf(inputGroupText[i].innerHTML)
            let answer = formControls[i].options[formControls[i].selectedIndex].innerHTML
            let answerInd = answerBank.indexOf(answer)

            if(formControls[i].selectedIndex !== 0) {
                if(correctInd === answerInd) {
                    inputGroupText[i].style.backgroundColor = '#2bad7e'
                    inputGroupText[i].style.color = 'white'
                    inputGroupText[i].style.borderColor = '#2b8a67'
                } else {
                    inputGroupText[i].style.backgroundColor = '#c73636'
                    inputGroupText[i].style.color = 'white'
                    inputGroupText[i].style.borderColor = '#b02323'
                }
            }
        }
    },

    checkAudio(objArr, questionsArr) {
        const answerBank = questionsArr.map(e => e.translation)
        const formControls = objArr.getElementsByClassName('form-control')
        const audioButtons = objArr.getElementsByClassName('btn-secondary')

        for(let i=0; i < model.audioAnswers.length; i++) {

            let correctInd = model.audioAnswers[i]
            let answer = formControls[i].options[formControls[i].selectedIndex].innerHTML
            let answerInd = answerBank.indexOf(answer)

            if(formControls[i].selectedIndex !== 0) {
                if(correctInd === answerInd) {
                    audioButtons[i].style.backgroundColor = '#2bad7e'
                    audioButtons[i].style.color = 'white'
                    audioButtons[i].style.borderColor = '#2b8a67'
                } else {
                    audioButtons[i].style.backgroundColor = '#c73636'
                    audioButtons[i].style.color = 'white'
                    audioButtons[i].style.borderColor = '#b02323'
                }
            }
        }
    }

}

init = () => {
    view.displayQuestions(translationDiv, json)
    view.displayOptions(translationDiv, json)

    view.displayPinyinQuestions(pinyinDiv, json)
    view.displayPinyinOptions(pinyinDiv, json)

    view.displayAudioQuestionsAndOptions(audioDiv, json)
}

window.addEventListener('load', init)

const translationDiv = document.querySelector('#translation')
const trasnlationButton = document.querySelector('#translationButton')
trasnlationButton.addEventListener('click', () => {
    view.displayQuestions(translationDiv, json)
    view.displayOptions(translationDiv, json)
})

const trasnlationCheckButton = document.querySelector('#translationCheck')
trasnlationCheckButton.addEventListener('click', () => {
    controller.checkTranslate(translationDiv, json)
})

const pinyinDiv = document.querySelector('#pinyin')
const pinyinButton = document.querySelector('#pinyinButton')
pinyinButton.addEventListener('click', () => {
    view.displayPinyinQuestions(pinyinDiv, json)
    view.displayPinyinOptions(pinyinDiv, json)
})

const pinyinCheckButton = document.querySelector('#pinyinCheck')
pinyinCheckButton.addEventListener('click', () => {
    controller.checkPinyin(pinyinDiv, json)
})

const audioDiv = document.querySelector('#audio')
const audioButton = document.querySelector('#audioButton')
audioButton.addEventListener('click', () => {
    history.go(0)
})

const audioCheckButton = document.querySelector('#audioCheck')
audioCheckButton.addEventListener('click', () => {
    controller.checkAudio(audioDiv, json)
})