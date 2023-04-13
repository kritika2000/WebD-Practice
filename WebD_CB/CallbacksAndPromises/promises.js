function downloadFile() {
    console.log('Downloading....');
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let file = 'Some file from the web'
            resolve(file)
        }, 0);
    })
}

downloadFile().then((file) => {
    console.log('File Downloaded via Promise: ', file)
}).catch((err) => {
    console.log(err);
})

