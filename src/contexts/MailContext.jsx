import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../apis/fakefetch";
const MailContext = createContext();

export const MailContextProvider = ({ children }) => {
  const [EmailData, setEmailData] = useState([]);
  const [SentEmailData, setSentEmailData] = useState([]);

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/allemails");
      setEmailData(response.data.emails);
      setSentEmailData(response.data.sentEmails);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const markAsRead = (selectedMail) => {
    const updatedMail = { ...selectedMail, read: true };
    setEmailData(
      EmailData.map((email) =>
        email.id == selectedMail.id ? updatedMail : email
      )
    );
  };
  const { readMails, unreadMails } = EmailData.reduce(
    (acc, crr) => {
      if (crr.read) {
        acc = { ...acc, readMails: acc.readMails + 1 };
      } else {
        acc = { ...acc, unreadMails: acc.unreadMails + 1 };
      }
      return acc;
    },
    { readMails: 0, unreadMails: 0 }
  );

  return (
    <>
      <MailContext.Provider value={{ EmailData, SentEmailData, markAsRead,readMails,unreadMails }}>
        {children}
      </MailContext.Provider>
    </>
  );
};

export const useMailContext = () => useContext(MailContext);
