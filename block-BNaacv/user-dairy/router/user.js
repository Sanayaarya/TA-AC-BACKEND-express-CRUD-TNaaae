let express = require('express')
let router = express.Router();

 router.get('/',(req,res)=>{
  // handle action
  res.render('users.ejs')
 });

 router.get('/new',(req,res)=>{
  // render the create form
  res.render('userForm.ejs')
 })

 router.post('/',(req,res)=>{
    // capture form data
 })

 router.get('/:id',(req,res)=>{
  // single user detail
  res.render('singleUser.ejs')
 })

router.get('/:id/edit',(req,res)=>{
  //  edit form
})

router.put('/:id',(req,res)=>{
  // capture the data from the update form
})

router.delete('/:id',(req,res)=>{
  // delete that user
})




















// router.get('/', (req,res) => {
//     let list = ["Aman" ,"Ritesh" , "Abhay" , "Ranvijay"]
//     res.render('users.ejs',{list : list})
// })
// router.get('/new', (req,res) => {
//     res.render('userForm.ejs')
// })

// router.get('/:id', (req,res) => {
//     res.render('singleUser.ejs', {name : "Aman" , age : 22})
// })



// router.post('/new', (req,res) => {
//     res.send(req.body)
//     console.log(req.body)
// })

// router.get("/:id/edit" , (req,res)=>{

// })
// router.put("/:id" , (req, res)=>{
    
// })

module.exports = router