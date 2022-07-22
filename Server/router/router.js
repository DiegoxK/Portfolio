const express = require("express");
const router = express.Router();

const {
  getAll,
  getOneByFilter,
  deleteById,
  addData,
  editData,
} = require("../controller/basic-crud-controller");

router.get("", getAll);
router.get("/:id", getOneByFilter);
router.delete("/:id", deleteById);
router.post("", addData);
router.put("/:id", editData);

module.exports = router;
