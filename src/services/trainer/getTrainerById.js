const { findById } = require("../../dataAccess/trainer")
const getTrainerById = async (req, res) => {
    const { params } = req
    const trainer = await findById(params)
    return { success: true, message: "Get trainer", trainer}
}

module.exports = getTrainerById