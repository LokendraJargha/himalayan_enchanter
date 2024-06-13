import Footer from "@/components/Footer";
import Homepage from "./homepage/page";
import YouMayLike from "@/components/YoumayLike";

export default function Home() {
  return (
    <main>
      <Homepage />
      <Container className={"flex justify-end"}>
        <TrustPilot />
      </Container>
      <Footer />
    </main>
  );
}
