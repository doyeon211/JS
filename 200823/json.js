const fs = require('fs')

fs.readFile('./zumidashboard_en.json', 'utf8', (err, jsonfile_content) => {
    if (err) {
        console.log("파일을 읽는 도중 에러가 발생했습니다.")
    }
    else {
        let naeyong = JSON.parse(jsonfile_content)
        let key = Object.keys(naeyong)
        console.log(naeyong[key])
        // for (let index=0; index<key.length; index++) {
        //     // console.log(key[index])
        //     // console.log(naeyong[key[index]])
            
        // }
        console.log(key.length)
    }
}) 