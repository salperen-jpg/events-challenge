import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <section className='section-center'>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout;
