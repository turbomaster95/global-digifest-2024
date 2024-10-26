import Navbar from "@/components/Navbar";
import { Card, CardContent, CardTitle } from "./ui/card";

export default function Projects() {
    return (
        <>
            <Navbar />
            <Card className="max-w-2xl w-full mx-auto bg-white dark:bg-gray-800 md:shadow-md md:shadow-black mt-6">
                <CardTitle className="text-black dark:text-white">Dotmastr</CardTitle>
                <CardContent>A simple dotfiles manager written in python.</CardContent>
            </Card>
        </>
    );
   
}