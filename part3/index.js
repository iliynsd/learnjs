var a = new Promise((resolve, reject) => {
    var data = fetch("https://217.25.228.251:3981");
    if(data !== null)
    {
        resolve(data)
    }
    reject("Data from ... null");
});

a.then((data) => {
    console.log(data);
})
