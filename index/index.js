if (!localStorage.getItem('token')) {
  window.location.href = './login.html';
}
// 用户名头像等数据
const _getUser = () => {
  getUserInfo((res) => {
    // console.log(res);
    let { username, nickname, user_pic } = res.data.data;
    // console.log(username);
    if (!nickname) {
      nickname = username;
    }
    $('.username').text(nickname);
    if (!user_pic) {
      let firstLetter = nickname[0].toUpperCase();
      $('.avatar').css('display', 'inline-block');
      $('.avatar').text(firstLetter);
    } else {
      $('.avatar').css('display', 'none');
      $('.layui-nav-img').show();
      $('.layui-nav-img').prop('src', user_pic);
    }
  });
};
_getUser();
window._getUser = _getUser;

$('#logout').on('click', () => {
  layer.confirm(
    '不是吧不是吧！这就溜了？',
    { icon: 3, title: '提示' },
    function (index) {
      //do something
      localStorage.removeItem('token');
      location.href = '/Demo/项目素材/index.html';
      layer.close(index);
    }
  );
});
