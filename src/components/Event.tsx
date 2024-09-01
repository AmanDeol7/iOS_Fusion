
interface EventProps {
  className?: string;
  onClick?: () => void;
}

export default function Event({ className, onClick }: EventProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl w-[25rem] text-white p-2 ${className}`}
    >
      <h1 className="text-base">Event 1: iOS Fusion</h1>
      <p className="text-xs text-gray-300">9:00AM - 10:30AM</p>
      <p className="text-xs">ANNA AUDITORIUM</p>
    </div>
  );
}
