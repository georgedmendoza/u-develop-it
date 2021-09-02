const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoute'));
router.use(require('./voteRoutes'));

module.exports = router;