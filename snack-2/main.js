const squadre = [
    {nome : "Napoli", puntiFatti : 0, falliSubiti: 0},
    {nome : "Milan", puntiFatti : 0, falliSubiti: 0},
    {nome : "Juve", puntiFatti : 0, falliSubiti: 0},
    {nome : "Venezia", puntiFatti : 0, falliSubiti: 0},
    {nome : "Roma", puntiFatti : 0, falliSubiti: 0},
    {nome : "Verona", puntiFatti : 0, falliSubiti: 0},
]

function getRandomInt (min, max){
    return Math.floor( Math.random() * (max - min + 1) + min);
}