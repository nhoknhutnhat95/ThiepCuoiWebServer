var express = require('express');
const { inviteSchema } = require('../models/invite.model');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('QuyLinh/indexV2')
});
router.get('/cms', function (req, res, next) {
  res.render('QuyLinh/cms')
});
router.get('/nha-trai', function (req, res, next) {
  res.render('QuyLinh-NhaTrai/indexV2')
});
router.get('/invite', async function (req, res, next) {
  return res.json({
    data: await inviteSchema.find({}).lean()
  })
})
router.post('/invite', async (req, res, next) => {
  try {
    const { name, phoneNumber, sex } = req.body
    if (!name) {
      return res.json({
        success: 0,
        message: 'Vui lòng nhập tên của bạn',
      })
    }
    if (!phoneNumber) {
      return res.json({
        success: 0,
        message: 'Vui lòng nhập số điện thoại!'
      })
    }

    const newInvite = await inviteSchema.create({
      name: name,
      phoneNumber: phoneNumber,
      sex
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
