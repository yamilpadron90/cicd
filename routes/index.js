var express = require('express');
var router = express.Router();
var {
  execSync
} = require('child_process')
var config = require('../config')
var ecosystem = require('../ecosystem.config')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/', function (req, res) {
  try {
    console.timeline('process')
    const k = req.body.secret
    if (k === config.secret) {
      const n = ecosystem.apps[0].name
      const c = `
        cd ${config}
        && git reset --hard
        && git pull
        && pm2 delete ${n}
        && pm2 start
      `
      execSync(c)
      console.log('done successfully!')
      res.json('ok')
    }
  } catch (e) {
    res.json(e)
  } finally {
    console.timelineEnd('process')
  }
})

module.exports = router;