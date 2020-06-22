let FrameTime, timer, FPS
let today, h, m, s, ms
let FrameNumber
CalculateFrameTime()
document.getElementById('FPS').oninput = CalculateFrameTime
document.getElementById('FrameMode').onfocus = function(){
  if(FPS >= 1 && FPS <= 144) displayFrameNumber()
}
document.getElementById('TimeMode').onfocus = function(){
  if(FPS >= 1 && FPS <= 144) displayClock()
}
document.getElementById('stop').onfocus = stop

function CalculateFrameTime(){
  stop() //停止计时器
  FPS = document.getElementById('FPS').value
  if(FPS >= 1 && FPS <= 144){         //如果输入的FPS值合法
    FrameTime = (1000/FPS).toFixed(2) //计算一帧的时长，保留2位小数。备用方法：Math.round(100000/FPS)/100
    document.getElementById('FrameTime').innerHTML = `约${FrameTime}毫秒刷新一帧`
    //如果已经选了模式，开始计时器
    if(document.getElementById('FrameMode').checked) displayFrameNumber()
    if(document.getElementById('TimeMode').checked) displayClock()
  }else{ //如果输入的FPS值非法
    document.getElementById('FrameTime').innerHTML = `请输入 1 ~ 144 之间的数字`
  }
}
function displayFrameNumber(){
  clearInterval(timer)
  FrameNumber = 1
  timer = setInterval(function(){
    document.getElementById('mainContainer').innerHTML = FrameNumber++
  },FrameTime)
}
function displayClock(){
  clearInterval(timer)
  timer = setInterval(startClock,FrameTime)
}
function stop(){
  clearInterval(timer)
  document.getElementById('mainContainer').innerHTML = ''
}
function startClock() {
  today = new Date()
  h = today.getHours()
  m = checkTime(today.getMinutes())
  s = checkTime(today.getSeconds())
  ms = checkTime_ms(today.getMilliseconds())
  document.getElementById('mainContainer').innerHTML = h + ":" + m + ":" + s + "." + ms
}
function checkTime(i) {
  if (i < 10) return "0" + i
  return i
}
function checkTime_ms(i) {
  if (i < 10) return "00" + i
  else if (i < 100) return "0" + i
  return i
}
