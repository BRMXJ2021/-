$('.layui-form').on('submit', (e) => {
  e.preventDefault();
  let data = $('.layui-form').serialize();
  postUpdataPwd(data, (res) => {
    // console.log(1);
    localStorage.removeItem('token');
    window.parent.location.href = '/Demo/项目素材/login.html';
  });
});
