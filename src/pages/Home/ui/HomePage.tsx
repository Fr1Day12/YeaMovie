import StreamSection from "@/pages/Home/ui/Stream/ui/StreamSection";
import Questions from "@/pages/Home/ui/Questions/ui/Questions";
import SectionHeader from "@/pages/Home/ui/SectionHeader/ui/SectionHeader";
import Plan from "@/widgets/Plan/ui/Plan";
import HomePageSlider from "@/pages/Home/ui/HomePageSlider/ui/HomePageSlider";

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
