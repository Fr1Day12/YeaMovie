import Trial from "@/widgets/Trial/ui/Trial";
import Footer from "@/widgets/Footer/ui/Footer";
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
