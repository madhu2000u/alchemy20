const sponsors=require('../models/sponsors')

exports.getSponsors = (req, res) =>{
    sponsors.find({}).then(sponsors =>{
        return res.status(200).send(sponsors)
    }).catch(err =>{
        return res.status(500).send(err)
    })
}


//A single document in the sponsors collection which contains a list object and it holds the list of all the sponsors
exports.postSponsors = (req, res) =>{

    if(!req.headers['index']){
        return res.status(403).json({message:"Index header not provided"})
    }

    if(!req.body.portfolio || !req.body.img_url || !req.body.websiteUrl){
        return res.status(403).json({message: 'Required fields missing'})
    }
    sponsors.find({}).then((result)=>{
		if(result.length==0){
			sponsors.create({sponsors:[req.body]}).then((sponsor)=>{				
				return res.status(201).json({message:"Sponsor added"})
			}).catch((err)=>{console.log(err)})
		}else{
			sponsors.findByIdAndUpdate(result[0]._id, {$push:{sponsors:{
				$each:[req.body],
				$position:req.headers['index']
			}}}).then(()=>{
                return res.status(201).json({message:"Sponsor added"})
            })
			.catch((err)=>{return res.status(500).json(err)})
		}
	})
}

exports.updateSponsor=(req, res)=>{
    if(!req.headers['sponsor_id']){
        return res.status(403).json({message: 'Sponsor ID missing'})
    }
    else if(!req.body){return res.status(403).json({message: 'Update data missing in body'})}
    sponsors.find({}).then((result)=>{
        if(result.sponsors.length==0){return res.status(404).json({message: 'No sponsors found to update them'})}

        sponsors.updateOne({_id:result._id, "sponsors._id":req.headers['sponsor_id']}, {$set:{"sponsors.$":req.body}}) //https://docs.mongodb.com/manual/reference/operator/update/positional/ (To update embedded objects in a list inside a document)
            .then(result=>{
                console.log("update sponsors - ", result)
                if(result.n==0){return res.status(404).json({message: 'Specified sponsor not found'})}
                return res.status(200).json("Updated sponsor", result)
            })
    })
    
}


exports.deleteSponsor= (req, res) =>{
    if(!req.headers['sponsor_id']){
        return res.status(403).json({message: 'Sponsor ID missing'})
    }
    sponsors.findOne({}).then(result =>{
        if(result.sponsors.length==0){return res.status(403).json({message: 'No sponsors found to delete them'})}

        sponsors.update({_id:result._id}, {$pull:{"sponsors":{_id:req.headers['sponsor_id']}}})
            .then(result=>{
                console.log("Sponsor delete resutl - ", result)
                return res.status(200).json({message:"Deleted sponsor"})
                 
            })
    })

}