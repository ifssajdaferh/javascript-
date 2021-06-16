// // 封装为文档片段 统一操作dom


// alert('start')

// // 1调用文档片段api创建一个文档片段
// const frag = document.createDocumentFragment();


// const list=document.getElementById('list')

// for(let i=0;i<10;i++){

//     const li=document.createElement('li')
//     li.innerHTML=`node ${i+1}`

//     // 2先统一插入到文档片段中
//     frag.appendChild(li)
// }


// // 3最后统一插入到dom树中
// list.appendChild(frag)

alert("start")
const list =document.getElementById('list')

const frag=document.createDocumentFragment();

for(let i =0;i<10;i++){

    const li=document.createElement('li')
    li.innerHTML=`node item ${i+1}`

    frag.appendChild(li)

}

list.appendChild(frag)