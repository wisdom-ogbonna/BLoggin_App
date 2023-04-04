import { Outlet } from "react-router-dom";
import Header from "./header";
import Learnmore from "./Learnmore";



export default function Layout() {
    return (
        <main>
          <Header/>

    
          {/* This element will render either <DashboardMessages> when the URL is
              "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
          */}
          <Outlet />

        </main>
      );
}
