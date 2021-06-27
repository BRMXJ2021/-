$(function () {
  $('#goto-register').on('click', () => {
    $('#register').css('display', 'block');
  });
  $('#goto-login').on('click', () => {
    $('#register').css('display', 'none');
  });
  var form = layui.form; // 引用layui.js后, 有layui对象(类似于$), 然后拿到内部的form对象(用来管理所有用layui创建的表单-以及使用了lay-veify属性的标签)

  form.verify({
    // 指定规则名和对应的验证规则
    usern: [
      // 用户名
      /^[a-z0-9]{6,10}$/,
      '账号名是6到10位由数字, 小写字母组成',
    ],
    pwd: [
      // 密码
      /^[\S]{6,10}$/,
      '密码是6到10位, 不能有空格',
    ],
    // 注册页-确认密码
    repwd: function (value) {
      // 为什么用函数, 因为不光要获取这个规则对应的标签的值, 还需要用jQ获取另外一个标签的值
      //   if ($('.pwd').val() !== value) {
      //     ('两次密码不相同');
      //   }
      return $('.pwd').val() !== value && '两次密码不相同';
    },
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
