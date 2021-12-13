const tagReg = /<\/?([^<|^>]*)>/g
/**
 * string cut
 *
 * @export
 * @param {any} value
 * @param {any} limit
 * @returns
 */
export function cutStr (value, limit) {
  if (!value) {
    return ''
  }
  value = '' + value
  // remove html tag
  value = value.replace(tagReg, '')
  let strLength = 0
  const strLen = value.length
  let strCut = ''
  for (let i = 0; i < strLen; i++) {
    const a = value.charAt(i)
    strLength++
    if (encodeURI(a).length > 4) {
      // 中文字符的长度经编码之后大于4
      strLength += 1
    }
    strCut = strCut.concat(a)
    if (strLength > limit) {
      strCut = strCut.concat('...')
      return strCut
    }
    if (strLength === limit) {
      return strCut
    }
  }

  // 如果给定字符串小于指定长度，则返回源字符串；
  if (strLength < limit) {
    return value
  }
}

/**
 * simple version deep copy
 * @param {Object} obj
 */
export function deepClone(obj) {
  // obj not contain special type like：undefined,NaN,function
  return JSON.parse(JSON.stringify(obj))
}

export function jsonProp (obj) {
  // type check
  if (!obj || (typeof obj !== 'object')) {
    return obj
  }
  Object.keys(obj).forEach((key) => {
    if ((typeof obj[key]) === 'object') {
      obj[key] = JSON.stringify(obj[key])
    }
  })
  return obj
}

export function dateFormat(format){ 
	var n = parseInt(format)*1000;
	  var D = new Date(n);
	  var year = D.getFullYear();//四位数年份
	
	  var month = D.getMonth()+1;//月份(0-11),0为一月份
	  month = month<10?('0'+month):month;
	
	  var day = D.getDate();//月的某一天(1-31)
	  day = day<10?('0'+day):day;
	
	  var hours = D.getHours();//小时(0-23)
	  hours = hours<10?('0'+hours):hours;
	
	  var minutes = D.getMinutes();//分钟(0-59)
	  minutes = minutes<10?('0'+minutes):minutes;
	
	  // var seconds = D.getSeconds();//秒(0-59)
	  // seconds = seconds<10?('0'+seconds):seconds;
	  // var week = D.getDay();//周几(0-6),0为周日
	  // var weekArr = ['周日','周一','周二','周三','周四','周五','周六'];
	
	  var now_time = year+'-'+month+'-'+day+' '+hours+':'+minutes;
	  return now_time;
}