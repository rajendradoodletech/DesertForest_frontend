

import DashSidebar from "@/components/dashSidebar";
import bgmessages from '/public/images/bgmessages.png'
import DashboardHeader from "@/components/ui/dashboardHeader"
import DashboardTopHeader from "@/components/ui/dashboardTopheader";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <div className="w-full relative flex flex-col ">
                  {  <DashSidebar></DashSidebar> }
                  <DashboardTopHeader></DashboardTopHeader> <DashboardHeader title="Overview"  buttonText="#" backgroundImage={bgmessages.src} ></DashboardHeader>    {children} </div>
  );
}
