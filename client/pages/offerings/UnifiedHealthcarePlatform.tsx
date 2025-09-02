import BackButton from "../../components/common/BackButton";

export default function UnifiedHealthcarePlatform() {
  return (
    <section className="container mx-auto px-4 py-16">
      <BackButton fallback="/offerings" />
      <div className="grid lg:grid-cols-2 gap-10 items-start mt-6">
        <img src="https://images.pexels.com/photos/8376232/pexels-photo-8376232.jpeg" alt="Unified healthcare platform" className="rounded-xl border object-cover w-full h-72" />
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Unified Healthcare Platform</h1>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>The unified platform encourages collaboration between all stakeholders. It ensures information is captured from each relevant source and can be used for meaningful analytics to improve the quality of health outcomes, in real time, benefiting the stakeholders and the patient.</li>
            <li>The major benefits for the patient are reduced time spent going through the clinical process whereas for the care-provider, besides saving time, it is importantly the creation of a more informed treatment plan leading to more favorable health outcomes.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
