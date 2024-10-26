import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Projects() {
    return (
        <>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Navbar />
                <Card className="max-w-2xl w-full mx-auto bg-white dark:bg-gray-800 md:shadow-md md:shadow-black mt-6">
                    <CardHeader>
                        <CardTitle className="text-black dark:text-white">Dotmastr</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-black dark:text-white">
                        A simple dotfiles manager written in python.
                    </p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
   
}