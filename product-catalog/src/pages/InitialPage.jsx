import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default function GitHubPage() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              React and Java Application for Natixis challenge!
            </p>
            <Link className="Initial-link" to="/login">
              Go to Project Login Page
            </Link>
            <br />
            <a
              className="Initial-link"
              href="https://github.com/AndreChaves95/Challenge_JAVA_React"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to GitHub Repository
            </a>
          </header>
        </div>
      );
}