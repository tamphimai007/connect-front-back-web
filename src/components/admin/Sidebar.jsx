import { BookDashed, User } from "lucide-react";
import { Link } from "react-router";
import { sidbarLink } from "../../utils/links";

const Sidebar = () => {
  return (
    <div className="bg-green-950 w-48 text-white">
      {/* Profile */}
      <div className="flex flex-col items-center gap-2 py-12">
        <User fontSize={48} />
        <span className="text-lg">Profile</span>
      </div>
      {/* /Profile */}

      {/* Navlink */}
      {sidbarLink.map((item) => {
        return (
          <div className="py-1 mx-2">
            <Link
              className="flex items-center hover:bg-green-700 hover:duration-200
              rounded-sm px-3 py-1 gap-2"
              to={item.link}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </Link>
          </div>
        );
      })}

      {/* /Navlink */}
    </div>
  );
};
export default Sidebar;
