import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup } from "react-bootstrap";

export default function KambazNavigation() {
  const location = useLocation();

  const navItems = [
    { to: "/Kambaz/Account", icon: <FaRegCircleUser className="fs-1" />, label: "Account" },
    { to: "/Kambaz/Dashboard", icon: <AiOutlineDashboard className="fs-1 text-danger" />, label: "Dashboard" },
    { to: "/Kambaz/Courses", icon: <LiaBookSolid className="fs-1 text-danger" />, label: "Courses" },
    { to: "/Kambaz/Calendar", icon: <IoCalendarOutline className="fs-1 text-danger" />, label: "Calendar" },
    { to: "/Kambaz/Inbox", icon: <FaInbox className="fs-1 text-danger" />, label: "Inbox" },
    { to: "/Labs", icon: <LiaBookSolid className="fs-1 text-danger" />, label: "Labs" },
  ];

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 110 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <ListGroup.Item
        id="wd-neu-link"
        target="_blank"
        action
        href="https://www.northeastern.edu/"
        className="bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </ListGroup.Item>

      {navItems.map(({ to, icon, label }) => {
        const isActive = location.pathname === to;
        const bgClass = isActive ? "bg-white" : "bg-black";
        const textClass = isActive ? "text-danger" : "text-white";

        return (
          <ListGroup.Item
            key={to}
            to={to}
            as={Link}
            className={`text-center border-0 ${bgClass} ${textClass}`}
          >
            {icon}
            <br />
            {label}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
