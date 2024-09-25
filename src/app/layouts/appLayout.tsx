import Trial from "@/entities/Trial/Trial";
import Footer from "@/widgets/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Outlet />
      <Trial />
      <Footer />
    </>
  );
};

export default App;
