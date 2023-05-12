const buttonOpenModal = document.getElementById("buttonOpenModal");
const dialogDownload = document.getElementById("dialogDownload");
const dialogButtonDownload = document.getElementById("dialogButtonDownload");
const dialogSelect = document.getElementById("dialogSelect");

buttonOpenModal.addEventListener("click", () => {
  dialogDownload.showModal();
});

dialogSelect.addEventListener("click", (e) => {
  dialogButtonDownload.href = e.target.value;
});
