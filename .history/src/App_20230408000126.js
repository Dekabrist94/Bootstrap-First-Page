import React from 'react';
import { Navibar } from './components/Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Home } from './components/Home';
import { Users } from './components/Users';
import { About } from './components/About';

function App() {
  return (
    <>
      <Router>
        <Navibar />
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
