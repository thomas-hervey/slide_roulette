const express = require('express');
const router = express.Router();

const getImages = () => {
  const fs = require('fs')
  const path = require('path')

  // get the path to the images folder
  const testFolder = path.join(__dirname, '../public/images');
  // create an array to hold the file names
  const imagePaths = []

  // get the file names from the images folder
  fs.readdirSync(testFolder).forEach(file => {
    imagePaths.push(file)
  })

  return imagePaths
}


/* GET home page. */
router.get('/', function (req, res, next) {

  const { numSlides, autoAdvance, speed, counter } = req.query

  const imagePaths = getImages()

  res.render('slide', { numSlides, autoAdvance, speed, counter, imagePaths });

})

module.exports = router;