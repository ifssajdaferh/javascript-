// // 一个延时一秒打印函数
// function muti(i){
//     return new Promise(resolve =>{
//         // stetimeout两个参数 一个函数 一个时间参数
//         setTimeout(()=>{
//             resolve(i*i)
//         },1000)
//     })
// }

// const num=[1,2,3]
// // 一个自执行函数包裹
// !(async ()=>{
//     for (let i of num){
//         const a =await muti(i)
//         console.log(a)
//     }

// })()




// 第二遍
function muti(i){
    return new Promise(resolve => {
        setTimeout(()=>{
             resolve(i*i)

        },1000)
      
    })
}

let num=[1,2,3]
!(async ()=>{
    for(let i of num){
           const a=await muti(i)
           window.alert(a)
    }
})()