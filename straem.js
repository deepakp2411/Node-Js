
// streams 

const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder 
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
// const stream = createReadStream('./content/big.txt', {encoding: 'utf8'})

const stream = createReadStream('./content/first.txt',{highWaterMark: 9000,encoding:'utf-8'})

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error',(err) => {
    console.log(err)
})


// const { writeFileSync} = require('fs')
// for(let i = 0; i < 10000; i++) {
//     writeFileSync('./content/big.txt',`hello world : ${i}\n`, {flag:'a'})
// }