import { QuoteGenerator } from "./components/QuoteGenerator/QuoteGenerator";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#001f3d]">
      <header className="w-full bg-[#002b4f] shadow-lg border-b border-[#003d73]">
        <h1 className="text-3xl font-bold text-gray-100 text-center py-6">
          Eric's quote generator
        </h1>
      </header>
      <main className="flex-1 w-full py-8">
        <QuoteGenerator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
