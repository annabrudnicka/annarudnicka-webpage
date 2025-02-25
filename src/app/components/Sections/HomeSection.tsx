import Image from "next/image";
import Menu from "../Menu";

const HomeSection = () => {
  return (
    <section className="w-full h-screen">
      <div className="px-4">
        <div className="flex justify-between py-4">
          <span className="text-left">tel.: +48 530 728 298</span>
          <span className="text-right">email: anna.b.abramowicz@gmail.com</span>
        </div>
        <span className="block h-[0.5px] w-[120vw] -ml-10 bg-black"></span>
        <Menu />
        <div className="flex w-screen justify-center h-96">
          <div className="image-animation">
            <Image
              src="/programmingGirl.gif"
              alt="Next.js logo"
              width={500}
              height={96}
            />
          </div>
          <div className="flex flex-col justify-center space-y-8 text-animation">
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
