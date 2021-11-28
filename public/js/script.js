function search()
{
    const location = document.getElementById("search_text").value
    const one = document.getElementById("one")
    const two = document.getElementById("two")
    const three = document.getElementById("three")
    const four = document.getElementById("four")

    one.textContent = "Loading..."
    two.textContent = ""
    three.textContent = ""
    four.textContent = ""

    fetch(`/weather?location=${location}`).then(response=>{
        response.json().then(data=>{
            if(data.error)
            {
                one.textContent = data.error
                two.textContent = ""
                three.textContent = ""
                four.textContent = ""
            }
            else
            {
                one.textContent =  data.description
                two.textContent = data.temp_min
                three.textContent = data.temp_max
                four.textContent = data.humidity
            }
        })
    })

}