//deletion of post
function delete_post(obj) {
  var modal = document.getElementById('trash_modal');
  modal.style.display = 'block';
  var no = document.getElementById('no');
  no.onclick = function() {
    modal.style.display = 'none';
  };
}

//on clicking the logo it leads to homepage
var home = document.getElementById('logo');
home.onclick = function() {
  window.location.href = '../index.html';
};

var modal1 = document.getElementById('sign_in_modal');
var modal2 = document.getElementById('sign_up_modal');

var sign_in = document.getElementById('in_modal');
sign_in.onclick = function() {
  modal1.style.display = 'block';
};

var sign_up = document.getElementById('up_modal');
sign_up.onclick = function() {
  modal1.style.display = 'none';
  modal2.style.display = 'block';
};

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = 'none';
  }
  if (event.target == modal2) {
    modal2.style.display = 'none';
  }
};
