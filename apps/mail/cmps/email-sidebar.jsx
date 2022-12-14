export function EmailSideBar() {
    return (
        <section className='test'>
            <section className='email-sidebar'>
                <div className='sidebarOption sidebarOption-active'>
                    <span className='material-icons'> inbox </span>
                    <h3>Inbox</h3>
                </div>

                <div className='sidebarOption'>
                    <span className='material-icons'> star </span>
                    <h3>Starred</h3>
                </div>

                <div className='sidebarOption'>
                    <span className='material-icons'> access_time </span>
                    <h3>Snoozed</h3>
                </div>

                <div className='sidebarOption'>
                    <span className='material-icons'> label_important </span>
                    <h3>Important</h3>
                </div>

                <div className='sidebarOption'>
                    <span className='material-icons'> near_me </span>
                    <h3>Sent</h3>
                </div>

                <div className='sidebarOption'>
                    <span className='material-icons'> note </span>
                    <h3>Drafts</h3>
                </div>

                <div className='sidebarOption'>
                    <span className='material-icons'> expand_more </span>
                    <h3>More</h3>
                </div>

                <div className='sidebar-footer'>
                    <div className='sidebar-footerIcons'>
                        <span className='material-icons'> person </span>
                        <span className='material-icons'> duo </span>
                        <span className='material-icons'> phone </span>
                    </div>
                </div>
            </section>
        </section>
    );
}
