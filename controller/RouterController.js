const ContactSchema = require("../schema/ContactSchema");

exports.getContacts = (req, res) => {
  ContactSchema.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: "you cannot get find data",
      });
    });
};

exports.getContactById = (req, res) => {
  ContactSchema.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: "you cannot get findOne data",
      });
    });
};

exports.addContact = (req, res) => {
  let { email, phone, name } = req.body;
  let contact = new ContactSchema({
    email,
    phone,
    name,
  });
  contact
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};

exports.updateContact = (req, res) => {
  const { name, email, phone } = req.body;
  const { id } = req.params;
  ContactSchema.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        name,
        email,
        phone,
      },
    },
    { new: true }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
};

exports.deleteContact = (req, res) => {
  ContactSchema.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: err.message,
      });
    });
};
