import BackButton from "../../components/common/BackButton";

export default function TechnologyInnovations() {
  return (
    <section className="container mx-auto px-4 py-16">
      <BackButton fallback="/offerings" />
      <div className="grid lg:grid-cols-2 gap-10 items-start mt-6">
        <img src="https://images.pexels.com/photos/6153740/pexels-photo-6153740.jpeg" alt="Technology innovations in healthcare" className="rounded-xl border object-cover w-full h-72" />
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Technology Innovations</h1>
          <p className="mt-4 text-muted-foreground">Our solutions cover both hardware and software developments. The hardware innovations are targeting remote diagnosis, thereby providing quality healthcare in remote locations. The software innovations, in addition to the unified platform, cover researching in the field of Artificial Intelligence and utilizing the concepts of neural network agents to develop innovative products. Our list of products based on these developments include:</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>A diagnosis aid solution that ensures comprehensive differential diagnosis and reduces possible medical errors by accounting for all possible parameters</li>
            <li>A diagnostic aid solution that aids pathologies and diagnostic centers in the assessment of data generated while adhering to DICOM standards for generation and transmission of medical imaging data</li>
            <li>A solution for real time compression and transmission of clinical data to ensure a seamless interaction between the various stakeholders</li>
            <li>Customizing versions of clinical terminologies like SNOMED-CT, LOINC</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
