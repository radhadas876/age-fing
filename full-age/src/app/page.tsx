import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AgeCalculator } from "@/components/AgeCalculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FullAge - Age Calculator",
  description: "Calculate your age in years, months, weeks, days, hours, minutes, and seconds.",
};

export default function Home() {
  return (
    <main>
      <Header />
      <div className="calculator-container py-6">
        <AgeCalculator />
      </div>
      <Footer />
    </main>
  );
}
