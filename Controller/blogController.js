
const blogModel=require('../Schema/blogSchema')








exports.addBlog=async function(req,res){
    try{
        let {title,content,author,publicationDate,comments}= req.body
        let data=req.body
        console.log(data,"data")
        let productData=await blogModel.insertMany(data)
        if(!productData){
            throw new console.Error("unable to add product");
        }
        res.status(200).json({
            msg:"data added succesfully",
            data:productData
        })

    }
    catch(error){
        res.status(403).json(error.message)
    }
  }

exports.findAllBlog=async function(req,res){

    try{
    let findData=await blogModel.find()
    if(!findData){
        throw new console.Error("unable to find product");
    }
    res.status(200).json({
        msg:"data fetched succesfully",
        data:findData
    })


    }
    
    catch(error){

        res.status(403).json(error)
    }
   }


exports.updateBlog=async  function(req,res)
{
    try{
        let blogId=req.query._id
        let updateData=req.body
        console.log(updateData,blogId,"blog")
        const updatedPost = await blogModel.findOneAndUpdate({ _id: blogId }, updateData, { new: true });

        // let updatedData=await blogModel.findOne({blogId})

        // console.log("update",updatedPost,updatedData)
        // let updateData=await blogModel.findByIdAndUpdate(blogId, { author: 'sarvagya' , title:"new video"})
        res.status(200).json({
            msg:"data updated succesfully",
            data:updatedPost
        })


    }
    
    catch(error){

        res.status(403).json(error)
    }
   }

 
exports.deleteBlog=async function(req,res){

    try{

        let blogid={
            _id:req.body._id
        }
        let deleteData=await blogModel.deleteOne(blogid)
        console.log(deleteData,"deleteData")
        res.status(200).json({
            msg:"data deleted successfully",

        })
    }
    catch(error){

        res.status(403).json(error)
    }
 }

exports.getDataWithPagination=async function(req,res){


        try{
            const page = parseInt(req.query.page) || 1; // Get the requested page from the query parameter
            const limit = 5; // Number of blog posts per page
          console.log(page,"page")
            const pipeline = [
                {
                    $match:{

                    }

                },


                /*if want to latest blog then we can apply sort -1

                {
                    $sort:-1

                    
                }
                */
                {
                    $sort:{
                        publicationDate: -1                    }

                    
                },
              {
                $skip: (page - 1) * limit,
              },
              {
                $limit: limit,
              },
            ];
        
            const results = await blogModel.aggregate(pipeline);
            res.status(200).json({
                msg:"data find successfully",
                data:results
    

        })
    }
        
        catch(error){
            res.status(403).json(error)

        }
    }

exports.latestBlog=async function(req,res){

        try{
    
            
            let latestBlog=await blogModel.find().sort({publicationDate:-1})
            console.log(latestBlog,"deleteData")
            res.status(200).json({
                msg:"latest blog found successfully",
                data:latestBlog
    
            })
        }
        catch(error){
    
            res.status(403).json(error)
        }
    }