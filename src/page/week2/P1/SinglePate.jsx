const SimplePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Simple Page</h1>
      </header>

      <main>
        <h2>About Me</h2>
        <p>
          Hello! I'm a web developer learning HTML and CSS. This is a simple
          webpage to demonstrate basic HTML structure and styling.
        </p>

        <img src="https://via.placeholder.com/800x400" alt="Sample" />

        <h2>Useful Links</h2>
        <ul>
          <li>
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
              Google
            </a>
          </li>
          <li>
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.wikipedia.org"
              target="_blank"
              rel="noreferrer"
            >
              Wikipedia
            </a>
          </li>
        </ul>
      </main>

      <footer>
        <p>© 2024 My Simple Page</p>
      </footer>
    </div>
  );
};

export default SimplePage;
