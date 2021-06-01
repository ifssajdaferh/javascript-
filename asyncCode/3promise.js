//promise的基本使用
const url ='http://www.baidu.com'
const url2='http://www.tencent.com'
const url3 ='http://www.ailibaba.com'
// 先写一个回调函数
function getdata(url){
    return new Promise((resove,reject)=>{
$.ajax({
    url,
   success(data){
       resove(data)
   },
   error(err){
        reject(err)
   }
})
    })
}

getdata(url).then(data1 => {
    console.log(data1);
    return getdata(url2)
}).then(data2 =>{
    console.log(data2);
    return getdata(ur3)
}).then(
    console.log(data3)
     
).catch(err =>{
    console.error(err)
})