import { useMailContext } from "../contexts/MailContext";
import { NavLink } from "react-router-dom";
export const Inbox = () => {
  const { EmailData, markAsRead, readMails, unreadMails } = useMailContext();

  return (
    <>
      <h1> My Inbox </h1>

      <div className="inboxHeader">
        <h4>Unread Email: {unreadMails}</h4>
        <h4>Read Emails: {readMails}</h4>
      </div>

      <div className="mailContainer">
        {EmailData.map((emailData) => {
          const { id, sender, subject, message, read } = emailData;
          return (
            <div className="emailCard">
              <div className={read ? "circleGreen" : "circleRed"}></div>
              <NavLink to={`/email/${id}`}>
                <span className="emailTitle">{subject}</span>
              </NavLink>
              {read ? (
                ""
              ) : (
                <button
                  className="markAsRead"
                  onClick={() => {
                    markAsRead(emailData);
                  }}
                >
                  Mark as read
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="BtnBox">
        <NavLink to="/inbox">
          <button className="btn Inbox">Inbox</button>
        </NavLink>
        <NavLink to="/sent">
          <button className="btn Sent">Sent Mails</button>
        </NavLink>
      </div>
    </>
  );
};
