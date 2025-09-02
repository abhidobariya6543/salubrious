import BackButton from "../../components/common/BackButton";

export default function Training() {
  return (
    <section className="container mx-auto px-4 py-16">
      <BackButton fallback="/offerings" />
      <div className="grid lg:grid-cols-2 gap-10 items-start mt-6">
        <img src="https://images.pexels.com/photos/3985154/pexels-photo-3985154.jpeg" alt="Training for practitioners" className="rounded-xl border object-cover w-full h-72" />
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Training</h1>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>By creating a unified platform for interaction and a sophisticated data set for clinical cases we create a profound positive impact in areas of continuous training and academic learnings. The various offerings that we will have in this segment include:</li>
            <li>Training service providers about the standards for recording, storing and communicating patient information to create useful data in the modern information sharing society. The training will be provided through virtual interactive training sessions.</li>
            <li>Introducing the standard healthcare practices at top institutions to the service providers to ensure they can provide best in class services and communicate with the health community at large. These will be done in the format of a webinar.</li>
            <li>Providing realistic cases, based on anonymized patient data, for budding doctors to analyze and train on at medical institutions across the globe. The practice of case analysis will help in reducing medical errors.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
