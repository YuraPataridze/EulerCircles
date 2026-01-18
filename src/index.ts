// Находим HTML элементы инпутов
const array1HTML = document.querySelector('#Array1') as HTMLInputElement
const array2HTML = document.querySelector('#Array2') as HTMLInputElement

// Находим div куда потом нанесем ответ
const answerHTML = document.querySelector('.answer') as HTMLDivElement

// Главная функция
function eulerCircle() {
    // Получаем списки в виде строки, что ввел пользователь
    let array1 = array1HTML.value
    let array2 = array2HTML.value

    // Транслируем строки в массив
    let arriedArray1 = stringToArray(array1)
    let arriedArray2 = stringToArray(array2)

    // [1, 2, 3]/\[3, 4, 5] = 3 

    // Создаем массив, куда складываем уже видившие num
    let seenNums = []

    // Проходимся по array1
    for (let i of arriedArray1) {
        if (arriedArray2.includes(i)) {
            seenNums.push(i)
        }
    }
                    
    // Транслируем массив в строку, чтобы потом вывести пользователю
    const answer: string = arrayToString(seenNums)

    // Проверка если не удалось 
    if (!answer) {
        answerHTML.textContent = 'Failed to find'
        return
    }

    // Выводим пользователю ответ
    answerHTML.textContent = answer
}

// Массив в строку
function arrayToString(array: string[]): string {
    return array.join(', ')
}

// Строку в массив
function stringToArray(string: string): string[] {
    return string.split(', ')
}

// При клике
document.querySelector('button')?.addEventListener('click', eulerCircle)