
    // const p1 = new Promise((resolve,reject) => {
    // reject()
 
    // })
    // console.log('p1',p1)

    const responsedata={
        number:12138,
        name:'张学友'
    }
   const error='错误';
const p2 = Promise.resolve(responsedata)


p2.then((data) =>{
    console.log('data',data)
}).catch((error) =>{
    console.log('error',error)
})


// 报错 状态不可回逆
// p2.resolve(responsedata).then((a) =>{
//     console.log('data,data')
// })

