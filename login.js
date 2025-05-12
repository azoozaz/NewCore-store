
async function login() {
  const username = document.getElementById('username').value.trim();
  const fullname = document.getElementById('fullname').value.trim();

  if (!username || !fullname) {
    alert('الرجاء تعبئة جميع الحقول');
    return;
  }

  const res = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, fullname })
  });

  const data = await res.json();

  if (data.success) {
    localStorage.setItem('user', JSON.stringify(data.user));
    alert('تم تسجيل الدخول بنجاح');
    window.location.href = 'index.html';
  } else {
    alert('حدث خطأ أثناء تسجيل الدخول');
  }
}
