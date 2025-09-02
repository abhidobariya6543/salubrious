import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import ScrollTop from "../common/ScrollTop";
import PageBanner from "../common/PageBanner";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <RouteChangeScrollTop />
      <PageBanner />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 dark:bg-zinc-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-extrabold tracking-tight text-xl">
          Salubrious Technologies
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/offerings">Offerings</NavLink>
          <NavLink to="/connect">Connect</NavLink>
        </nav>
        <button className="md:hidden p-2" aria-label="Open menu" onClick={() => setOpen(!open)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-2 grid gap-2">
            <MobileNavLink to="/" onClick={() => setOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/blog" onClick={() => setOpen(false)}>Blog</MobileNavLink>
            <MobileNavLink to="/offerings" onClick={() => setOpen(false)}>Offerings</MobileNavLink>
            <MobileNavLink to="/connect" onClick={() => setOpen(false)}>Connect</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-foreground/80 hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link to={to} className="block py-2" onClick={onClick}>
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="font-extrabold tracking-tight text-lg">
            Salubrious Technologies
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            Privacy and confidentiality of patient data is of paramount importance to us. Only anonymized patient data is ever shared or used so that patients cannot be tracked/ contacted using the data or solutions that we provide or share.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/offerings" className="hover:underline">Offerings</Link></li>
            <li><Link to="/doctors" className="hover:underline">Doctors</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/connect" className="hover:underline">Connect</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Get in touch</h4>
          <a href="/connect" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <Mail className="h-4 w-4" /> Contact us
          </a>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Salubrious Technologies. All rights reserved.
      </div>
    </footer>
  );
}

function RouteChangeScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
