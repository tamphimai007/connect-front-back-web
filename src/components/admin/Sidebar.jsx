import { BookDashed, User } from "lucide-react";
import { Link } from "react-router";

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
      <div className="flex-1 py-4">
        <Link
          className="flex items-center hover:bg-green-700 hover:duration-200
          rounded-sm px-3 py-2 gap-2"
          to={"/admin"}
        >
          <span className="text-xl">
            <BookDashed />
          </span>
          Dashboard
        </Link>
      </div>
      {/* /Navlink */}
    </div>
  );
};
export default Sidebar;
