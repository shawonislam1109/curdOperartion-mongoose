const {
  addContact,
  updateContact,
  getContacts,
  getContactById,
  deleteContact,
} = require("../controller/RouterController");

const contactRouter = require("express").Router();

contactRouter.get("/", getContacts);
contactRouter.get("/:id", getContactById);
contactRouter.post("/", addContact);
contactRouter.patch("/:id", updateContact);
contactRouter.delete("/:id", deleteContact);

module.exports = contactRouter;
