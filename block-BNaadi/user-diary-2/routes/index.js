var express = require('express');
var router =  express();

router.get('/',(req,res)=>{
    res.send('<h1>index page</h1>');
});

module.exports = router;