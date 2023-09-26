<!DOCTYPE html>
<html>
<head>
  <title>JavaScript弹窗示例</title>
</head>
<body>
  <h1>JavaScript弹窗示例</h1>
 
  <!-- 确认框 -->
  <button onclick="showConfirm()">显示确认框</button>
 
  <script>
    // 显示确认框
    function showConfirm() {
      var result = confirm("
                           更新公告：
                           1.更新至-ax 1.0.1版本
                           2.增加刷新出块功能
  ");
      if (result) {
        alert("您点击了确定按钮！");
      } else {
        alert("您点击了取消按钮！");
      }
    }
  </script>
</body>
</html>
