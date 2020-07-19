const d2hBtn = document.getElementById('d2hBtn')
const d2hResult = document.getElementById('d2hResult')
const d2hColor = document.getElementById('d2hColor')
d2hBtn.onclick = ()=>{
  try{
    d2hResult.innerHTML = d2hColor.style.backgroundColor = '#' + RGBd2h('R') + RGBd2h('G') + RGBd2h('B')
  }catch(e){
    alert(e)
  }
}

// 检查并处理输入的值，返回16进制的字符串
RGBd2h = RGB => {
  let value = parseInt(document.getElementById(RGB).value)
  if(0<=value && 255>=value){
    let hex = value.toString(16)
    if (hex.length===1) hex = 0 + hex
    return hex
  }else throw '输入错误，请输入0~255之间的整数。' // 停止执行外层函数
}

