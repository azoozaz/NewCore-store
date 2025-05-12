
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const overlay = document.getElementById('overlay');

  if (localStorage.getItem('logout') === 'true') {
    document.getElementById('logoutMessage').style.display = 'block';
    setTimeout(() => {
      document.getElementById('logoutMessage').style.display = 'none';
    }, 10000);
    localStorage.removeItem('logout');
  }

  if (localStorage.getItem('userData')) {
    document.body.classList.remove('blurred');
    document.getElementById('loginContainer').style.display = 'none';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.username.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();

    if (name && email && phone) {
      const userData = { name, email, phone };
      localStorage.setItem('userData', JSON.stringify(userData));
      document.getElementById('loginContainer').style.display = 'none';
      document.body.classList.remove('blurred');
    }
  });

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('userData');
      localStorage.setItem('logout', 'true');
      window.location.reload();
    });
  }
});
