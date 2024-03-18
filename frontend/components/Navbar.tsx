import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="border-2 border-red-500 flexBetween max-container padding-container z-30 py-5">
     <Link href="/">
     <Image src="/logo.png" alt="TradeBuddy"/>
     </Link>
    </nav>
  );
}

export default Navbar;
 