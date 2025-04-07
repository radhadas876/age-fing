import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="calculator-footer">
      <div className="calculator-container">
        <p className="mb-4">
          FullAge.net's sole focus is to provide fast, comprehensive, convenient, free online calculators in a plethora of areas.
          Currently, we have age calculators to help you "do the math" quickly for determining your precise age.
          Our goal is to become the one-stop, go-to site for people who need to make quick age calculations.
          Additionally, we believe the internet should be a source of free information.
          Therefore, all of our tools and services are completely free, with no registration required.
        </p>
        <p className="mb-4">
          We coded and developed each calculator individually and put each one through strict, comprehensive testing.
          However, please inform us if you notice even the slightest error – your input is extremely valuable to us.
          Our age calculators are designed to be universally applicable for worldwide usage.
        </p>
        <div className="text-center border-t border-gray-300 pt-2 mt-4">
          <Link href="/" className="text-blue-600 hover:underline mx-2">about us</Link> |
          <Link href="/" className="text-blue-600 hover:underline mx-2">sitemap</Link> |
          <Link href="/" className="text-blue-600 hover:underline mx-2">terms of use</Link> |
          <Link href="/" className="text-blue-600 hover:underline mx-2">privacy policy</Link>
          &nbsp; © 2023 - {currentYear} <Link href="/" className="text-blue-600 hover:underline">fullage.net</Link>
        </div>
      </div>
    </footer>
  );
}
