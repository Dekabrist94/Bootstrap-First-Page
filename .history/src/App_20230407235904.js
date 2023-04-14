import React from 'react';
import { Navibar } from './components/Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navibar />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Users />} />
          <Route path="/" element={<About />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
