import Bavbar from "@/components/navbar/navbar";
import Image from "next/image";
import { Hero } from "./(landing)/home/_sections/hero/hero";
import { Announcement } from "./(landing)/home";
import Category from "@/components/category/category";
import Popular from "@/components/popular/popular";

export default function Home() {
  return (
   <main>
    <Announcement/>
    <Category/>
    <Popular/>
   </main>
  );
}
