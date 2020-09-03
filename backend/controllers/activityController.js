const Activity = require('../models/Activity')
const { search } = require('../routes')

const activityController={
    ListActivities : async(req, res)=>{
        const list = await Activity.find()
        res.json({
            success: true,
            Activity:list
        })
    },

    addActivity:(req, res)=>{
        const {activity, photo, itineraryId} = req.body

        const newActivity = new Activity({
            activity:activity,
            photo:photo,
            itineraryId, itineraryId
        })


        newActivity.save() 
        .then(user=>{
            res.json({success: true, user:user})
        })
        .catch(error=>{
            res.json({success:false, error: error})
        })

    },

    bringActivity:async(req, res)=>{
        const searchActivity = await Activity.find({itineraryId: req.params.id})
        res.json({
            Activity : searchActivity
        })
    }

}



module.exports = activityController