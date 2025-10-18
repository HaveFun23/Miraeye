const overlay = document.getElementById("popup-overlay");
const dlgAudit = document.getElementById("popup_audit");
const dlgService = document.getElementById("popup_service");

function openDialog(dlg) {
  overlay.hidden = false;
  dlg.showModal();
}
function closeDialog(dlg) {
  dlg.close();
  overlay.hidden = true;
}

document.querySelectorAll("[data-open='audit']").forEach((el) => {
  el.addEventListener("click", () => openDialog(dlgAudit));
});
document.querySelectorAll("[data-open='service']").forEach((el) => {
  el.addEventListener("click", (e) => {
    const svc = e.currentTarget.getAttribute("data-service");
    const title = document.getElementById("svc-title");
    title.innerText = el.innerHTML;
    openDialog(dlgService);
  });
});
[dlgAudit, dlgService].forEach((dlg) => {
  dlg.addEventListener("close", () => closeDialog(dlg));
});
