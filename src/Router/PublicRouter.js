import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages
import Home from "../pages/Home/Home";
import Featured from "../components/Featured-in";
import Work from "../components/Work";
import DownloadApp from "../components/DownloadApp";
import ProudPartners from "../components/ProudPartners";
import ChooseUs from "../components/ChooseUs";
import Footer from "../components/Footer";
import About from "../pages/About/About";
import Header from "../components/Header";
import Faq from "../components/Faq";
import BetterBusiness from "../components/BetterBusiness";
import Services from "../pages/Services/Services";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetails from "../pages/Blogs/BlogDetails";
import Faqs from "../pages/FAQ/Faq";
import Contact from "../pages/Contact/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import CancellationPolicy from "../pages/CancellationPolicy/CancellationPolicy";
import RefundPolicy from "../pages/RefundPolicy/RefundPolicy";
import Terms from "../pages/Terms/Terms";
import Login from "../pages/Auth/Login";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterCustomer from "../pages/Auth/RegisterCustomer";
import RegisterCleaner from "../pages/Auth/RegisterCleaner";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ForgotOTP from "../pages/Auth/ForgotOTP";
import EnterPassword from "../pages/Auth/EnterPassword";
import Welcome from "../pages/Welcome/Welcome";
import Dashboard from "../pages/Dashboard/Dashboard";
import Makingbooking from "../pages/Dashboard/Makingbooking";
import Standard from "../pages/Dashboard/Standard";
import Search from "../pages/Dashboard/Search";
import Urgent from "../pages/Dashboard/Urgent";
import Searchurgent from "../pages/Dashboard/Searchurgent";
import Clearfound from "../pages/Dashboard/Clearfound";
import Chat from "../pages/Dashboard/Chat";
import InviteFriend from "../pages/Dashboard/InviteFriend";
import Notification from "../pages/Dashboard/Notification";
import Hired from "../pages/Dashboard/Hired";
import JobPayment from "../pages/Dashboard/JobPayment";
import ThankYou from "../pages/Dashboard/ThankYou";
import CleaningDetails from "../pages/Dashboard/CleaningDetails";
import UrgentDetail from "../pages/Dashboard/UrgentDetail";
import CustomerProfile from "../pages/Dashboard/CustomerProfile";

function PubilcRoutes() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="Featured" element={<Featured />} />
					<Route path="Work" element={<Work />} />
					<Route path="DownloadApp" element={<DownloadApp />} />
					<Route path="ProudPartners" element={<ProudPartners />} />
					<Route path="ChooseUs" element={<ChooseUs />} />
					<Route path="Footer" element={<Footer />} />
					<Route path="About" element={<About />} />
					<Route path="Faq" element={<Faq />} />
					<Route path="BetterBusiness" element={<BetterBusiness />} />
					<Route path="Services" element={<Services />} />
					<Route path="Blogs" element={<Blogs />} />
					<Route path="BlogDetails" element={<BlogDetails />} />
					<Route path="Faqs" element={<Faqs />} />
					<Route path="Contact" element={<Contact />} />
					<Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
					<Route path="CancellationPolicy" element={<CancellationPolicy />} />
					<Route path="RefundPolicy" element={<RefundPolicy />} />
					<Route path="Terms" element={<Terms />} />
					<Route path="Login" element={<Login />} />
					<Route path="LoginPage" element={<LoginPage />} />
					<Route path="RegisterCustomer" element={<RegisterCustomer />} />
					<Route path="RegisterCleaner" element={<RegisterCleaner />} />
					<Route path="ForgotPassword" element={<ForgotPassword />} />
					<Route path="ForgotOTP" element={<ForgotOTP />} />
					<Route path="EnterPassword" element={<EnterPassword />} />
					<Route path="Welcome" element={<Welcome />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="makingbooking" element={<Makingbooking />} />
					<Route path="standard" element={<Standard />} />
					<Route path="search" element={<Search />} />
					<Route path="urgent" element={<Urgent />} />
					<Route path="searchurgent" element={<Searchurgent />} />
					<Route path="clearfound" element={<Clearfound />} />
					<Route path="chat" element={<Chat />} />
					<Route path="InviteFriend" element={<InviteFriend />} />
					<Route path="notification" element={<Notification />} />
					<Route path="Hired" element={<Hired />} />
					<Route path="jobPayment" element={<JobPayment />} />
					<Route path="Thankyou" element={<ThankYou />} />
					<Route path="CleaningDetails" element={<CleaningDetails />} />
					<Route path="UrgentDetails" element={<UrgentDetail />} />
					<Route path="CustomerProfile" element={<CustomerProfile />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default PubilcRoutes;
