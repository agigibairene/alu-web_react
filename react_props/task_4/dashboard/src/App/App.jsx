import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { getLatestNotifications } from "../utils/utils";

function App() {
  const isLoggedIn = false;
  const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotifications() },
  ];
  return (
    <div className="app">
      <Notifications listNotifications={listNotifications} />
      <Header />
       {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
      <Footer />
    </div>
  );
}

export default App;