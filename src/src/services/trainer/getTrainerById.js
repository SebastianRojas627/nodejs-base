const { findById } = require("../../dataAccess/trainer");
const getTrainerByIdService = async (req, res) => {
  const { params } = req;
  const trainer = await findById(params);
  return { success: true, message: "Get Trainer", trainer };
};

module.exports = getTrainerByIdService;
