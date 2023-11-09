const express=require('express')
const router=express.Router()
const blogController=require('../Controller/blogController')

router.post('/addBlog',blogController.addBlog)
router.get('/getBlog',blogController.findAllBlog)
router.patch('/updateBlog',blogController.updateBlog)
router.delete('/deleteBlog',blogController.deleteBlog)
router.get('/getDataWithPagination',blogController.getDataWithPagination)
router.get('/latestBlog',blogController.latestBlog)

   

module.exports=router