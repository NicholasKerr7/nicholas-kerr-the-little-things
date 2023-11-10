// import { Link } from "react-router-dom";
// import "./NavBar.scss";
// import HomeIcon from "../../assets/capstone-icons/home-icon.svg";
// import TodoIcon from "../../assets/capstone-icons/todo-icon.svg";
// import ProfileIcon from "../../assets/capstone-icons/profile-icon.svg";
// import CreateIcon from "../../assets/capstone-icons/create-icon.svg";
// import ShareIcon from "../../assets/capstone-icons/share-icon.svg";
// import React from "react";

// export default function NavBar () {
//     return (
//   <section className="navbar">
//     <div className="navbar__container-left">
//     <Link to="/todos" >
//         <img className="navbar__home" src={HomeIcon} alt="" />
//       </Link>
//       <Link to="todos/1/tasks" >
//         <img className="navbar__todo" src={TodoIcon} alt="" />
//       </Link>
//     </div>
//     <div className="navbar__container-center">
//       <Link className="navbar__create-link" to="1/new-task" >
//         <img className="navbar__create" src={CreateIcon} alt="" />
//       </Link>
//     </div>
//     <div className="navbar__container-right">
//     <Link to="" >
//         <img className="navbar__stats" src={ShareIcon} alt="" />
//       </Link>
//       <Link to="/" >
//         <img className="navbar__profile" src={ProfileIcon} alt="" />
//       </Link>
//     </div>
//   </section>
//     )
//   };


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import HomeIcon from "../../assets/capstone-icons/home-icon.svg";
import TodoIcon from "../../assets/capstone-icons/todo-icon.svg";
import ProfileIcon from "../../assets/capstone-icons/profile-icon.svg";
import CreateIcon from "../../assets/capstone-icons/create-icon.svg";
import ShareIcon from "../../assets/capstone-icons/share-icon.svg";

export default function NavBar() {
  useEffect(() => {
    const navList = document.querySelectorAll(".list");
  
    function activeLink(event) {
      navList.forEach((item) => item.classList.remove("active"));
      event.currentTarget.classList.add("active");
    }
  
    navList.forEach((item) => item.addEventListener("click", activeLink));
  
    return () => {
      navList.forEach((item) => item.removeEventListener("click", activeLink));
    };
  }, []);

  return (
    <div className="navigation">
      <ul className="container">
        <li className="list active">
          <Link className="link" to="/todos">
            <img className="icon" src={HomeIcon} alt="" />
            <span className="text">HOME</span>
          </Link>
        </li>
        <li className="list">
          <Link className="link" to="todos/1/tasks">
            <img className="icon" src={TodoIcon} alt="" />
            <span className="text">TODO</span>
          </Link>
        </li>
        <li className="list">
          <Link className="link" to="1/new-task">
            <img className="icon" src={CreateIcon} alt="" />
            <span className="text">CREATE</span>
          </Link>
        </li>
        <li className="list">
          <Link className="link" to="#">
            <img className="icon" src={ShareIcon} alt="" />
            <span className="text">SHARE</span>
          </Link>
        </li>
        <li className="list">
          <Link className="link" to="/">
            <img className="icon" src={ProfileIcon} alt="" />
            <span className="text">PROFILE</span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
}

// export default function NavBar() {
//   const [activeElement, setActiveElement] = useState(null);

//   useEffect(() => {
//     const handleItemClick = (event) => {
//       // Remove "active" class from the previously active element
//       if (activeElement) {
//         activeElement.classList.remove("active");
//       }

//       // Add "active" class to the clicked element
//       event.currentTarget.classList.add("active");

//       // Update the activeElement state
//       setActiveElement(event.currentTarget);
//     };

//     const navList = document.querySelectorAll(".list");

//     // Attach click event listeners
//     navList.forEach((item) => item.addEventListener("click", handleItemClick));

//     // Cleanup function to remove event listeners when the component unmounts
//     return () => {
//       navList.forEach((item) => item.removeEventListener("click", handleItemClick));
//     };
//   }, [activeElement]); // Include activeElement in the dependency array to avoid stale closures

//   const navigationItems = [
//     { to: "/todos", icon: HomeIcon, text: "HOME" },
//     { to: "todos/1/tasks", icon: TodoIcon, text: "TODO" },
//     { to: "1/new-task", icon: CreateIcon, text: "CREATE" },
//     { to: "#", icon: ShareIcon, text: "SHARE" },
//     { to: "/", icon: ProfileIcon, text: "PROFILE" },
//   ];

//   return (
//     <div className="navigation">
//       <ul className="container">
//         {navigationItems.map(({ to, icon, text }, index) => (
//           <li key={to} className={`list ${index === 0 ? 'active' : ''}`}>
//             <Link className="link" to={to}>
//               <img className="icon" src={icon} alt="" />
//               <span className="text">{text}</span>
//             </Link>
//           </li>
//         ))}
//         <div className="indicator"></div>
//       </ul>
//     </div>
//   );
// }