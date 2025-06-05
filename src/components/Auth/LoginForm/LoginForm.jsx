import React from 'react'
import styles from './LoginForm.module.css'

export default function LoginForm() {
  return (
    <div className={styles.loginContainer}>
        <img
            src="/assets/images/scrap-3.png"
            alt="Background"
            className={styles.backgroundImage}
        />
        <img
            src="/assets/images/scrap-1.png"
            alt="Background"
            className={styles.backgroundImage2}
        />
        <img
            src="/assets/images/scrap-2.png"
            alt="Background"
            className={styles.backgroundImage3}
        />
        <img
            src="/assets/images/scrap-4.png"
            alt="Background"
            className={styles.backgroundImage4}
        />

        <h2>NeatBux</h2>
        <h5>Welcome Back</h5>
        <div className={styles.formCard}>
            <form>
                <input
                    type='text'
                    id='username'
                    placeholder='Enter your username'
                />
                <input  id='password' type='password' placeholder='Enter your password'/>
                <button
                    type='submit'
                >
                    Login
                </button>
            </form>
            <div style={styles.formFooter}>
                <a href="#forgot" style={styles.forgotLink}>Forgot password?</a>
                <p style={styles.signupText}>
                Don't have an account? <a href="#signup" style={styles.signupLink}>Sign up</a>
                </p>
            </div>
        </div>
    </div>
  )
}
