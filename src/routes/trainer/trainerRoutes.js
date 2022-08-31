const routes = require('express').Router()
const getTrainers = require('../../services/trainer/getTrainers')
const createTrainer = require('../../services/trainer/createTrainer')
const getTrainerById = require('../../services/trainer/getTrainerById')


routes.get('/entrenador', async (req, res) => {
    const response = await getTrainers(req, res)
    res.json(response)
})

routes.get('/entrenador/:id', async (req, res) => {
    const response = await getTrainerById(req, res)
    res.json(response)
})

routes.post("/entrendaor", async (req, res) => {
    const response = await createTrainer(req, res)
    res.json(response)
})

module.exports = routes