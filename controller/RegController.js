const Registration = require("../schema/RegisterSchema");

exports.addRegistration((req, res) => {
  const { name, number, picture } = req.body;
  const registrationData = new Registration({
    name,
    number,
    picture,
  });

  registrationData
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
});

exports.getRegistration((req, res) => {
  const { id } = req.params;
  Registration.find({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json({
        message: err.message,
      });
    });
});

exports.updateRegistration((req, res) => {
  const { name, email, number } = req.body;
  const { id } = req.params;
  Registration.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        name,

        number,
        picture,
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
});
