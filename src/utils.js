const request = require("request")

const foreCast = (location,callback) =>{
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ab9e50d8a58c36a2b637b72931beef9a`

request({url,json:true},(error,response)=>{
    if(error)
    {
        callback("Unable to connect to the internet.")
    }
    else if (response.body.message)
    {
        callback(response.body.message)
    }
    else{
        callback(undefined,{description:"Description : " + response.body.weather[0].description,temp_min: "Min Temp : " + response.body.main.temp_min,temp_max: "Max Temp : " + response.body.main.temp_max,humidity:"Humidity : " + response.body.main.humidity})
    }
})
}

module.exports= foreCast