 

 console.log('1');
 //两个参数 一个回调函数，第二个就是时间
 setTimeout(()=>{
     console.log('2')
 },1000)

 console.log('3')

 alert('同步会阻塞代码执行，异步比如这个alert，异步就不会 ')
 