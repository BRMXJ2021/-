function handleFormatReg(data) {
  let dataStr = [];
  for (let key in data) {
    dataStr.push(`${key}=${data[key]}`);
  }
  dataStr = dataStr.join('&');
  return dataStr;
}
