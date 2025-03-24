import { BlurFadeDemo } from "@/components/demos/blur-fade-demos";
import Footer from "@/components/ui/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShowcaseNavbar from "@/components/ui/showcase-navbar";

const Showcase = () => {
  return (
    <div
      className="overflow-clip 
      inset-0 
      -z-10 min-h-screen w-full bg-[#fafafa]
      bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
      bg-[size:6rem_4rem]"
    >
      <div
        className="absolute bottom-0 left-0 
        right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"
      ></div>
      <ShowcaseNavbar />

      {/* Title Section */}
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto pt-32">
        {" "}
        {/* pt-32 pushes content below sticky navbar */}
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center z-20"
            words="Design and development that helps streamline your business at scale."
          />
        </div>
        <p className="md:text-center text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500">
          Have a look at some of our recent projects.
        </p>
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-10">
          <BlurFadeDemo />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Showcase;
