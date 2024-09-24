import Categories from "@/shared/Categories/Categories";
import Plan from "@/pages/Home/Plan/Plan";
import Questions from "@/pages/Home/Questions/Questions";
import SectionHeader from "@/pages/Home/SectionHeader/SectionHeader";
import StreamSection from "@/pages/Home/Stream/StreamSection";
import { textCategories, titleCategories } from "@/shared/constants";
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
    </>
  );
};

export default HomePage;
