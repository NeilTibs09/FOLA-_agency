import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section data-theme="light" className="shell flex min-h-[80svh] flex-col justify-center pb-20 pt-36">
      <Eyebrow number="404">Page not found</Eyebrow>
      <h1 className="display display-xl mt-8">
        Not on <em className="accent-word">the list</em>.
      </h1>
      <p className="lede mt-6 max-w-[30rem] text-muted">
        This page doesn’t exist, or isn’t ready yet.
      </p>
      <div className="mt-10">
        <ButtonLink href="/" className="sm:min-w-56">
          Back to home
        </ButtonLink>
      </div>
    </section>
  );
}
