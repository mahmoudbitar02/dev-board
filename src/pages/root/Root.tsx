import { Link, Outlet } from "react-router-dom";
import { LayoutDashboard, CircleUserRound } from "lucide-react";

function Root() {
  return (
    <div className="">
      <nav className=" bg-slate-950 p-2 border-b border-primary">
        <div className="container py-2.5 px-4 text-white mx-auto  max-w-7xl flex items-center justify-between">
          <Link to="boards" className="flex items-center gap-2 text-primary ">
            <LayoutDashboard className="h-5 w-5" />
            <button className="text-lg font-bold hover:cursor-pointer">Devboard</button>
          </Link>
          <Link to="profile" className="group flex items-center gap-2 ">
            <CircleUserRound className="w-5 h-5 text-slate-300  group-hover:text-primary transition-all duration-200 " />
            <button className="text-sm hover:cursor-pointer">Nutzer</button>
          </Link>
        </div>
      </nav>
      <main className="container py-2.5 px-4 mx-auto max-w-7xl flex items-center justify-between">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
