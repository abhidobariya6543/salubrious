import { Link } from "react-router-dom";
import { BrainCircuit, Database, GraduationCap, HeartPulse } from "lucide-react";

export default function Index() {
  return (
    <div className="">
      <Hero />
      <About />
      <OfferingsPreview />
      <PrivacyStrip />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative h-screen">
      <img
        src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=2000&q=80"
        alt=""
        aria-hidden
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-10 bg-black/45" />
      <div className="container mx-auto h-full px-4 flex items-center z-20 relative">
        <div className="max-w-2xl text-white drop-shadow-md">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Medical Services You Can Trust
          </h1>
          <p className="mt-5 text-lg text-white/90">
            We are working with a network of service providers to bring our offerings to select urban, semi-urban and rural regions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/offerings" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-primary-foreground font-medium hover:opacity-90 transition">
              Explore Offerings
            </Link>
            <Link to="/connect" className="inline-flex h-11 items-center justify-center rounded-md border border-white/40 bg-white/10 px-5 font-medium text-white hover:bg-white/20 transition">
              Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


function About() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">About Salubrious Technologies</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Fueled by technological developments, Salubrious Tech, a startup, is creating a positive impact on the healthcare sector by innovating and developing products and services that improve clinical outcomes. We are developing and customizing technologies for the healthcare segment that we are sharing with a service provider network to enable them to reap benefits of cutting-edge advancements. By leveraging technology along with a sustainable business plan, Salubrious Tech promises growth and continuous innovation over time.
          </p>
        </div>
        <div className="rounded-2xl border p-6 bg-card text-card-foreground shadow-sm">
          <p className="text-sm text-muted-foreground">
            We are working with network of service providers to bring our offerings to select urban, semi-urban and rural regions.
          </p>
        </div>
      </div>
    </section>
  );
}

const IMAGES = {
  training: "https://images.pexels.com/photos/3985154/pexels-photo-3985154.jpeg",
  platform: "https://images.pexels.com/photos/8376232/pexels-photo-8376232.jpeg",
  data: "https://images.pexels.com/photos/7821463/pexels-photo-7821463.jpeg",
  innovation: "https://images.pexels.com/photos/6153740/pexels-photo-6153740.jpeg",
};

function OfferingsPreview() {
  return (
    <section id="offerings" className="container mx-auto px-4 pb-24">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Our Offerings</h2>
        <Link to="/offerings" className="text-sm text-primary hover:underline">See all</Link>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card to="/offerings/training" image={IMAGES.training} icon={<GraduationCap className="h-6 w-6" />} title="Training" text="Providing opportunities to budding doctors, medical professionals and hospital administrators for continued learning and training through interactive virtual sessions and webinars." />
        <Card to="/offerings/unified-healthcare-platform" image={IMAGES.platform} icon={<HeartPulse className="h-6 w-6" />} title="Unified Healthcare Platform" text="A healthcare platform to enable collaboration between all stakeholders in the healthcare process while ensuring seamless information capture and retrieval." />
        <Card to="/offerings/standardizing-healthcare-data" image={IMAGES.data} icon={<Database className="h-6 w-6" />} title="Standardizing Healthcare Data" text="Standardizing the recording, storing and communication of healthcare data to achieve interoperability while adhering to global standards and best practices." />
        <Card to="/offerings/technology-innovations" image={IMAGES.innovation} icon={<BrainCircuit className="h-6 w-6" />} title="Technology Innovations" text="Creating assistive decision-making and diagnostics tools, along with mapped clinical dictionaries, to support stakeholders across the healthcare process." />
      </div>
    </section>
  );
}

function Card({ icon, title, text, image, to }: { icon: React.ReactNode; title: string; text: string; image: string; to: string }) {
  return (
    <Link to={to} className="block rounded-xl border bg-card text-card-foreground overflow-hidden shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary">
      <img src={image} alt="" className="h-36 w-full object-cover" />
      <div className="p-6">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="mt-4 font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{text}</p>
      </div>
    </Link>
  );
}

function PrivacyStrip() {
  return (
    <section className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-10 text-sm text-muted-foreground">
        At Salubrious Technologies, privacy and confidentiality of patient data is of paramount importance to us and to achieve this only anonymized patient data is ever shared or used so that patient anonymity is guaranteed and patients cannot be tracked/contacted using the data or solutions that we provide or share.
      </div>
    </section>
  );
}
