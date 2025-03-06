import DownloadCVButton from "./DownloadCVButton";
import Menu from "./Menu";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center py-4">
        <span className="text-left w-[276px]">tel.: +48 530 728 298</span>
        <DownloadCVButton />
        <span className="text-right w-[350px]">
          email: anna.b.abramowicz@gmail.com
        </span>
      </div>
      <span className="block h-[0.5px] w-[120vw] -ml-10 bg-zinc-300"></span>
      <Menu />
    </header>
  );
};

export default Header;
