import { useState } from "react";
import { useNavigate } from "react-router";
import MailboxDetails from "../MailboxDetails/MailboxDetails";

const initialState = {
    mailboxId: 1,
    recipient: '',
    message: '',
};

const LetterForm = (props) => {
    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addLetter(formData);
        setFormData(initialState);
        navigate(`/mailboxes/${formData.mailboxId}`);
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    return (
        <main>
            <h1>New Letter</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId">Select a Mailbox</label>
                <select id="mailboxId" name="mailboxId" value={formData.mailboxId} onChange={handleChange}>
                    {props.mailboxes.map((mailbox, index) => (
                        <option key={index} value={mailbox._id}>Mailbox {mailbox._id}</option>
                    ))}
                </select>
                <label htmlFor="recipient">Recipient</label>
                <input type="text" id="recipient" name="recipient" value={formData.recipient} onChange={handleChange}/>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
        </main>
    )

}

export default LetterForm;