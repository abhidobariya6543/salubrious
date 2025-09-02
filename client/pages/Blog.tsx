export default function Blog() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">News</h1>
      <article className="mt-8 rounded-xl border p-6 bg-card text-card-foreground">
        <div className="text-xs text-muted-foreground">April 24</div>
        <h2 className="mt-1 text-2xl font-semibold">Electronic Health Record — Knowledge Base</h2>
        <p className="mt-3 text-muted-foreground">
          The importance of recording clinical data has been recognized for the past few years. Today, digitization and storage of medical records has been standardized the world over by support and co‑operation between IT engineers and the medical fraternity along with good industry support. The resulting open standards, OpenEHR, have become the de‑facto basis for implementing complex databases and software solutions.
        </p>
        <p className="mt-3 text-muted-foreground">
          With the automation of patients’ medical records the medical fraternity has made tremendous achievements by recording their own knowledge for use by other doctors, thereby providing the profession a platform for computer‑supported decisions. New Artificial Neural Networks and AI algorithms use the knowledge represented by the recorded data to support diagnosis, specify clinical procedures and treatments, and ensure the best outcomes achievable in the shortest time frames.
        </p>
        <p className="mt-3 text-muted-foreground">
          Watch this space, as we will be coming up with blogs on this subject, and many more, shortly.
        </p>
      </article>
    </section>
  );
}
