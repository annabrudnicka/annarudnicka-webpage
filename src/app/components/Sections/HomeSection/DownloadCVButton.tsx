type DownloadCVButtonProps = {
  className?: string;
};

export default function DownloadCVButton({ className }: DownloadCVButtonProps) {
  return (
    <button className={`border-zinc-300 ${className}`}>
      <a href="/docs/CV_AnnaAbramowicz.pdf" download>
        Download CV
      </a>
    </button>
  );
}
