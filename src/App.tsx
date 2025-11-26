import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/hero/HeroSection';
import BenchmarkSection from './components/benchmark/BenchmarkSection';
import ComparisonSection from './components/comparison/ComparisonSection';
import GuideSection from './components/guide/GuideSection';
import PricingSection from './components/pricing/PricingSection';
import PlaygroundSection from './components/playground/PlaygroundSection';

function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Header />
      <main>
        <HeroSection />
        <BenchmarkSection />
        <ComparisonSection />
        <GuideSection />
        <PricingSection />
        <PlaygroundSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
