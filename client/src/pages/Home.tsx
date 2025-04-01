import { PORTFOLIO_DATA } from "@/lib/constants";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { ProfileCard } from "@/components/portfolio/ProfileCard";
import { FeaturedProjectCard } from "@/components/portfolio/FeaturedProjectCard";
import { StatsCard } from "@/components/portfolio/StatsCard";
import { ClientsCard } from "@/components/portfolio/ClientsCard";
import { AwardsCard } from "@/components/portfolio/AwardsCard";

export default function Home() {
  const { name, email, status, stats } = PORTFOLIO_DATA;
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 md:py-0">
      <div className="container mx-auto px-4 md:px-8 lg:max-w-6xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <Sidebar />
            
            <div className="flex-grow p-5 md:p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <ProfileCard 
                  name={name} 
                  email={email} 
                  status={status} 
                />
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-end justify-between">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">Portfolio</h2>
                  </div>
                  
                  <FeaturedProjectCard />
                  
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <StatsCard 
                      count={stats.projects} 
                      label="Projects" 
                      color="secondary" 
                    />
                    <StatsCard 
                      count={stats.awards} 
                      label="Awards" 
                      color="primary" 
                    />
                  </div>
                </div>
                
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <ClientsCard />
                  <AwardsCard count={stats.globalAwards} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} {name} • Portfolio Template • Interactive Demo
        </div>
      </div>
    </div>
  );
}
