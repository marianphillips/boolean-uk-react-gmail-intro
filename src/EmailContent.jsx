import EmailHeader from './EmailHeader'
import EmailBody from './EmailBody'
import EmailActions from './EmailActions'
import EmailComposer from './EmailComposer'

const EmailContent = () => {
return  <article className="email-content">
<div className="title">
  <h1>Welcome to Flaticon</h1>
</div>
<EmailHeader />
<EmailBody />
<EmailActions />
<EmailComposer />
</article>
}

export default EmailContent