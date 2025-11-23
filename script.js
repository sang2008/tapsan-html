// ==========================
// A. DARK MODE NÂNG CẤP
// ==========================
const dmToggle = document.getElementById('darkModeToggle');

// Lấy trạng thái đã lưu
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  if (dmToggle) dmToggle.textContent = "☀️";
}

// Nhấn nút đổi giao diện
dmToggle && dmToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');
  dmToggle.textContent = isDark ? "☀️" : "🌙";

  // Lưu vào trình duyệt
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Transition siêu mượt cho giao diện
document.body.style.transition = "background 0.3s ease, color 0.3s ease";

// ==========================
// BACK TO TOP (CSS + JS version đẹp)
// ==========================
const backTopBtn = document.createElement("button");
backTopBtn.id = "backToTopBtn";

// ICON SVG đẹp
backTopBtn.innerHTML = `
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path d="M12 19V5" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M5 12L12 5L19 12" stroke-width="2.4" stroke-linecap="round"/>
  </svg>
`;

document.body.appendChild(backTopBtn);

// Hiện/ẩn nút khi cuộn
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backTopBtn.classList.add("show");
    backTopBtn.classList.remove("hide");
  } else {
    backTopBtn.classList.add("hide");
    setTimeout(() => backTopBtn.classList.remove("show"), 300);
  }
});

// Hiệu ứng ripple khi click
backTopBtn.addEventListener("click", (e) => {
  // Tạo hiệu ứng ripple
  const ripple = document.createElement("span");
  ripple.style.position = "absolute";
  ripple.style.width = "20px";
  ripple.style.height = "20px";
  ripple.style.borderRadius = "50%";
  ripple.style.background = "rgba(255,255,255,0.7)";
  ripple.style.transform = "translate(-50%, -50%) scale(0)";
  ripple.style.pointerEvents = "none";
  ripple.style.left = e.offsetX + "px";
  ripple.style.top = e.offsetY + "px";
  ripple.style.animation = "rippleEffect 0.5s ease-out";
  backTopBtn.appendChild(ripple);

  // Xóa ripple sau 0.5s
  setTimeout(() => ripple.remove(), 500);

  // Cuộn về đầu trang
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animation ripple (tạo bằng JS)
const rippleStyle = document.createElement("style");
rippleStyle.innerHTML = `
  @keyframes rippleEffect {
    from { transform: translate(-50%, -50%) scale(0); opacity: 0.9; }
    to { transform: translate(-50%, -50%) scale(4); opacity: 0; }
  }
`;
document.head.appendChild(rippleStyle);

// Thêm CSS fade-in
fadeElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

// Quan sát khi phần tử xuất hiện
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

// Kích hoạt observer
fadeElements.forEach(el => observer.observe(el));

// ==========================
// FOOTER: Tự cập nhật năm
// ==========================
const year = document.getElementById("currentYear");
if (year) year.textContent = new Date().getFullYear();
