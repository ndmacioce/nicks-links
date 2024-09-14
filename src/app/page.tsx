import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { siInstagram, siGithub, siLinkedin } from "simple-icons";

const links = [
  { title: "My Portfolio", url: "https://example.com/portfolio" },
  { title: "My Blog", url: "https://example.com/blog" },
  { title: "Contact Me", url: "mailto:example@example.com" },
];

const socialLinks = [
  { icon: siInstagram, url: "https://instagram.com/username" },
  { icon: siGithub, url: "https://github.com/username" },
  { icon: siLinkedin, url: "https://linkedin.com/in/username" },
];

const SocialIcon = ({ path }: { path: string; color: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className="h-6 w-6 transition-colors"
    fill="currentColor"
  >
    <path d={path} />
  </svg>
);

export default function LinktreeClone() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center space-y-2">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src="/NickLogo.svg"
              alt="User's avatar"
              className="h-full w-full"
            />
            <AvatarFallback>NM</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold">Your Name</h1>
          <p className="text-muted-foreground text-center">
            A brief bio about yourself goes here. Keep it short and sweet!
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {links.map((link, index) => (
            <Button key={index} asChild variant="outline" className="w-full">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </Button>
          ))}
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`Visit ${link.icon.title}`}
            >
              <SocialIcon path={link.icon.path} color={link.icon.hex} />
            </a>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}
