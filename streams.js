const { createReadStream} = require('fs')

const stream = createReadStream('./content/subfolder/first.txt','utf8')

stream.on('data',(result)=>{
    console.log(result,`${result.length}`)
})