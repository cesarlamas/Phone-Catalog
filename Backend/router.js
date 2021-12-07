const router = require('express').Router();

const phoneController = require('./controllers/controller.phone')

router.get("/phones", phoneController.getAllPhones)
router.post("/phones", phoneController.addPhone)
router.delete("/phones/:id", phoneController.deleteOne)

module.exports = router