import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { GrGlobe } from "react-icons/gr";

export default function ProjectCard({ data }: any) {
  return (
    <Card className="w-full sm:w-[48%] md:w-[31%] rounded-lg overflow-hidden shadow-lgb  bg-transparent text-gray-100 flex flex-col">
      {/* Image Section */}
      <div className="h-48 overflow-hidden">
        <img
          src={data.imageUrl}
          alt="Project Thumbnail"
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <CardContent className="p-6 flex flex-col flex-grow">
        {/* Title and Description */}
        <div>
          <CardTitle className="text-xl font-bold">{data.title}</CardTitle>
          <CardDescription className="text-gray-400 mt-2 line-clamp-3">
            {data.description}
          </CardDescription>
        </div>

        {/* Tags Section */}
        <div className="mt-4">
          <div className="text-sm font-medium text-gray-300 mb-2">
            Technologies Used:
          </div>
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag: string) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-black text-gray-200 border-gray-600"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-6 flex gap-4">
          <Link
            href={data.githubLink}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-md hover:bg-blue-500 transition"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5" />
            GitHub
          </Link>
          <Link
            href={data.liveLink}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md shadow-md border border-gray-600 hover:bg-gray-700 transition"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrGlobe className="w-5 h-5" />
            Live Demo
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
