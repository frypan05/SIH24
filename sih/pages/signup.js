

import { useState } from "react";
import styles from "../styles/signup.module.css";
import { useRouter } from "next/router";  // Import useRouter for navigation

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();  // Initialize the router for handling navigation

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Example: Send data to backend API
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        // Successful signup, redirect to login page
        window.location.href = "/progress";
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle the back navigation
  const handleBackClick = () => {
    router.push("/");  // Redirect to the homepage or any desired route
  };

  return (
    <div className={styles.container}>
      {/* Back Arrow Button */}
      <div className={styles.backArrow} onClick={handleBackClick}>
        &#8592; {/* Left arrow symbol */}
      </div>

      <div className={styles.content}>
        <h1 className={`${styles.logo} eras-itc`}>Get in</h1>
        <p className={styles.subheading}>Create Account</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            Sign up
          </button>
        </form>

        <p className={styles.loginPrompt}>Already have an account?</p>
        <a href="/login" className={styles.loginLink}>
          Log in
        </a>
      </div>
    </div>
  );
};

export default Signup;
