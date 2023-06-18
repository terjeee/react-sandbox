import EmbededYoutube from "@/components/sections/EmbededYoutube";
import ReactChartJs2 from "@/components/sections/ReactChartJs2";
import Recharts from "@/components/sections/Recharts";

export default function Home() {
  return (
    <main className="my-4 flex flex-col gap-20 py-4">
      <Recharts />
      <ReactChartJs2 />
      <EmbededYoutube />
    </main>
  );
}
