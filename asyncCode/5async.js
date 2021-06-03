function timeout(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  //几秒后传出一个resove的promise以及时间数值
  
  //然后awite必须等待timeout返回resove， 才能执行输出语句
  async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
  }
  
  asyncPrint('hello world', 30)

