import Categories from "@/shared/ui/Categories/ui/Categories";
import StreamSection from "@/pages/Home/ui/Stream/ui/StreamSection";
import { textCategories, titleCategories } from "@/shared/constants";
import * as classes from "./classes.module.scss";
import Questions from "@/pages/Home/ui/Questions/ui/Questions";
import SectionHeader from "@/pages/Home/ui/SectionHeader/ui/SectionHeader";
import Plan from "@/widgets/Plan/ui/Plan";

const HomePage = () => {
  return (
    <>
      <SectionHeader />
      <div className={classes.container}>
        {<Categories text={textCategories} title={titleCategories} />}
      </div>
      <StreamSection />
      <Questions />
      <Plan />
    </>
  );
};

export default HomePage;
