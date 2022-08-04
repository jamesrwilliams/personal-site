import React from 'react';

const defaultState = {
  darkModeActive: true,
  toggleDarkMode: () => {},
};

const ThemeContext = React.createContext(defaultState);

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

class ThemeProvider extends React.Component {

  THEME_STORAGE_KEY = 'theme';

  state = {
    darkModeActive: false,
  }

  componentDidMount() {
    // Getting dark mode value from localStorage!
    const currentTheme = JSON.parse(localStorage.getItem(this.THEME_STORAGE_KEY)!);
    if (currentTheme) {
      this.setState({ darkModeActive: currentTheme });
    } else if (supportsDarkMode()) {
      this.setState({ darkModeActive: true });
    }
  }

  toggleDarkMode = () => {
    let currentState = this.state.darkModeActive;
    this.setState({ darkModeActive: !currentState });
    localStorage.setItem(this.THEME_STORAGE_KEY, JSON.stringify(this.state.darkModeActive));
  }

  render() {
    const { children } = this.props;
    const { darkModeActive } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          darkModeActive,
          toggleDarkMode: this.toggleDarkMode,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;

export { ThemeProvider };
