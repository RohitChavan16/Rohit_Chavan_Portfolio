import Link from "next/link";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="section-shell rounded-3xl p-10 max-w-xl text-center">
        <p className="section-label mb-4">Detail Page</p>
        <h1 className="text-3xl font-bold mb-3 capitalize">{id.replaceAll("-", " ")}</h1>
        <p className="muted mb-7">
          This dynamic route is ready for project stories, blog entries, or case-study details.
        </p>
        <Link href="/" className="portfolio-btn portfolio-btn-primary">
          Back to Portfolio
        </Link>
      </div>
    </main>
  );
}
