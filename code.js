// 1
// let num = prompt('pass number')
// if (num === '1') {
//     document.write('<p>Большой палец</p>')
// } else if (num === '2') {
//     document.write('<p>Указательный палец</p>')
// } else if (num === '3') {
//     document.write('<p>Средний палец</p>')
// } else if (num === '4') {
//     document.write('<p>Безымянный палец</p>')
// } else if (num === '5') {
//     document.write('<p>Мезинец</p>')
// } else {
//     document.write('<p>Error!</p>')
// }

// 2
// let mut = prompt('Введите первое число')
// let mot = prompt('Введите второе число')
// if (mut % mot == 0) {
//     document.write(`<p>Ввод ${mut} ${mot}</p>`)
//     document.write(`<p>Делится , остаток: ${mut % mot}</p>`)
// } else {
//     document.write(`<p>Не делится, остаток: ${mut % mot}</p>`)
//     document.write(`<p>Ввод ${mut} ${mot}</p>`)

// }

// 3
// let mut = +(prompt('Введите первое число'))
// let mot = +(prompt('Введите первое число'))
// if (mut + mot) {
//     document.write(`<p>Вывод: Сумма:${ mut  +  mot }</p>`)
// } else {
//     document.write('<p>Ошибка !</p>')
// }

// 4
// let mut = +(prompt('Введите первое число'))
// let mot = +(prompt('Введите вторе'))
// let met = +(prompt('И третье'))
// if (mut % 5 == 0) {
//     document.write(`<p>${mut}</p>`)
// }
// if (mot % 5 == 0) {
//     document.write(`<p>${mot}</p>`)
// }
// if (met % 5 == 0) {
//     document.write(`<p>${met}</p>`)
// }

// 5
mut1 = +(prompt('Введите первое'))
mut2 = +(prompt('Введите второе'))
mut3 = +(prompt('Введите третье'))
mut4 = +(prompt('Введите четветрое'))
mut5 = 0
mut6 = 0
if (mut1 % 2 == 0) {
    mut5 += mut1
} else {
    mut1 += mut6
}
if (mut2 % 2 == 0) {
    mut5 += mut2
} else {
    mut2 += mut6
}
if (mut3 % 2 == 0) {
    mut5 += mut3
} else {
    mut3 += mut6
}
if (mut4 % 2 == 0) {
    mut5 += mut4
} else {
    mut4 += mut6
}
document.write(`<p>Четные :${mut5}, Нечетные :${mut6}</p>`)