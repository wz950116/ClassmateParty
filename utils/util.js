const betaapi = {
  baseUrl: '',
}

const devapi = {
  baseUrl: 'https://party.inchwell.com.cn',
  imgUrl: 'https://party.inchwell.com.cn/Contents/Medias'
}
const api = devapi
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
const dateFormat = (now, mask = "yyyy-MM-dd hh:mm:ss") => {
  var d = new Date(now);

  var zeroize = function (value, length) {

    if (!length) length = 2;

    value = String(value);

    for (var i = 0, zeros = ''; i < (length - value.length); i++) {

      zeros += '0';

    }

    return zeros + value;

  };

  return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function ($0) {

    switch ($0) {

      case 'd': return d.getDate();

      case 'dd': return zeroize(d.getDate());

      case 'ddd': return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()];

      case 'dddd': return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()];

      case 'M': return d.getMonth() + 1;

      case 'MM': return zeroize(d.getMonth() + 1);

      case 'MMM': return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];

      case 'MMMM': return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][d.getMonth()];

      case 'yy': return String(d.getFullYear()).substr(2);

      case 'yyyy': return d.getFullYear();

      case 'h': return d.getHours() % 12 || 12;

      case 'hh': return zeroize(d.getHours() % 12 || 12);

      case 'H': return d.getHours();

      case 'HH': return zeroize(d.getHours());

      case 'm': return d.getMinutes();

      case 'mm': return zeroize(d.getMinutes());

      case 's': return d.getSeconds();

      case 'ss': return zeroize(d.getSeconds());

      case 'l': return zeroize(d.getMilliseconds(), 3);

      case 'L': var m = d.getMilliseconds();

        if (m > 99) m = Math.round(m / 10);

        return zeroize(m);

      case 'tt': return d.getHours() < 12 ? 'am' : 'pm';

      case 'TT': return d.getHours() < 12 ? 'AM' : 'PM';

      case 'Z': return d.toUTCString().match(/[A-Z]+$/);

      default: return $0.substr(1, $0.length - 2);

    }

  });
}

module.exports = {
  formatTime: formatTime,
  dateFormat: dateFormat,
  api: api,
}
