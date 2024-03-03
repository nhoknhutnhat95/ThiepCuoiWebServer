var express = require('express');
const { inviteSchema } = require('../models/invite.model');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('QuyLinh/indexV2')
});
router.get('/v2', function (req, res, next) {
  res.render('QuyLinh/indexV2')
});

router.post('/invite', async (req, res, next) => {
  try {
    const { name, withWho } = req.body
    if (!name) {
      return res.json({
        success: 0,
        message: 'Vui lòng nhập tên của bạn',
      })
    }
    if (!withWho) {
      return res.json({
        success: 0,
        message: 'Vui lòng nhập tên người đi cùng!'
      })
    }

    const newInvite = await inviteSchema.create({
      name: name,
      withWho: withWho
    })
    if (newInvite) {
      return res.json({
        success: 1,
        message: 'Xác nhận tham dự thành công!'
      })
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: 0,
      message: 'Có lỗi xảy ra!'
    })
  }
})
module.exports = router;
