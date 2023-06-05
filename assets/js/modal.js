var btn = document.querySelectorAll("button.btn-open-popup");
var modals = document.querySelectorAll(".modal-custom");
var spans = document.getElementsByClassName("close-modal");

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  };

  spans[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  };
}

// 모달창이 띄워져 있는 상황에서 어떤 화면을 누르든 모달창이 닫히게 함
window.onclick = function (event) {
  if (event.target.classList.contains("modal-custom")) {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  }
};
