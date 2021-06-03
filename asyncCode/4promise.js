const url1="https://img3.sycdn.imooc.com/szimg/5eddd7aa09cfdb1c12000676-360-202.png"

function getimg(src){
   const p = new Promise(
        (resove,reject)=>{
        const img=document.createElement('img')
        img.onload=()=>{
            resove(img)
        }
        img.onerror=()=>{
            const err=new err(`图片加载失败 ${src}`)
            reject(err)

        }
        img.src=src
    }
    
    )
    return p
}

getimg(url1).then(img=>{
    console.log(img.width)
    return img
}).then(img=>{
    console.log(img.height)
    return getimg(url2)
    // return可以返回普通对象和promise对象实例 都会触发then
    // url2未定义，所以此处的getimg的promise返回一个reject--之后的.catch执行
}).catch(err=>{
    console.log(err)
})



// 练习

function getimg (src){
    const p = new Promise(
        (resove,reject)=>{
           const a=doucument.createElement('img')
           img.onload=()=>{
               resove(img)
           }

           img.onerror=()=>{
               const err=new err(`路径错误${src}`)
               reject(err)
           }
           img.src=src
        }
    )
    return p
}

const url1="https://img3.sycdn.imooc.com/szimg/5eddd7aa09cfdb1c12000676-360-202.png"

getimg(url1).then(img=>{
    console.log(img.height)
    return getimg(url2)
}).catch(err=>{
    console.log(err)
})