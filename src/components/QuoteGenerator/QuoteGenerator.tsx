import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import eyImage from "../../assets/ey.webp";

interface QuoteData {
  text: string;
}

const MAX_CHARS = 140;

export const QuoteGenerator = () => {
  const [quote, setQuote] = useState<QuoteData>({
    text: "Write your quote here",
  });

  const quoteRef = useRef<HTMLDivElement>(null);

  const handleQuoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length <= MAX_CHARS) {
      setQuote((prev) => ({ ...prev, text: newText }));
    }
  };

  const downloadImage = async () => {
    if (!quoteRef.current) return;

    const canvas = await html2canvas(quoteRef.current);
    const link = document.createElement("a");
    link.download = "my-quote.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const remainingChars = MAX_CHARS - quote.text.length;

  // Calculate dynamic text size based on content length
  const getTextSize = () => {
    const length = quote.text.length;
    if (length > 100) return "text-2xl";
    if (length > 50) return "text-3xl";
    return "text-4xl";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8 pb-4">
      {/* Preview Section */}
      <div
        ref={quoteRef}
        className="bg-black text-white p-8 rounded-lg shadow-xl w-[800px] mx-auto"
      >
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center">
            <div className="w-[160px] h-[160px] rounded-full overflow-hidden flex-shrink-0 shadow-2xl">
              <img
                src={eyImage}
                alt="Eric Yapura"
                className="w-full h-full object-cover grayscale contrast-125 brightness-90"
              />
            </div>
            <div className="inline-flex flex-col items-center">
              <p
                className={`${getTextSize()} font-serif italic break-all text-center pl-4`}
              >
                "{quote.text}"
              </p>
              <div className="mt-6 self-center">
                <p className="text-xl">- Eric Yapura</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="sm:w-[800px] w-[95%] mx-auto">
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-medium text-gray-300">
              Quote text
            </label>
            <span
              className={`text-sm ${
                remainingChars < 20 ? "text-red-500" : "text-gray-400"
              }`}
            >
              {remainingChars} characters remaining
            </span>
          </div>
          <textarea
            value={quote.text}
            onChange={handleQuoteChange}
            placeholder="Write something... 🤔"
            className="w-full p-2 bg-[#002b4f] border border-[#003d73] rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#004a8f] focus:border-transparent shadow-lg"
            rows={3}
            maxLength={MAX_CHARS}
          />
        </div>
        <button
          onClick={downloadImage}
          className="mt-4 bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-500 active:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#001f3d] shadow-lg hover:shadow-emerald-500/30 font-semibold transition-all duration-200 border border-emerald-500/20"
        >
          Download image
        </button>
      </div>
    </div>
  );
};
