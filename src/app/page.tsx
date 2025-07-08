import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import Activities from "@/components/Activities";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="relative bg-[url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-200">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <Navbar />
          <Header />
        </div>
      </div>
      <About />
      <Rooms />
      <Services />
      <Activities />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
