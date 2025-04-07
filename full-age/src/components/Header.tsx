import Link from 'next/link';

export function Header() {
  return (
    <header className="calculator-header">
      <div className="calculator-container flex justify-between items-center">
        <Link href="/" className="calculator-logo">
          FullAge<span className="logo-highlight">.net</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="nav-link">FINANCIAL</Link>
          <Link href="/" className="nav-link">FITNESS & HEALTH</Link>
          <Link href="/" className="nav-link">MATH</Link>
          <Link href="/" className="nav-link">OTHER</Link>
        </nav>
        <div>
          <Link href="/" className="text-white hover:text-[#c5eeac]">sign in</Link>
        </div>
      </div>
    </header>
  );
}
