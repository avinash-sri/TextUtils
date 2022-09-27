import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" />
      <TextForm heading="Enter the text to analyze" />
    </>
  );
}

export default App;
