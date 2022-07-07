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
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default PubilcRoutes;