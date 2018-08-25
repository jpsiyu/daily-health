const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatSecond = (seconds) => {
  let m = Math.floor(seconds / 60)
  m = ('0' + m).slice(-2)
  let s = seconds % 60
  s = ('0' + s).slice(-2)
  return `${m}:${s}`
}

module.exports = {
  formatTime: formatTime,
  formatSecond: formatSecond,
}
