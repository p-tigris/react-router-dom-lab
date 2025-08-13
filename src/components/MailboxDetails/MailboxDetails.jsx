import { useParams } from "react-router";

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();

    const selectedMailbox = props.mailboxes.find(mailbox => mailbox._id === Number(mailboxId));

    if (!selectedMailbox) {
        return <h2>Mailbox Not Found!</h2>;
    }

    return (
        <>
            <h1>Mailbox {selectedMailbox._id}</h1>
            <h2>Details</h2>
            <dl>
                <div className="details">
                <dt>Boxholder:</dt> 
                <dd>{selectedMailbox.boxOwner}</dd>
                </div>
                <div className="details">
                <dt>Box Size:</dt> 
                <dd>{selectedMailbox.boxSize}</dd>
                </div>
            </dl>
            <h2>Letters</h2>
            <dl>
            {props.letters.map((letter, index) => (
                Number(letter.mailboxId) === selectedMailbox._id ? 
                <div key={index}>
                    <p>Dear {letter.recipient},</p>
                    <p>{letter.message}</p>
                </div> : ''
            ))}
            </dl>

        </>

    )
}

export default MailboxDetails;