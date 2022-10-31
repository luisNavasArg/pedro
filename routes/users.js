var express = require('express');
var router = express.Router();
const path = require('path')
const multer = require('multer')
let storage = multer.diskStorage({
  destination:function (req,file,cb) {
    cb(null, path.join(__dirname,'../public'))
  },
  filename:function (req,file,cb) {
    cb(null,file.fieldname + '-'+ Date.now() + path.extname(file.originalname))
  }

})
let upload = multer({storage:storage})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('upload');
});
router.post('/',upload.single('imagen_url'), function(req, res, next) {
  res.send(req.dile);
});

module.exports = router;
