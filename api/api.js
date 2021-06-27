axios.defaults.baseURL = 'http://api-breakingnews-web.itheima.net';
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    const { message } = response.data;
    layer.msg(message);
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
function postReguser(data2, cb) {
  axios
    .post('http://api-breakingnews-web.itheima.net/api/reguser', data2)
    .then((res) => {
      // const { message, status } = res.data;
      // layer.msg(message);
      // if (status === 0) {
      //   $('#register').css('display', 'none');
      // }
      cb(res);
    });
}
// 登录封装
function postLogin(data2, cb) {
  axios
    .post('http://api-breakingnews-web.itheima.net/api/login', data2)
    .then((res) => {
      // const { status, message } = res.data;
      // if (status === 0) {
      //   window.location.href = './index.html';
      // }
      //   debugger;
      cb(res);
    });
}
