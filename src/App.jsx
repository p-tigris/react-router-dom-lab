import { Route, Routes } from "react-router";
import LetterForm from "./components/LetterForm/LetterForm";
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import { useState } from "react";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
  }

  const [letters, setLetters] = useState([]);

  const addLetter = (newLetter) => {
    setLetters([...letters, newLetter]);
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <main><h1>Post Office</h1></main> } />
        <Route path="/mailboxes" element={ <MailboxList mailboxes={ mailboxes }/> } />
        <Route path="/new-mailbox" element={ <MailboxForm addBox={ addBox } /> } />
        <Route path="/mailboxes/:mailboxId" element={ <MailboxDetails mailboxes={mailboxes} letters={letters}/> } />
        <Route path="/new-letter" element={ <LetterForm mailboxes={ mailboxes } addLetter={ addLetter } /> } />
        <Route path="*" element={ <h2>Mailbox Not Found!</h2> } />
      </Routes>
    </>
  )
};

export default App;

