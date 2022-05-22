import './App.css';
import InputArea from './components/InputArea/InputArea';
import Messages from './components/Messages/Messages';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <Modal />
      <div className='chat'>
        <Messages />
        <InputArea />
      </div>
    </div>
  );
}

export default App;
