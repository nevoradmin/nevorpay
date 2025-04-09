
function login() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, pass)
    .then(user => {
      loadDashboard(user.user);
    }).catch(err => alert(err.message));
}

function register() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, pass)
    .then(user => {
      db.collection('wallets').doc(user.user.uid).set({ naira: 0, fcfa: 0 });
      loadDashboard(user.user);
    }).catch(err => alert(err.message));
}

function loadDashboard(user) {
  document.getElementById('auth-section').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  document.getElementById('user-email').textContent = user.email;

  db.collection('wallets').doc(user.uid).get().then(doc => {
    const data = doc.data();
    document.getElementById('naira-bal').textContent = data.naira;
    document.getElementById('fcfa-bal').textContent = data.fcfa;
  });
}

function logout() {
  auth.signOut().then(() => location.reload());
}
