//HTML에 코드 옮겨서 보기
/* <body class='container'>
  <h1>자기소개</h1>
  <textarea class="form-control" rows="3" id="jasoseol" onkeydown="counter();">저는 인성 문제가 없습니다.</textarea>
  <span id="count">(0/200)</span>
  <script src="jocoding.js/02. jasoseol.js"></script>
</body> */


function counter() {
  var content = document.getElementById('jasoseol').value;
  if (content.length > 200) {
      content = content.substring(0,200);
      document.getElementById('jasoseol').value = content;
  }
  document.getElementById('count').innerHTML = '(' + content.length + '/200)';
}
counter();