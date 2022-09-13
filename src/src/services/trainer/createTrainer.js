const { createTrainer } = require("../../dataAccess/trainer");
const createTrainerService = async (req, res) => {
  const { body } = req;
  console.log(body);
  const trainer = await createTrainer(body);
  return { success: true, message: "Trainer was created successfully", trainer };
};

module.exports = createTrainerService;
