const Rule = require('../models/RuleSchema')
const express = require('express')
const router = express.Router()

router.post('/addrule', async (req, res) => {
    const { Email, Name, Content } = req.body

    if (!Name || !Content)
        return res.status(400).json({ msg: 'Name of Rule and File are required' })

    const rule = await Rule.findOne({Email, Name}) // finding rule in db
    if (rule) return res.status(400).json({ msg: 'Rule Name already exists' })

    const newRule = new Rule({Email, Name, Content })

    const savedUserRes = await newRule.save()

    if (savedUserRes)
        return res.status(200).json({ msg: 'Rule is successfully saved' })
})

router.get('/', async (req, res) => {
    try {
        const rule = await Rule.find();

        res.status(200).json({ "data": rule })
    } catch (err) {
        res.status(500).send("Something went wrong!")
    }
})




module.exports = router
