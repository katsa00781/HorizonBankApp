import SideBar from "@/components/ui/SideBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: 'Zsolt', lastName: 'Kacsor'};
  return (
    <main className="w-full h-screen flex font-inter">
        <SideBar user= {loggedIn} />
        {children}
    </main>
  );
}