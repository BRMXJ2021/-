axios.defaults.baseURL = 'http://api-breakingnews-web.itheima.net';
// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // console.log(config);
    if (!config.url.startsWith('/api')) {
      const AUTH_TOKEN = localStorage.getItem('token');
      config.headers.Authorization = AUTH_TOKEN;
    }

    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    const { message, status } = response.data;
    layer.msg(message);
    // if 块和 else if 块本质上是互斥的
    if (status === 1) {
      localStorage.removeItem('token');
      location.href = '/Demo/项目素材/login.html';
    }
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
// 获得用户信息
const getUserInfo = (cb) => {
  // const AUTH_TOKEN = localStorage.getItem('token');
  axios.get('/my/userinfo').then((res) => {
    console.log(res);
    cb(res);
  });
};
// 更新用户信息
const postUpdateUserInfo = (data, cb) => {
  axios.post('/my/userinfo', data).then((res) => {
    cb(res);
  });
};
const postUpdataPwd = (data, cb) => {
  axios.post('/my/updatepwd', data).then((res) => {
    cb(res);
  });
};
const postAvatar = (data, cb) => {
  axios.post('/my/update/avatar', data).then((res) => {
    cb(res);
  });
};
const getArticleCates = (cb) => {
  axios.get('/my/article/cates').then((res) => {
    cb(res);
  });
};
const postArticleAddcates = (data, cb) => {
  axios.post('/my/article/addcates', data).then((res) => {
    cb(res);
  });
};
// /my/article/addcates
