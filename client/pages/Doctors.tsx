import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const IMAGES = {
  training: "https://images.pexels.com/photos/3985154/pexels-photo-3985154.jpeg",
  platform: "https://images.pexels.com/photos/8376232/pexels-photo-8376232.jpeg",
  data: "https://images.pexels.com/photos/7821463/pexels-photo-7821463.jpeg",
  innovation: "https://images.pexels.com/photos/6153740/pexels-photo-6153740.jpeg",
};

const ITEMS = [
  { to: "/offerings/training", image: IMAGES.training, title: "Training", desc: "Providing opportunities to budding doctors, medical professionals and hospital administrators for continued learning and training through interactive virtual sessions and webinars.", cats: ["All", "Cardiac Clinic", "Gynaecological Clinic", "Pediatrics Clinic", "Primary Health Care"] },
  { to: "/offerings/unified-healthcare-platform", image: IMAGES.platform, title: "Unified Healthcare Platform", desc: "A healthcare platform to enable collaboration between all stakeholders in the healthcare process while ensuring seamless information capture and retrieval.", cats: ["All", "Primary Health Care"] },
  { to: "/offerings/standardizing-healthcare-data", image: IMAGES.data, title: "Standardizing Healthcare Data", desc: "Standardizing the recording, storing and communication of healthcare data to achieve interoperability while adhering to global standards and best practices.", cats: ["All", "Pediatrics Clinic", "Gynaecological Clinic"] },
  { to: "/offerings/technology-innovations", image: IMAGES.innovation, title: "Technology Innovations", desc: "Solutions spanning hardware and software to aid diagnosis and ensure seamless data sharing between stakeholders.", cats: ["All", "Cardiac Clinic", "Primary Health Care"] },
];

export default function Doctors() {
  const tabs = [
    "All",
    "Cardiac Clinic",
    "Gynaecological Clinic",
    "Pediatrics Clinic",
    "Primary Health Care",
  ];
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-center">Meet Our Doctors</h1>
      <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
        Explore our knowledge areas and training initiatives designed for budding doctors and healthcare professionals.
      </p>
      <Tabs defaultValue="All" className="mt-8">
        <TabsList className="flex flex-wrap gap-2 bg-transparent p-0">
          {tabs.map((t) => (
            <TabsTrigger key={t} value={t} className="bg-muted">
              {t}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((t) => (
          <TabsContent key={t} value={t} className="mt-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ITEMS.filter((i) => i.cats.includes(t)).map((i) => (
                <Card key={i.to} to={i.to} image={i.image} title={i.title} desc={i.desc} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

function Card({ to, image, title, desc }: { to: string; image: string; title: string; desc: string }) {
  return (
    <Link to={to} className="block rounded-xl border overflow-hidden bg-card text-card-foreground hover:shadow-md transition-shadow">
      <img src={image} alt="" className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      </div>
    </Link>
  );
}
