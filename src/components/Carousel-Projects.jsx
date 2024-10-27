// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel } from 'nuka-carousel';

export default function CarProjects() {
  return (
    <div className="w-2xl dark:text-white text-black">
        <Carousel showArrows autoplay={true} autoplayInterval={3000} wrapMode="wrap" className="w-screen">
          <Card>
            <CardTitle>
              <CardHeader>Dotmastr</CardHeader>
            </CardTitle>
            <CardContent></CardContent>
          </Card>

        </Carousel>
    </div>
  );
}