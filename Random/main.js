const totalInput = document.getElementById('totalInput')
const extractBtn = document.getElementById('extractBtn')
const mainContainer = document.getElementById('mainContainer')
const errMsg = document.getElementById('errMsg')
let total
extractBtn.onclick = function(){
  errMsg.innerHTML = ''
  try{
    total = +totalInput.value
    if (!((total>=2)&&(total % 1 == 0))) throw '请输入不小于2的整数'
    mainContainer.innerHTML = Math.ceil(Math.random()*total)
  }catch(e){
    errMsg.innerHTML = e
  }
}
