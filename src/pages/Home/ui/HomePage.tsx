import SectionHeader from "@/widgets/SectionHeader/ui/SectionHeader";
import Plan from "@/widgets/Plan/ui/Plan";
import HomePageSlider from "@/widgets/HomePageSlider/ui/HomePageSlider";
import { Questions } from "@/features/question";
import { StreamSection } from "@/pages/Home/ui/Stream";

const HomePage = () => {
  return (
    <>
      <SectionHeader />
      <HomePageSlider />
      <StreamSection />
      <Questions />
      <Plan />
    </>
  );
};

export default HomePage;
