var typingTexts = ['không phải trà chanh C2', ' là C2!', 'là những đứa con của thần bỉn!!', 'là đàn em của đại kaa thầy Phước!!!', 'sẽ khum phụ lòng đại ka!!!!', 'sẽ đậu đại học!!!!!']

const textChange = document.querySelector('.type-text')

var textIndex = 0;
var textArrayIndex = 0;

var typingDelay = 200
var eraseDelay = 100

// typing
function type() {
    if (textIndex < typingTexts[textArrayIndex].length) {

        textChange.textContent += typingTexts[textArrayIndex].charAt(textIndex)
        textIndex++
        cursorStop()
        setTimeout(type, typingDelay)
    } else {
        cursorPlay()
        setTimeout(erase, 2000)
    }

}

function erase() {
    if (textIndex > 0) {
        textChange.textContent = typingTexts[textArrayIndex].substring(0, textIndex - 1)
        textIndex--
        cursorStop()
        setTimeout(erase, eraseDelay)
    } else {
        textArrayIndex++
        if (textArrayIndex >= typingTexts.length)
            textArrayIndex = 0
        setTimeout(type, typingDelay)
    }
}
var cursor = document.querySelector('.cursor')
function cursorStop() {
    cursor.classList.remove('animation')
}
function cursorPlay() {
    cursor.classList.add('animation')
}
type()
///////////////////////////////////////
