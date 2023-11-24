import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl">
          {" "}
          Your marketplace for high-quality
          <span className="text-blue-600"> Products assets</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to E-Marketplace, where u can buy and sell all kinds of assets
          in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href={"/assets"} className={buttonVariants()}>
            Browse Assets
          </Link>
          <Button variant="ghost">Our Quality promise &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
