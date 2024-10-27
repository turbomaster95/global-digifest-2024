// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Carousel } from 'nuka-carousel';
import ProjectsCarousel from "./Carousel";

export default function CarProjects() {
  return (
    <div className="w-2xl dark:text-white text-black">
        <ProjectsCarousel />
    </div>
  );
}