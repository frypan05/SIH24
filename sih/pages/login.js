// pages/login.js
import { useState } from "react";
import { signIn } from "next-auth/react";
import styles from "../styles/signup.module.css";
import { useRouter } from "next/router";  // Import useRouter from Next.js

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();  // Initialize router

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Example: Authenticate user (this would need to be implemented in your backend)
    console.log("Logging in with email and password", email, password);
  };

  return (
    <div className={styles.container}>
      {/* Circular back button */}
      <button className={styles.backButton} onClick={() => router.push("/signup")}>
        &larr; {/* Unicode for a left arrow */}
      </button>
      <div className={styles.content}>
        <h1 className={styles.logo}>Welcome Back</h1>
        <p className={styles.subheading}>Log in to your account</p>

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
          <button type="submit" className={styles.button}>
            Log in
          </button>
        </form>

        {/* Log in with GitHub */}
        <button
          onClick={() => signIn("github", { callbackUrl: "/progress" })}  
          className={styles.button}
          style={{ backgroundColor: "#333", marginTop: "20px" }}
        >
          Log in with GitHub
        </button>

        {/* Log in with Google */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/progress" })} 
          className={styles.button}
          style={{ backgroundColor: "#DB4437", marginTop: "10px" }}
        >
          Log in with Google
        </button>

        <p className={styles.loginPrompt}>Don't have an account?</p>
        <a href="/signup" className={styles.loginLink}>
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Login;
