console.log("Harish Raajaa R V")

function harishfunc(data)
{
    for (let i=0;i<data.length;i++)
    {
        console.log(data[i].name.common)
    }
}


const req= new XMLHttpRequest()
req.addEventListener("click",(e)=>{
    console.log(e.type)
    let data=JSON.parse(e.target.responseText)
    let statuscode= e.target.status
    //console.log(data)
    console.log(statuscode)
    harishfunc(data)

})

req.addEventListener("error",(error)=>{console.log(error)})
req.open("GET","https://restcountries.com/v3.1/all")
req.send()