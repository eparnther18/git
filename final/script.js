  let userName = localStorage.getItem('name');
  let userTheme = localStorage.getItem('theme');
  
  if (!userName || !userTheme) {
    userName = prompt("What's your name?");
    userTheme = prompt("Do you prefer dark or light theme?").toLowerCase();
  
   localStorage.setItem('name', userName);
   localStorage.setItem('theme', userTheme);
}
  
  
  // Apply personalized greeting
  const welcome = document.getElementById("welcome-message");
  if (welcome && userName) {
    welcome.textContent = `Welcome back, ${userName}`;
  }
  
  // Apply theme
  if (userTheme === 'dark') {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#f1f1f1";
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#121212";
  }