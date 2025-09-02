import { useLocation } from "react-router-dom";

const BANNERS: Record<string, { title: string; image: string }> = {
  "/": {
    title: "Salubrious Technologies",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=2000&q=80",
  },
  "/offerings/training": {
    title: "Training",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1920&q=80",
  },
  "/offerings/unified-healthcare-platform": {
    title: "Unified Healthcare Platform",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1920&q=80",
  },
  "/offerings/standardizing-healthcare-data": {
    title: "Standardizing Healthcare Data",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1920&q=80",
  },
  "/offerings/technology-innovations": {
    title: "Technology Innovations",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1920&q=80",
  },
  "/offerings": {
    title: "Offerings",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1920&q=80",
  },
  "/blog": {
    title: "News",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1920&q=80",
  },
  "/connect": {
    title: "Connect",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1920&q=80",
  },
  "/doctors": {
    title: "Doctors",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1920&q=80",
  },
};

export default function PageBanner() {
  const { pathname } = useLocation();
  if (pathname === "/") return null; // Home uses its own full-screen hero
  // find base path for nested routes (e.g., /offerings/slug) using longest match first
  const base = Object.keys(BANNERS)
    .sort((a, b) => b.length - a.length)
    .find((key) => pathname.startsWith(key));
  const data = base ? BANNERS[base] : { title: pathname.replaceAll("/", " ").trim() || "", image: "https://images.pexels.com/photos/6129505/pexels-photo-6129505.jpeg" };
  // Compute title for detail pages from last segment
  const last = pathname.split("/").filter(Boolean).pop();
  const title = base && pathname !== base ? humanize(last!) : data.title;

  return (
    <div className="relative h-48 md:h-72 w-full overflow-hidden border-b">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${data.image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
      {/* <div className="container mx-auto h-full px-4 flex items-end pb-6 relative z-10">
        <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight drop-shadow">{title}</h1>
      </div> **/}
    </div>
  );
}

function humanize(slug: string) {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
