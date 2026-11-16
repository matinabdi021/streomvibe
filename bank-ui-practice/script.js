const $ = (selector) => document.querySelector(selector);

const loginView = $("#loginView");
const dashboardView = $("#dashboardView");
const phoneForm = $("#phoneForm");
const otpForm = $("#otpForm");
let demoPhone = "";

phoneForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const phone = $("#phone").value.trim();
  $("#phoneError").textContent = "";

  if (!/^09\d{9}$/.test(phone)) {
    $("#phoneError").textContent = "شماره موبایل باید ۱۱ رقم و با 09 شروع شود.";
    return;
  }

  demoPhone = phone;
  phoneForm.classList.add("hidden");
  otpForm.classList.remove("hidden");
  $("#otp").focus();
});

$("#backToPhone").addEventListener("click", () => {
  otpForm.classList.add("hidden");
  phoneForm.classList.remove("hidden");
  $("#otpError").textContent = "";
});

otpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  $("#otpError").textContent = "";

  if ($("#otp").value.trim() !== "123456") {
    $("#otpError").textContent = "کد واردشده درست نیست. کد تست 123456 است.";
    return;
  }

  $("#profilePhone").textContent = demoPhone;
  $("#welcomeName").textContent = "کاربر عزیز";
  $("#cardHolder").textContent = "کاربر آزمایشی";
  loginView.classList.add("hidden");
  dashboardView.classList.remove("hidden");
  showToast("با موفقیت وارد حساب نمایشی شدی.");
});

$("#toggleBalance").addEventListener("click", () => {
  const amount = $("#balanceAmount");
  const hidden = amount.dataset.hidden === "true";

  if (hidden) {
    amount.innerHTML = '۲۵,۸۰۰,۰۰۰ <small>تومان</small>';
    amount.dataset.hidden = "false";
    $("#toggleBalance").textContent = "مخفی کردن";
  } else {
    amount.textContent = "••••••••";
    amount.dataset.hidden = "true";
    $("#toggleBalance").textContent = "نمایش موجودی";
  }
});

document.querySelectorAll("[data-panel]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.dataset.panel);
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

$("#profileBtn").addEventListener("click", () => {
  $("#profilePanel").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("#transferForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const destination = $("#destination").value.replace(/\s/g, "");
  const amount = Number($("#amount").value);
  const error = $("#transferError");
  error.textContent = "";

  if (!/^\d{16}$/.test(destination)) {
    error.textContent = "برای تمرین، یک شماره کارت ساختگی ۱۶ رقمی وارد کن.";
    return;
  }
  if (!Number.isFinite(amount) || amount < 1000) {
    error.textContent = "مبلغ باید حداقل ۱۰۰۰ تومان باشد.";
    return;
  }

  const row = document.createElement("div");
  row.className = "transaction";
  row.innerHTML = `<span class="tx-icon expense">↑</span><div class="tx-info"><b>انتقال وجه آزمایشی</b><small>همین الان • مقصد ${destination.slice(0,4)}••••</small></div><strong class="negative">− ${new Intl.NumberFormat("fa-IR").format(amount)}</strong>`;
  $("#transactions").prepend(row);
  $("#amount").value = "";
  $("#destination").value = "";
  showToast("انتقال فقط به‌صورت نمایشی ثبت شد؛ پولی جابه‌جا نشد.");
  $("#historyPanel").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("#logoutBtn").addEventListener("click", () => {
  dashboardView.classList.add("hidden");
  loginView.classList.remove("hidden");
  phoneForm.classList.remove("hidden");
  otpForm.classList.add("hidden");
  $("#phone").value = "";
  $("#otp").value = "";
  $("#phoneError").textContent = "";
  $("#otpError").textContent = "";
  showToast("از حساب نمایشی خارج شدی.");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}
