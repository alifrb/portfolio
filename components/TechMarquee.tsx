"use client";
import Image from "next/image";

type Icon = {
  src: string;
  alt: string;
  href?: string; // optional: link to docs/repo/site
};

export default function TechMinimal({
  title = "Tech I Use",
  icons = [],
  size = 70, // px icon size
  gap = "gap-6", // tailwind gap class
}: {
  title?: string;
  icons: Icon[];
  size?: number;
  gap?: string;
}) {
  return (
    <section className="rounded-xl bg-[var(--component-color)] text-white mx-auto max-w-6xl px-8 py-12">
      <h3 className="text-[var(--fg)] mb-6 text-center text-md lg:text-4xl font-medium tracking-wide">
        {title}
      </h3>

      <div className="grid grid-cols-4 gap-0 lg:gap-3">
        <div className="p-5 flex items-center justify-center relative col-span-4 md:col-span-2 aspect-[3/4]">
          <Image
            src="/logos/react.svg"
            fill
            alt="React"
            sizes="100vm"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="p-5 relative col-span-4 md:col-span-2 flex align-center aspect-[3/4]">
          <Image
            src="/logos/nextjs-light.svg"
            alt="React"
            fill
            sizes="100vw"
            className="hidden dark:block w-full h-auto object-contain"
            priority
          />
          <Image
            src="/logos/nextjs-black.svg"
            alt="React"
            fill
            sizes="100vw"
            className="block dark:hidden w-full h-auto object-contain"
            priority
          />
        </div>
        <div className="p-5 relative col-span-4 md:col-span-1 flex align-center aspect-[3/4]">
          <Image
            src="/logos/typescript.svg"
            alt="React"
            fill
            sizes="100vw"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <div className="p-5 relative col-span-4 md:col-span-1 flex align-center aspect-[3/4]">
          <Image
            src="/logos/html.svg"
            alt="React"
            fill
            sizes="100vw"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <div className="p-5 relative col-span-4 md:col-span-1 flex align-center aspect-[3/4]">
          <Image
            src="/logos/css.svg"
            alt="React"
            fill
            sizes="100vw"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <div className="p-5 relative col-span-4 md:col-span-1 flex align-center aspect-[3/4]">
          <Image
            src="/logos/Tailwind.svg"
            alt="React"
            fill
            sizes="100vw"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <div className="p-5 relative col-span-4 md:col-span-1 flex align-center aspect-[3/4]">
          <Image
            src="/logos/bootstrap.svg"
            alt="React"
            fill
            sizes="100vw"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <div className="p-5 relative col-span-4 md:col-span-1 flex align-center aspect-[3/4]">
          <Image
            src="/logos/vercel-black.svg"
            alt="React"
            fill
            sizes="100vw"
            className="text-white block dark:hidden w-full h-auto object-contain"
            priority
          />
          <Image
            src="/logos/vercel-light.svg"
            alt="React"
            fill
            sizes="100vw"
            className="hidden dark:block w-full h-auto object-contain"
            priority
          />
        </div>
        <div className="p-5 relative col-span-4 md:col-span-1 flex align-center aspect-[3/4]">
          <Image
            src="/logos/redux-light.svg"
            alt="React"
            fill
            sizes="100vw"
            className="dark:block w-full h-auto object-contain"
            priority
          />
          <Image
            src="/logos/redux-black.svg"
            alt="React"
            fill
            sizes="100vw"
            className="dark:hidden w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

