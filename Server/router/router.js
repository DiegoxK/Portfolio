const express = require("express");

const {
  getAll,
  getById,
  deleteById,
  addData,
  editData,
} = require("../controller/basic-crud-controller");

const router = express.Router();

router.get("", getAll);
router.get("/:id", getById);
router.delete("/:id", deleteById);
router.post("", addData);
router.put("/:id", editData);

module.exports = router;
