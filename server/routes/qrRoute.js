const router = require("express").Router();

router.post("/id", (req, res) => {
  id = req.body.id;
  if (id) {
    console.log("id recieved: ",id);
    return res.send({ id: id });
  }
  return res.send("failed");
});

module.exports = router;
