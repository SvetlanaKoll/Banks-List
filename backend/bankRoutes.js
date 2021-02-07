const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const bankController = require("./bankController");
=======
const bankController = require('./bankController')

>>>>>>> dd805b7c73001a4f4757df3ba28085043a491292

router
  .route("/banks")
  .get(bankController.getAllBanks)
  .post(bankController.createBank);

router
  .route("/banks/:id")
  .patch(bankController.updateBank)
<<<<<<< HEAD
  .get(bankController.getBank)
  .delete(bankController.deleteBank);

router.route("/banks/chosen/").get(bankController.getBankByName);
=======
  .get(bankController.getBank);
// .delete(tourController.deleteTour);

>>>>>>> dd805b7c73001a4f4757df3ba28085043a491292
module.exports = router;
