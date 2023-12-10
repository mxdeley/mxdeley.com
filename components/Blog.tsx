import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="max-w-5xl mx-auto">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-10 items-start">
        <aside className="sticky top-0 flex flex-col gap-4 items-start py-2">
          <h2 className="font-semibold mb-4 text-sm">Categories</h2>
          <div className="grid gap-1">
            <Button className="font-semibold" variant="link">
              Technology
            </Button>
            <Button className="font-semibold" variant="link">
              Nature
            </Button>
            <Button className="font-semibold" variant="link">
              Travel
            </Button>
            <Button className="font-semibold" variant="link">
              Sports
            </Button>
            <Button className="font-semibold" variant="link">
              Lifestyle
            </Button>
          </div>
        </aside>
        <section className="grid gap-6 md:gap-8">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <h3 className="text-xl font-bold">The Future of Technology</h3>
              <Badge className="text-xs" variant="outline">
                Technology
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="relative group">
                <img
                  alt="Cover image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <p className="text-gray-500 mt-2">
                  An insight into what the future holds for technology, from AI
                  to quantum computing.
                </p>
                <Link className="text-blue-500 hover:underline" href="#">
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <h3 className="text-xl font-bold">The Beauty of Nature</h3>
              <Badge className="text-xs" variant="outline">
                Nature
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="relative group">
                <img
                  alt="Cover image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height="200"
                  src="/placeholder.svg"
                  width="200"
                />
                <p className="text-gray-500 mt-2">
                  Explore the stunning beauty of mother nature and her
                  astonishing creations.
                </p>
                <Link className="text-blue-500 hover:underline" href="#">
                  Read more
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
