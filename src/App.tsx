import type { Component } from 'solid-js';

import styles from './App.module.css';
import Journal from './layouts/journal/journal';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header>
      </header>
      <Journal />
    </div>
  );
};

export default App;
