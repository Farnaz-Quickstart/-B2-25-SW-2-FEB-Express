import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddStudent from './components/AddStudent';
import ListStudents from './components/ListStudents';

function App() {
  return (
    <div className="App">
      <h1>This is my Client Project</h1>
      <AddStudent />
      <ListStudents />
    </div>
  );
}

export default App;
