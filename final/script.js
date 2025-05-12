// Check and retrieve cookie values
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let c of cookies) {
      const [key, value] = c.split('=');
      if (key === name) return decodeURIComponent(value);
    }
    return null;
  }
  
  let userName = getCookie('name');
  let userTheme = getCookie('theme');
  
  if (!userName || !userTheme) {
    userName = prompt("What's your name?");
    userTheme = prompt("Do you prefer dark or light theme?").toLowerCase();
  
    document.cookie = `name=${userName}; max-age=${60 * 60 * 24 * 7}; path=/`;
    document.cookie = `theme=${userTheme}; max-age=${60 * 60 * 24 * 7}; path=/`;
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
  
