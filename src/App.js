import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';
import "./App.css";


const projectID = '601e2992-0adb-42c0-98d8-3b90649ca363';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// const App = () => {
//   return (
//     <ChatEngine 
//           height="100vh"
//           projectID="601e2992-0adb-42c0-98d8-3b90649ca363"
//           userName="user_1"
//           userSecret="secret"
//           renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps} />}
//      />
//   );
// }
export default App;

