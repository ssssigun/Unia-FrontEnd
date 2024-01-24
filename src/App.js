import './App.css';
import testJson from './json/test.json'

function App() {
  return (
    <div className="App">
      <div class="test">
        <p> {testJson.name}</p>
        <p> {testJson.age}</p>
        <p> {testJson.msg}</p>
      </div>
    </div>
  );
}

export default App;
