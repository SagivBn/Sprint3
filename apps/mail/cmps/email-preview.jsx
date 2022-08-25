export function EmailPreview({email, history}) {
    return (
        <article className='email-preview'>
            <div className='emailRow'>
                <div className='emailRow__options'>
                    <input type='checkbox' name='' id='' />
                    <span className='material-icons'> star_border </span>
                    <span className='material-icons'> label_important </span>
                </div>
                <div className='email-header'></div>
                <h3 className='email-from'>{email.from}</h3>
                <h3 className='email-subject'>{email.subject}</h3>
            </div>
        </article>
    );
}
