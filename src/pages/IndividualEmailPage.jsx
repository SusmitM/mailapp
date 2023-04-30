import { useParams } from "react-router-dom";
import { useMailContext } from "../contexts/MailContext";
import { NavLink } from "react-router-dom";
export const IndividualEmailPage = () => {
  const { EmailId } = useParams();
  const { EmailData } = useMailContext();

  const selectedMail = EmailData.find(({ id }) => id === Number(EmailId));
  console.log(selectedMail);
  return (
    <>
      <h1>Mail From : {selectedMail.sender}</h1>

      <div className="SingleEmailCard">
        <p>
          <b>Subject: </b>
          {selectedMail.subject}
        </p>

        <p>
          <b>Message:</b> {selectedMail.message}
        </p>
      </div>

      <div className="SingleEmailBtnBox"><NavLink to="/inbox">
        <button className="btn Inbox"> Back To Inbox</button>
      </NavLink></div>
    </>
  );
};
