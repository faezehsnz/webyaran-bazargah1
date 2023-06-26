import { Routes, Route } from "react-router-dom";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import {setUserID} from "components/store/actions";

// @mui icons
import Ticket from "layouts/profile";
import Canceled from "layouts/canceled";
import Reservation from "layouts/reservation";
import ShowDetail from "layouts/showDetail";
import Dashboard from "layouts/dashboard";
import { connect } from "react-redux";
import Tables from "layouts/tables";
import Tables2 from "layouts/tables copy";
function Rouess(props) {
  const local = JSON.parse(localStorage.getItem('key'))
  return (
    <Routes>
      <Route index element={<SignIn />} />
      {local != null ? local.role == 2 ?  <Route path="addbar" element={<Tables />} /> :null :null}
      {local != null ? local.role == 3 ?  <Route path="addbarn" element={<Tables2 />} /> :null :null}
      {local != null ? local.role == 2 ?  <Route path="dashboard" element={<Dashboard />} /> :null :null}
      <Route path="reservation" element={<Reservation />} />
      <Route path="waiting" element={<Billing />} />
      <Route path="havale" element={<RTL />} />
      <Route path="intheway" element={<Notifications />} />
      <Route path="canceled" element={<Canceled />} />
      <Route path="ticket" element={<Ticket />} />
      <Route path="/authentication/sign-up" element={<SignUp />} />
      <Route path="/bar/show" element={<ShowDetail />} />
    </Routes>
  );
}
const mapStateToProps = (state) => ({
    userId: state.userId
  });
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setUserID: (value) => dispatch(setUserID(value)),
    };
  };
export default  connect(mapStateToProps, mapDispatchToProps)(Rouess);
