const _getCates = () => {
  getArticleCates((res) => {
    console.log(res);
    const { data } = res.data;
    console.log(data);
    $('.layui-table tbody').empty();
    data.forEach((value) => {
      $('.layui-table tbody').append(`<tr>
      <td>${value.name}</td>
      <td>${value.alias}</td>
      <td>
        <button myid="${value.Id}" data-name="${value.name}" data-alias="${value.alias}" type="button" class="layui-btn layui-btn-xs edit">编辑</button>
  
        <button myid="${value.Id}" type="button" class="layui-btn layui-btn-xs layui-btn-danger delete">删除</button>
      </td>
    </tr>`);
    });
  });
};
_getCates();

$('.add').on('click', () => {
  console.log(1);
  let index = layer.open({
    type: 1,
    content: add_str,
    title: '新增分类',
    area: ['500px', '300px'],
    // 2. 因为add-form是在弹出层上
    success() {
      $('.add-form').on('submit', (e) => {
        e.preventDefault();
        let data = $('.add-form').serialize();
        postArticleAddcates(data, (res) => {
          _getCates();
          layer.close(index);
        });
      });
    },
  });
});
// 添加类型的 - 弹出层上的 表单标签
var add_str = `
<form class="layui-form add-form" action="" style="margin: 30px; margin-left: 0px;" id="add_form">
<div class="layui-form-item">
  <label class="layui-form-label">类别名称</label>
  <div class="layui-input-block">
    <input type="text" name="name" required lay-verify="required|ctname" placeholder="请输入标题" autocomplete="off" class="layui-input">
  </div>
</div>
<div class="layui-form-item">
  <label class="layui-form-label">类别别名</label>
  <div class="layui-input-block">
    <input type="text" name="alias" required lay-verify="required|aliname" placeholder="请输入标题" autocomplete="off" class="layui-input">
  </div>
</div>
<div class="layui-form-item">
  <div class="layui-input-block">
    <button class="layui-btn" lay-submit lay-filter="formDemo">确认添加</button>
    <button type="reset" class="layui-btn layui-btn-primary">重置</button>
  </div>
</div>
</form>`;

// 9. 事件委托 - 编辑按钮 - 点击事件
var edit_str = `
  <form class="layui-form add-form" action="" style="margin: 30px; margin-left: 0px;" id="edit_form" lay-filter="edit">
    <div class="layui-form-item">
      <label class="layui-form-label">类别名称</label>
      <div class="layui-input-block">
        <input type="text" name="name" required lay-verify="required|ctname" placeholder="请输入标题" autocomplete="off" class="layui-input">
      </div>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">类别别名</label>
      <div class="layui-input-block">
        <input type="text" name="alias" required lay-verify="required|aliname" placeholder="请输入标题" autocomplete="off" class="layui-input">
      </div>
    </div>
    <input type="hidden" name="Id">
    <div class="layui-form-item">
      <div class="layui-input-block">
        <button class="layui-btn" lay-submit >确认修改</button>
      </div>
    </div>
  </form>`;
