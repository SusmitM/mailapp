import {Route,Routes} from "react-router-dom";
import { Home } from "../pages/Home";
import { Inbox } from "../pages/Inbox";
import { Sent } from "../pages/Sent";
import { IndividualEmailPage } from "../pages/IndividualEmailPage";

export const AllRoutes=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inbox" element={<Inbox/>} />
            <Route path="/sent" element={<Sent />} />
            <Route path="/email/:EmailId" element={<IndividualEmailPage />} />
        </Routes>
        </>
    )
}