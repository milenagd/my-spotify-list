import React from 'react';
import { render } from 'react-dom';

import Routes from './routes';

class App extends React.Component {
  render() {
    return <Routes />;
  }
}

render(<App />, document.getElementById('root'));
