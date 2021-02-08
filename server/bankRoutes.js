const express = require("express");
const router = express.Router();
const bankController = require("./bankController");

router
  .route("/banks")
  .get(bankController.getAllBanks)
  .post(bankController.createBank);

router
  .route("/banks/:id")
  .patch(bankController.updateBank)
  .get(bankController.getBank)
  .delete(bankController.deleteBank);

router.route("/banks/chosen/").get(bankController.getBankByName);
module.exports = router;
