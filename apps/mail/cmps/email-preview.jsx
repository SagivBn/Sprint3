export function EmailPreview({email, history}) {
    return (
        <article className='email-preview'>
            {/* <div className='emailRow'> */}
            {/* <div className='emailRow-options'> */}
            <input className='email-checkbox' type='checkbox' name='' id='' />
            <span className='material-icons material-star'> star_border </span>
            <span className='material-icons material-label'> label_important </span>
            {/* </div> */}
            <div className='email-header'></div>
            {/* </div> */}

            <h3 className='email-from'>{email.from}</h3>

            <div className='email-data'>
                <h3 className='email-subject'>{email.subject}</h3>
                {/*short text*/}
            </div>
            <span className='sent-at'> yday</span>
        </article>
    );
}
