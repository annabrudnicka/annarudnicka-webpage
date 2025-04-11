import Image from "next/image";
import Header from "./Header";

const HomeSection = () => {
  return (
    <section className="w-full h-screen">
      <div className="px-4 h-full">
        <Header />
        <div className="flex flex-col sm:flex-row-reverse justify-evenly sm:items-center max-w-6xl mx-auto h-[calc(100vh_-_150px)]">
          <div className="font-playfair text-3xl sm:text-5xl animate-right-animation flex flex-col items-end sm:items-start sm:justify-center mr-7 sm:w-fit  space-y-4 sm:space-y-8 ">
            <span className="text-gray-500 ">Hi, I&apos;m</span>
            <span className="font-bold">Anna Abramowicz</span>
            <span>Software Developer</span>
          </div>
          <div className="animate-left-animation">
            <Image
              src="/programmingGirl.gif"
              alt="Next.js logo"
              width={700}
              height={500}
              unoptimized
              priority={true}
              className="w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
