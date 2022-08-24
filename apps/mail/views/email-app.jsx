<<<<<<< HEAD
import { emailService } from '../services/email.service.js';
=======
import {emailService} from '../services/email.service.js';
import {EmailFilter} from '../cmps/email-filter.jsx';
import {EmailList} from '../cmps/email-list.jsx';
>>>>>>> 12d83256e9ba84c68a577d1bcd64b49c54e1f6f6

export class MailApp extends React.Component {
    state = {
        emailsToShow: null,
        filterBy: null,
        selectedEmail: null,
    };

    componentDidMount() {
        this.loadEmails();
    }

    loadEmails = () => {
        emailService.query(this.state.filterBy).then(emailsToShow => this.setState({ emailsToShow }));
    };

    onSetFilter = filterBy => {
        this.setState({ filterBy }, this.loadEmails());
    };

    onCreateEmail = () => {
        return emailService.query(this.state.filterBy).then(emailsToShow => this.setState({ emailsToShow }))
    }

    render() {
        const { emailsToShow } = this.state;
        const { onCreateEmail } = this;
        //we can add loading animation here
        // if (!emailsToShow) return <h1>Loading...</h1>;
        return (
            <section>
                {/* <NewEmail createEmail={onCreateEmail} /> */}
                <EmailFilter onSetFilter={this.onSetFilter} />
                <EmailList emails={emailsToShow} history={this.props.history} />
            </section>
        );
    }
}
