const request=require('request')


const forecast=(latitude, longitude, callback)=>{
     const url="http://api.weatherstack.com/current?access_key=f9d65bf05ea4b333dbcf5074ea9d7bba&query="+latitude+","+longitude+"&units=m"
    
     request({url, json:true},(error, {body})=>{
            if(error){
                callback("Unable to connect to weather service", undefined)
       }
       else if(body.error){
           callback("Unale to find Location", undefined)
       }
       else{
           callback(undefined,body.current.weather_descriptions[0] +". It is currently "+body.current.temperature+" degrees out. It feels like "+body.current.feelslike+" degrees out.")
       }
   })
}

module.exports=forecast