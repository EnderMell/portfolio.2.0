// import Image from "next/image";
// import localFont from "next/font/local";
import Navbar from "../../components/Navbar/navbar";
import Header from "../../components/Header/header";
import GitHubLink from "../../components/Github/github";
import Projects from "../../components/Projects/projects";
import Footer from "../../components/Footer/footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <div>
<Navbar/>
<Header/>
<div style={{
  width:"70vw",
  height:"3px",
  background:"white",
  margin:"0 auto"
}}></div>
<GitHubLink/>
<div style={{
  width:"70vw",
  height:"3px",
  background:"white",
  margin:"0 auto"
}}></div>
<Projects/>
<Footer/>

    </div>
  );
}
