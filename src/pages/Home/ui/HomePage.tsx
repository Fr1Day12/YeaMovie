import Categories from "@/shared/ui/Categories/ui/Categories";
import SectionHeader from "@/widgets/SectionHeader/ui/SectionHeader";
import StreamSection from "@/widgets/Stream/ui/StreamSection";
import { textCategories, titleCategories } from "@/shared/constants";
import * as classes from "./classes.module.scss";
import Plan from "@/widgets/Plan/ui/Plan";
import Questions from "@/widgets/Questions/ui/Questions";

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
