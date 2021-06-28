$(function () {
  $('#goto-register').on('click', () => {
    $('#register').css('display', 'block');
  });
  $('#goto-login').on('click', () => {
    $('#register').css('display', 'none');
  });

  // 注册事件
  $('#register .layui-form').on('submit', (e) => {
    e.preventDefault();
    let data = {
      username: $('#register input[name=username]').val(),
      password: $('#register input[name=password]').val(),
    };
    // let data2 = [];
    // for (let key in data) {
    //   data2.push(`${key}=${data[key]}`);
    // }
    // data2 = data2.join('&');
    let data2 = handleFormatReg(data);
    // axios
    //   .post('http://api-breakingnews-web.itheima.net/api/reguser', data2)
    //   .then((res) => {
    //     const { message, status } = res.data;
    //     layer.msg(message);
    //     if (status === 0) {
    //       $('#register').css('display', 'none');
    //     }
    //   });
    postReguser(data2, function (res) {
      const { status } = res.data;
      //   layer.msg(message);
      if (status === 0) {
        $('#register').css('display', 'none');
      }
    });
  });

  // 登录事件
  $('#login .layui-form').on('submit', (e) => {
    e.preventDefault();
    let data = {
      username: $('#login input[name=username]').val(),
      password: $('#login input[name=password]').val(),
    };
    // let data2 = [];
    // for (let key in data) {
    //   data2.push(`${key}=${data[key]}`);
    // }
    // data2 = data2.join('&');
    let data2 = handleFormatReg(data);
    // axios
    //   .post('http://api-breakingnews-web.itheima.net/api/login', data2)
    //   .then((res) => {
    //     // console.log(1);
    //     //   基于html文件的相对位置
    //     const { status, message } = res.data;
    //     if (status === 0) {
    //       window.location.href = './index.html';
    //     }
    //   });
    postLogin(data2, function (res) {
      const { status, token } = res.data;
      localStorage.setItem('token', token);
      if (status === 0) {
        window.location.href = './index.html';
      }
    });
  });
});
