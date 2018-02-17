const schedule = require("node-schedule")

const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 5', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 22
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})