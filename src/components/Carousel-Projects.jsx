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
        {/* <Carousel showArrows autoplay={true} autoplayInterval={3000} wrapMode="wrap" className="w-auto h-auto max-w-10xl">
          <Card>
            <CardTitle>
              <CardHeader></CardHeader>
            </CardTitle>
            <CardContent>
              <p>
                A simple cross-platform dotfiles manager. 
                Dotfiles are hidden configuration files in Unix-based systems (e.g., .bashrc, .vimrc) that store user settings and preferences for applications, allowing for customized environments across shells, editors, and more.
                A dotfiles manager streamlines tracking and syncing configurations across devices, automating setup to ensure a consistent environment with ease.
                
              </p>
              <img href="/404-poodle.png" className="h-screen"></img>
            </CardContent>
          </Card>
        </Carousel> */}
        <ProjectsCarousel />
    </div>
  );
}