import Trial from "@/entities/Trial/Trial";
import Categories from "@/pages/Home/Categories/Categories";
import Plan from "@/pages/Home/Plan/Plan";
import Questions from "@/pages/Home/Questions/Questions";
import SectionHeader from "@/pages/Home/SectionHeader/SectionHeader";
import StreamSection from "@/pages/Home/Stream/StreamSection";
import { textCategories, titleCategories } from "@/shared/constants";
import Footer from "@/widgets/Footer/Footer";
import * as classes from "./classes.module.scss";

const HomePage = () => {
  return (
    <>
      <SectionHeader />
      <div className={classes.container}>
        <Categories text={textCategories} title={titleCategories} />
      </div>
      <StreamSection />
      <Questions />
      <Plan />
      <Trial />
      <Footer />
    </>
  );
};

export default HomePage;
