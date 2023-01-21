const express = require('express');
const router = express.Router();

/* GET game page. */
router.get('/', function (req, res, next) {

  // get number of slides and autoAdvance from query string
  const { numSlides, autoAdvance, speed } = req.query

  res.render('game', { title: 'Get ready!', numSlides, autoAdvance, speed });
});

module.exports = router;
