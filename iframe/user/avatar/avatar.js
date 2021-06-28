let cropper;
getUserInfo((res) => {
  let { user_pic } = res.data.data;
  $('#image').prop('src', user_pic);
  cropper = new Cropper($('#image')[0], {
    aspectRatio: 1,
    preview: $('.img-preview'),
  });
});

$('.select').on('click', () => {
  $('#file').click();
});
$('#file').on('change', (e) => {
  console.log(e);
  let file = e.target.files[0];
  let url = URL.createObjectURL(file);
  cropper.replace(url);
});
$('.sure').on('click', (res) => {
  let canvas = cropper.getCroppedCanvas({
    width: 100,
    heigth: 100,
  });
  let base64Str = canvas.toDataURL('imgae/jpeg');
  base64Str = encodeURIComponent(base64Str);
  let data = 'avatar=' + base64Str;
  postAvatar(data, (res) => {
    // console.log(res);
    window.parent._getUser();
  });
});
