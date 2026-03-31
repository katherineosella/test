const loginForm = document.getElementById('login-form');
const loginShell = document.getElementById('login-shell');
const dashboard = document.getElementById('dashboard');
const loginError = document.getElementById('login-error');
const logoutBtn = document.getElementById('logout-btn');

const DEFAULT_USERNAME = 'kyle';
const DEFAULT_PASSWORD = 'password';

const showDashboard = () => {
  loginShell.classList.add('hidden');
  dashboard.classList.remove('hidden');
  loginError.textContent = '';
};

const showLogin = () => {
  dashboard.classList.add('hidden');
  loginShell.classList.remove('hidden');
  loginForm.reset();
};

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const username = formData.get('username')?.toString().trim();
  const password = formData.get('password')?.toString();

  if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
    showDashboard();
    return;
  }

  loginError.textContent = 'Invalid login. Try kyle / password.';
});

logoutBtn.addEventListener('click', showLogin);
