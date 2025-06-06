import { QuoteGenerator } from "./components/QuoteGenerator/QuoteGenerator";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <header className="w-full bg-[#051027] shadow-lg border-b border-[#0a1a3c]">
        <h1 className="text-3xl font-bold text-gray-100 text-center py-6">
          Eric's quote generator
        </h1>
      </header>
      <main className="w-full py-8">
        <QuoteGenerator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
