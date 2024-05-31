import MobileNav from "@/components/ui/MobileNav";
import SideBar from "@/components/ui/SideBar";
import { Images } from "lucide-react";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: 'Zsolt', lastName: 'Kacsor'};
  return (
    <main className="w-full h-screen flex font-inter">
        <SideBar user= {loggedIn} />

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
            <div>
              <MobileNav user= {loggedIn} />
            </div>
          </div>
          {children}
        </div>
        
    </main>
  );
}