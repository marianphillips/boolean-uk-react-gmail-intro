import EmailHeader from './EmailHeader.js'
import EmailBody from './EmailBody.js'
import EmailActions from './EmailActions.js'

const EmailContent = () => {
return  <article className="email-content">
<div className="title">
  <h1>Welcome to Flaticon</h1>
</div>
<EmailHeader />
<EmailBody />
<EmailActions />
</article>
}

export default EmailContent