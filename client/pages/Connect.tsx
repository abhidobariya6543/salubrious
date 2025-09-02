import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Connect() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Connect</h1>
      <div className="mt-8 grid lg:grid-cols-2 gap-10 items-start">
        <div className="order-2 lg:order-1">
          <Tabs defaultValue="practitioners" className="w-full max-w-xl">
            <TabsList>
              <TabsTrigger value="practitioners">Practitioners</TabsTrigger>
              <TabsTrigger value="join">Join</TabsTrigger>
              <TabsTrigger value="share">Share</TabsTrigger>
            </TabsList>
            <TabsContent value="practitioners">
              <form className="mt-4 grid gap-4">
                <input className="h-11 rounded-md border bg-background px-3" placeholder="Name" />
                <input type="email" className="h-11 rounded-md border bg-background px-3" placeholder="Email" />
                <button className="h-11 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition">Subscribe</button>
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" className="rounded border" /> Enter email-id to subscribe to our newsletter regarding major developments.
                </label>
              </form>
            </TabsContent>
            <TabsContent value="join">
              <div className="mt-4 text-sm text-muted-foreground">
                Join our network of service providers and collaborators. We engage with stakeholders across urban, semi-urban and rural regions to enable best-in-class healthcare services and data practices.
              </div>
            </TabsContent>
            <TabsContent value="share">
              <div className="mt-4 text-sm text-muted-foreground">
                A checkbox below to optionally subscribe to our blogs. Help us spread the word in the medical fraternity by forwarding this webpage to your colleagues or someone who you believe might be interested in our work by following the link.
              </div>
            </TabsContent>
          </Tabs>
          <div className="mt-8">
            <h3 className="text-sm font-semibold mb-2">Social</h3>
            <div className="flex items-center gap-3 text-muted-foreground">
              <a aria-label="Twitter" href="#" className="hover:text-foreground"><Twitter className="h-5 w-5" /></a>
              <a aria-label="Facebook" href="#" className="hover:text-foreground"><Facebook className="h-5 w-5" /></a>
              <a aria-label="LinkedIn" href="#" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
              <a aria-label="Instagram" href="#" className="hover:text-foreground"><Instagram className="h-5 w-5" /></a>
              <a aria-label="YouTube" href="#" className="hover:text-foreground"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-xl font-semibold">Salubrious Technologies Pvt. Ltd.</h2>
          <div className="mt-3 grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-medium">Registered Office</div>
              <p>14D Hansalaya Building 15<br/>Barakhamba Road Delhi 110001</p>
              <div className="mt-3 font-medium">Development Office</div>
              <p>Office No - 506, Tower - 1,<br/>Assotech Business Cresterra,<br/>Sector - 135, Noida, Uttar Pradesh - 201305</p>
            </div>
            <div>
              <div className="font-medium">Phone</div>
              <p>+91-114-902-7368<br/>+91-522-228-8519</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
