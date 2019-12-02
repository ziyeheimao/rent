// import Vue from 'vue'
// const vue = new Vue()

// 克隆对象
const clone = function (obj) {
  let newObj = {}
  for (let k in obj) {
    newObj[k] = obj[k]
  }
  return newObj
}

const date = {
  // 传入时间实例 返回指定格式的时间
  format: function (date = new Date(), MinutesAndSeconds = true, isWeekDay = false, timeStr = '-', timeStr2 = ':') {
    let Year = date.getFullYear() // 获取年(4位)

    let Month = date.getMonth() + 1 // 获取月份(0-11, 0是1月)
    if (Month < 10) Month = '0' + Month

    let Day = date.getDate() // 获取日(1-31)
    if (Day < 10) Day = '0' + Day

    let WeekDay = date.getDay() // 获取星期(0-6 , 0是星期日)
    switch (WeekDay) {
      case 0:
        WeekDay = '星期日'
        break
      case 1:
        WeekDay = '星期一'
        break
      case 2:
        WeekDay = '星期二'
        break
      case 3:
        WeekDay = '星期三'
        break
      case 4:
        WeekDay = '星期四'
        break
      case 5:
        WeekDay = '星期五'
        break
      case 6:
        WeekDay = '星期六'
        break
    }

    let Hour = date.getHours() // 获取小时(0-23)
    if (Hour < 10) Hour = '0' + Hour

    let Minute = date.getMinutes() // 获取分钟(0-59)
    if (Minute < 10) Minute = '0' + Minute

    let Sec = date.getSeconds() // 获取秒数(0-59)
    if (Sec < 10) Sec = '0' + Sec

    let current = Year + timeStr + Month + timeStr + Day

    if (MinutesAndSeconds) current += ' ' + Hour + timeStr2 + Minute + timeStr2 + Sec // 是否需要时分秒
    if (isWeekDay) current = current + ' ' + WeekDay // 是否需要星期几

    return current
  }
}

// 导出
export default {
  clone,
  date
}
