import type { Route } from "./+types/home";
import { HomePage } from "../home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tako UI" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
