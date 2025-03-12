import Image from "next/image";
import DownloadCVButton from "./DownloadCVButton";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="text-sm">
      <div className="hidden sm:flex justify-between items-center py-3">
        <span className="text-left w-[276px]">+48 530 728 298</span>
        <DownloadCVButton />
        <span className="text-right w-[350px]">
          anna.b.abramowicz@gmail.com
        </span>
      </div>
      <span className="block h-[0.5px] w-[120vw] -ml-10 bg-zinc-300"></span>
      <div className="flex items-center justify-between">
        <Image
          src="/logos/AnnaAbramowiczLogo.png"
          alt="AnnaAbramowiczLogo icon"
          width={220}
          height={250}
          priority={true}
          className="h-auto w-auto"
        />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
