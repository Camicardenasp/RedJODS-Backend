const router = require("express").Router();
const userController = require("../../controllers/userController"); 

router
    .get("/", userController.getAllUsers)
    .post("/", userController.createNewUser)
    .put("/:id", userController.updateOneUser)
    .delete("/:id", userController.deleteOneUser);

module.exports = router;