var form = layui.form;

form.verify({
  username: [
    // 用户名
    /^[a-z0-9]{6,10}$/,
    '账号名是6到10位由数字, 小写字母组成',
  ],
  // 注册页-确认密码
  repwd: function (value) {
    // 为什么用函数, 因为不光要获取这个规则对应的标签的值, 还需要用jQ获取另外一个标签的值
    //   if ($('.pwd').val() !== value) {
    //     ('两次密码不相同');
    //   }
    return $('.pwd').val() !== value && '两次密码不相同';
  },
  nickname: [
    // 昵称
    /^[\u4E00-\u9FA5]+$/,
    '昵称只能是中文',
  ],
  password: [
    // 密码
    /^[\S]{6,10}$/,
    '密码是6到10位, 不能有空格',
  ],
  ctname: [/^[\u4E00-\u9FA5]+$/, '分类名只能是中文'],
  aliname: [/^[a-z0-9]+$/, '小写英文和数字组成'],

  // 修改密码页面使用 - 新旧密码不能一样
  diff: function (value) {
    return $('.oldPwd').val() == value && '新密码和旧密码不能一样';
  },
  // 修改密码页 - 使用
  same: function (value) {
    return $('.newPwd').val() !== value && '两次密码不相同';
  },
});
