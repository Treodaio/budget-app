import logo from 'logo.svg';
import 'App.css';

// odnosimy się do index.js z components który eksportuje naviagation
import { Navigation } from 'components';

function App() {

  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
