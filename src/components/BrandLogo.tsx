export default function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <span className="font-serif text-2xl tracking-[0.2em] text-[#f8f8f6] uppercase flex items-center gap-2 leading-none">
        Miah <span className="text-[#e0c88f] italic normal-case tracking-normal ml-[-4px]">Media</span>
      </span>
    </div>
  );
}

