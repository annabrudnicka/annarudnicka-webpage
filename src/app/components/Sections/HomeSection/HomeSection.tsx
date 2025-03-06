import Image from "next/image";
import Header from "./Header";

const HomeSection = () => {
  return (
    <section className="w-full h-screen">
      <div className="px-4">
        <Header />
        <div className="flex items-center justify-start max-w-6xl mx-auto h-[calc(100vh_-_150px)]">
          <div className="animate-left-animation">
            <Image
              src="/programmingGirl.gif"
              alt="Next.js logo"
              width={700}
              height={500}
              unoptimized
            />
          </div>
          <div className="font-playfair text-5xl animate-right-animation flex flex-col justify-center w-fit space-y-8">
            <span className="text-gray-500 ">Hi, I&apos;m</span>
            <span className="font-bold">Anna Abramowicz</span>
            <span>Front-End Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
