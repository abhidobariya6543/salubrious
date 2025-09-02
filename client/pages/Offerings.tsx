import { HeartPulse, BrainCircuit, Database, GraduationCap } from "lucide-react";

const IMAGES = {
  training: "https://images.pexels.com/photos/3985154/pexels-photo-3985154.jpeg",
  platform: "https://images.pexels.com/photos/8376232/pexels-photo-8376232.jpeg",
  data: "https://images.pexels.com/photos/7821463/pexels-photo-7821463.jpeg",
  innovation: "https://images.pexels.com/photos/6153740/pexels-photo-6153740.jpeg",
};

import { Link } from "react-router-dom";

export default function Offerings() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Offerings</h1>
      <div className="mt-6 grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <p className="text-muted-foreground">
            We are developing a platform with a suite of multiple packages targeted at the healthcare segment, that is centered around the needs of various healthcare service providers and patients. Our product is being implemented using advanced tools like Python 3.5, PHP 7.2 and MongoDB with MariaDB and is currently nearing alpha release. Our current development efforts are geared towards the following offerings:
          </p>
          <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-2">
            <li>
              <span className="font-medium text-foreground">Unified healthcare platform:</span> A healthcare platform to enable collaboration between all stakeholders in the healthcare process while ensuring seamless information capture and retrieval.
            </li>
            <li>
              <span className="font-medium text-foreground">Technology innovations:</span> Technological innovations to create custom tools like assistive decision making, assistive diagnostics and mapped clinical dictionaries among others for stakeholders in the healthcare process.
            </li>
            <li>
              <span className="font-medium text-foreground">Standardizing healthcare data:</span> Standardizing the recording, storing and communication of healthcare data to achieve interoperability while adhering to global standards and/or best practices.
            </li>
            <li>
              <span className="font-medium text-foreground">Training for budding practitioners:</span> Providing opportunities to budding doctors, medical professionals and hospital administrators for continued learning and training through interactive virtual sessions and webinars.
            </li>
          </ul>
        </div>
        <img src={IMAGES.platform} alt="Healthcare technology" className="w-full h-80 rounded-2xl border object-cover" />
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card to="/offerings/training" icon={<GraduationCap className="h-6 w-6" />} image={IMAGES.training} title="Training" text="Providing opportunities to budding doctors, medical professionals and hospital administrators for continued learning and training through interactive virtual sessions and webinars." />
        <Card to="/offerings/unified-healthcare-platform" icon={<HeartPulse className="h-6 w-6" />} image={IMAGES.platform} title="Unified Healthcare Platform" text="A healthcare platform to enable collaboration between all stakeholders in the healthcare process while ensuring seamless information capture and retrieval." />
        <Card to="/offerings/standardizing-healthcare-data" icon={<Database className="h-6 w-6" />} image={IMAGES.data} title="Standardizing Healthcare Data" text="Standardizing the recording, storing and communication of healthcare data to achieve interoperability while adhering to global standards and best practices." />
        <Card to="/offerings/technology-innovations" icon={<BrainCircuit className="h-6 w-6" />} image={IMAGES.innovation} title="Technology Innovations" text="Creating assistive decision-making and diagnostics tools, along with mapped clinical dictionaries, to support stakeholders across the healthcare process." />
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
