import { Link } from "react-router";

const MailboxList = (props) => {

    return (
        <>
            <h1>Mailbox List</h1>
            <ul>
                {props.mailboxes.map((mailbox, index) => (
                    <li key={index} className="mail-box">
                        <Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MailboxList;