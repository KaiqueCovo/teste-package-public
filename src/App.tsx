import { CometChatWrapper } from '@criticalmassbr/dialog-comet-chat';

import './App.css'

// const config = {
//   APP_ID: "278545b7b1e4edc4",
//   REGION: "us", // ou "eu" dependendo da sua região
//   AUTH_KEY: "7411161cda5f3f22216c40d1ac6ddedcead518ba"
// };


function App() {
  return <CometChatWrapper colors={{
    primary: "red",
    secondary: "green"
  }} />
}

export default App
