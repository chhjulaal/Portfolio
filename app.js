// Function to show main content and hide loading screen after delay
function showMainContent() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }
  
  // Delay showing main content for 4 seconds (4000 milliseconds)
  setTimeout(showMainContent, 1500);
  