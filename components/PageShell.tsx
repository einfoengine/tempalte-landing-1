import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

/* One shell for every interior page. The homepage sections drifted apart
   because each one re-declared its own chrome; every route now shares this so
   nav, footer and the <main> wrapper can only be defined once. */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <main>{children}</main>
      <Footer />
    </>
  );
}
