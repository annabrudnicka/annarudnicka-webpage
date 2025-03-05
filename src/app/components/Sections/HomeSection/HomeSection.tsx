import Image from "next/image";
import Header from "./Header";

const HomeSection = () => {
  return (
    <section className="w-full h-screen">
      <div className="px-4">
        <Header />
        <div className="flex items-center justify-start max-w-5xl mx-auto h-[calc(100vh_-_150px)]">
          <div className="animate-left-animation">
            <Image
              src="/programmingGirl.gif"
              alt="Next.js logo"
              width={600}
              height={500}
              unoptimized
            />
          </div>
          <div className="animate-right-animation flex flex-col justify-center   space-y-8">
            <span className="text-gray-500 text-4xl">Hi, I&apos;m</span>
            <span className="text-4xl font-bold">Anna Abramowicz</span>
            <span className="text-4xl">Front-End Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
