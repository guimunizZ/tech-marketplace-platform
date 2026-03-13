const router = require('express').Router()

router.get('/health', (req, res) => {
    res.json({ status: "API OK" })
})

module.exports = router