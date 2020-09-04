const activitiesActions={

    allActivities: () => {

        return async(dispatch, getState)=>{

                const data = await fetch('http://127.0.0.1:5000/api/activities')
                const infoActivity = await data.json()
                const dataActivity = infoActivity.Activity

                dispatch({
                    type: "ALL_ACTIVITIES",
                    payload: dataActivity
                })
        }

    }

}

export default activitiesActions