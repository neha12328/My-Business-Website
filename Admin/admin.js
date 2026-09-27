console.log("FRONTEND ADMIN JS LOADED");

const loginForm = document.getElementById("loginForm");

console.log("LOGIN FORM:", loginForm);

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        console.log("LOGIN FORM SUBMITTED");

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const loginMessage = document.getElementById("loginMessage");
        const loginButton = document.querySelector(".login-btn");

        console.log("Email:", email);
        console.log("Password entered:", password.length > 0);

        loginMessage.textContent = "Logging in...";
        loginMessage.style.color = "#087f8c";

        loginButton.disabled = true;
        loginButton.textContent = "Please wait...";

        try {

            console.log("Sending login request...");

            const response = await fetch(
                "https://shri-shiv-enterprises-backened.onrender.com/api/admin/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            );

            console.log("Response status:", response.status);

            const data = await response.json();

            console.log("Backend response:", data);

            if (response.ok) {

                localStorage.setItem("adminToken", data.token);

                localStorage.setItem(
                    "adminUser",
                    JSON.stringify(data.admin)
                );

                loginMessage.textContent =
                    "Login successful! Redirecting...";

                loginMessage.style.color = "green";

                setTimeout(function () {
                    window.location.href = "./dashboard.html";
                }, 700);

            } else {

                loginMessage.textContent =
                    data.message || "Invalid email or password.";

                loginMessage.style.color = "red";

                loginButton.disabled = false;
                loginButton.textContent = "Login to Dashboard";
            }

        } catch (error) {

            console.error("FRONTEND LOGIN ERROR:", error);

            loginMessage.textContent =
                "Unable to connect to server.";

            loginMessage.style.color = "red";

            loginButton.disabled = false;
            loginButton.textContent = "Login to Dashboard";
        }

    });

} else {

    console.error("LOGIN FORM NOT FOUND!");

}