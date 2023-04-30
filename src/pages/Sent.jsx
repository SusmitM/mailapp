import { useMailContext } from "../contexts/MailContext";
import { NavLink } from "react-router-dom"
export const Sent=()=>{
    const {SentEmailData}=useMailContext();
    console.log(SentEmailData)
    return(
        <>
        <h1>Sent Mails</h1>
        <div className="sentContainer">
      {
        SentEmailData.map(({id,to,subject,message})=>{
            
            return(
                <div className="sentEmailCard" >
                 <div className="circleGreen"></div>
                 <p><b>Subject :</b> {subject}</p>
                 <p><b>To :</b> {to}</p>
                 <p><b>Message :</b> {message}</p>
                </div>
            )
        })
      }
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
    )
}