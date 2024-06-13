import Footer from "@/components/Footer";
import Homepage from "./homepage/page";
import Container from "@/components/Container";
import TrustPilot from "@/components/TrustPilot";

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
