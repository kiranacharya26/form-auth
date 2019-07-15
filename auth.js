auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    
  } else {
    console.log('user logged out');
  
  }
})


const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = signupForm['uname'].value;
  const firstname = signupForm['fname'].value;
  const lastname = signupForm['lname'].value;
  const pnumber = signupForm['pnum'].value;
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const dateofbirth = signupForm['start'].value;

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut()
    
  });


const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });

});