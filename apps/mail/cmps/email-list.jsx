import {EmailPreview} from '../cmps/email-preview.jsx';

export function EmailList({emails, history}) {
    return (
        <section className='email-list'>
            {/* {emails.map(email => (
                <EmailPreview history={history} email={email} key={email.id} />
            ))} */}
            {/* onSelectBook={onSelectBook} */}
        </section>
    );
}
