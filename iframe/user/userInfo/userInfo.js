const getUserInfoSelf = () => {
  getUserInfo((res) => {
    const { username, nickname, user_pic, email, id } = res.data.data;
    $('input[name=username]').val(username);
    $('input[name=nickname]').val(nickname);
    $('input[name=email]').val(email);
    $('input[name=id]').val(id);
  });
};
getUserInfoSelf();

$('.layui-form').on('submit', (e) => {
  e.preventDefault();
  let data = $('.layui-form').serialize();
  console.log(data);
  postUpdateUserInfo(data, (res) => {
    window.parent._getUser();
  });
});
$('.my-reset').on('click', () => {
  getUserInfoSelf();
});
