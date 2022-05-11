const apiCall= () => {
    return new Promise ((resolve,reject) => {
        setTimeOut(()=>{
            resolve("in api call")
        },2000)
    })
}

const asyncFunc = async() => {
    console.log("start")
    const response = await apiCall()
    console.log(response)
    console.log("end")
}