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
import Barnameh from "layouts/barnameh";
import Accepted from 'layouts/reservation copy/index'
import Users from "layouts/users";
import Print from "layouts/barnameh/print";
import NamoteAref from "layouts/namoteAref";
import Print1 from "layouts/rtl/print";
import AboutUs from "layouts/aboutUs";
import Guid from "layouts/guid";
function Rouess(props) {
  const local = JSON.parse(localStorage.getItem('key'))
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="key" element={<Guid />} />
      <Route path="reservation" element={<Reservation />} />
      <Route path="waiting" element={<Billing />} />
      <Route path="havale" element={<RTL />} />
      <Route path="intheway" element={<Notifications />} />
      <Route path="done" element={<Canceled />} />
      <Route path="ticket" element={<Ticket />} />
      <Route path="/authentication/sign-up" element={<SignUp />} />
      <Route path="/bar/show" element={<ShowDetail />} />
      <Route path="/addbarn" element={<Barnameh />} />
      <Route path="/print" element={<Print />} />
      <Route path="/havale/show" element={<Print1 />} />
      {local != null ? local.role == 4 ?  <Route path="/users" element={<Users />} /> :null :null}
      {local != null ? local.role == 2 || 4 ?  <Route path="/addbar" element={<Tables />} /> :null :null}
      {local != null ? local.role == 3 || 4 ?  <Route path="/accepted" element={<Accepted />} /> :null :null}
      {local != null ? local.role == 3 || 4 ?  <Route path="/namot" element={<NamoteAref />} /> :null :null}
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
