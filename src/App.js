import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Faq from "./Components/Middle/Faqs/FAQ";
import ReviewSlider from "./Components/Middle/Reviews";
// const Hero = React.lazy(() => import('./Components/Hero/Hero'))
import Navbar from "./Components/Header/Navbar";
import { useSelector } from "react-redux";
import Login from "./Components/Auth/Login/Login";
import Signup from "./Components/Auth/Signup/Signup";
import { ToastContainer } from "react-toastify";
import { Redirect, Route } from "react-router";
import AuthPage from "./Components/Auth/Auth Pages/AuthPage";
import Dashboard from "./Components/Auth/Dashboard/Index";
import Footer from "./Components/Footer/footer";
import Account from "./Components/Auth/Account/Account";
import About from "./Components/Page/About";
import ContactAboutPallet from "./Components/Middle/About/Main";


function App() {
  const LoginValue = useSelector((state) => state.GlobalReducer.Login);
  const SignupValue = useSelector((state) => state.GlobalReducer.Signup);

  const Logged = useSelector((state) => state.AuthReducer.ifLoggedIn);

  return (
    <React.Fragment>
      <ToastContainer limit={3} />
      {LoginValue && !Logged && <Login />}
      {SignupValue && !Logged && <Signup />}

      {/* PROTECTED CONTENT */}
      {Logged && <AuthPage />}
      {Logged ? (
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      ) : (
        <Redirect to="/" />
      )}

      {Logged ? (
        <Route path="/account">
          <Account />
        </Route>
      ) : (
        <Redirect to="/" />
      )}

      {/* UNPROTECTED CONTENT */}
      {!Logged && <Navbar />}
      <Route exact path="/">
        {!Logged ? (
          <>
            <Hero />
            <Faq />
            <ContactAboutPallet />
            <ReviewSlider />
            <Footer />
          </>
        ) : (
          <Redirect to="/dashboard" />
        )}
      </Route>
      <Route exact path="/about">
        {!Logged ? <About /> : <Redirect to="/dashboard" />}
      </Route>
    </React.Fragment>
  );
}

export default App;
