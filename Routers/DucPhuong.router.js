var express = require('express');
const { inviteSchema } = require('../models/inviteDP.model');
const XLSX = require('xlsx');
const path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('DucPhuong/indexV2')
});
router.get('/cms', function (req, res, next) {
  res.render('DucPhuong/cms')
});
router.get('/nha-gai', function (req, res, next) {
  res.render('DucPhuong-nhagai/indexV2')
});
router.get('/invite', async function (req, res, next) {
  return res.json({
    data: await inviteSchema.find({}).lean()
  })
})
router.post('/excel', async (req, res, next) => {
  const { sex } = req.body
  const data = await inviteSchema.find({ sex: sex })
    .select('name phoneNumber').lean()
  const dataShow = data.map(_ => {
    return {
      'Họ tên': _.name,
      'Số điện thoại': _.phoneNumber
    }
  })
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(dataShow)
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1')
  const filePath = path.join(__dirname, '../', 'public', 'pdf', 'data.xlsx')
  XLSX.writeFile(wb, filePath)
  res.json({
    link: '/pdf/data.xlsx'
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
