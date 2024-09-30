import Trial from "@/widgets/Trial/ui/Trial";
import Footer from "@/widgets/Footer/ui/Footer";
import { Outlet } from "react-router-dom";
import SectionHeader from "@/pages/Home/ui/SectionHeader/ui/SectionHeader";

const App = () => {
  return (
    <>
      <SectionHeader />
      <Outlet />
      <Trial />
      <Footer />
    </>
  );
};

export default App;
