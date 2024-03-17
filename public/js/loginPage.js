document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
  
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
  
      if (response.ok) {
        window.location.href = "/studentHomePage"; // Redirect to home page after successful login
      } else {
        document.getElementById("loginError").innerText = result.message; // Update error message on the card
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
  