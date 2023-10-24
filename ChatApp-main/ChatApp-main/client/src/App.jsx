import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import './App.css'
import ChatPage from './components/ChatPage';
import ChatProvider from './Context/ChatProvider';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BrowserRouter>
      <ChatProvider>
      <Routes>
      <Route path = '/' element={<Homepage/>} />
      <Route path = '/chats' element={<ChatPage/>} />
      </Routes>
      </ChatProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
