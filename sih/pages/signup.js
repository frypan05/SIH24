// // pages/signup.js
// import { useState } from "react";
// import styles from "../styles/signup.module.css";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Example: Send data to backend API
//     try {
//       const response = await fetch("/api/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       if (response.ok) {
//         // Successful signup, redirect to login page
//         window.location.href = "/progress";
//       } else {
//         console.error("Signup failed");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <h1 className={styles.logo}>Get in</h1>
//         <p className={styles.subheading}>Create Account</p>

//         <form onSubmit={handleSubmit}>
//           <div className={styles.formGroup}>
//             <input
//               type="email"
//               id="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className={styles.input}
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <input
//               type="password"
//               id="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className={styles.input}
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <input
//               type="password"
//               id="confirmPassword"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className={styles.input}
//             />
//           </div>
//           <button type="submit" className={styles.button}>
//             Sign up
//           </button>
//         </form>

//         <p className={styles.loginPrompt}>Already have an account?</p>
//         <a href="/login" className={styles.loginLink}>
//           Log in
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import { useState } from "react";
import styles from "../styles/signup.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  return (
    <div className={styles.container}>
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
