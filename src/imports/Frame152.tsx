import imgImage4 from "@/assets/68746a6e686237c8a714cc0a7acc3900dd7378d2.png";

function Frame1() {
  return (
    <div className="absolute bg-[rgba(247,249,252,0.75)] content-stretch flex items-center justify-center left-0 overflow-clip px-[9px] py-[8px] top-[206.5px] w-[250px]">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1c1c1c] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Moving
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[rgba(107,114,128,0.35)] overflow-clip relative rounded-[10px] size-full">
      <div className="absolute left-0 size-[250px] top-[-0.5px]" data-name="image 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[129.2%] left-[-113.72%] max-w-none top-[-14.4%] w-[244.8%]" src={imgImage4} />
        </div>
      </div>
      <Frame1 />
    </div>
  );
}