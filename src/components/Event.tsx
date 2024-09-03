
interface EventProps {
  className?: string;
  onClick?: () => void;
}

export default function Event({ className, onClick }: EventProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl w-[23rem] text-white px-5 py-3 font-bold ${className}`}
    >
      <h1 className="text-base">EVENT 1 : iOS FUSION INTRO</h1>
      <p className="text-xs text-[#9f82f1]">9:00AM - 10:30AM</p>
      <p className="text-xs text-gray-400">ANNA AUDITORIUM</p>
    </div>
  );
}
