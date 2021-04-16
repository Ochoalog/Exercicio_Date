 const msg = document.querySelector('#msg')
const date = new Date();
const day = getDaysWeek(date.getDay());
const hour = date.getHours();
const min = date.getMinutes();
const month = date.getMonth();

const year = date.getFullYear();
const dayMonth = date.getDate()

const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"];

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}
msg.innerHTML = msg.innerHTML = `${day}, ${dayMonth} de ${months[month]} de ${year} ${zeroAEsquerda(hour)}:${zeroAEsquerda(min)}`

function getDaysWeek(date) {
    let dayWeek;

    switch (date) {
        case 0:
            dayWeek = "Domingo";
            return dayWeek;
        case 1:
            dayWeek = "Segunda-Feira";
            return dayWeek;
        case 2:
            dayWeek = "Terça-Feira";
            return dayWeek;
        case 3:
            dayWeek = "Quarta-Feira";
            return dayWeek;
        case 4:
            dayWeek = "Quinta-Feira"
            return dayWeek;
        case 5:
            dayWeek = "Sexta-Feira"
            return dayWeek;
        case 6:
            dayWeek = "Sábado"
            return dayWeek;
    }
} 

/*
const msg = document.querySelector('#msg')
const date = new Intl.DateTimeFormat(date).format
msg.innerHTML = date.DateTimeFormat();
*/