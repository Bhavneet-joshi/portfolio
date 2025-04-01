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
    <div className="min-h-screen bg-gray-100 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <Sidebar />
            
            <div className="flex-grow p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProfileCard 
                  name={name} 
                  email={email} 
                  status={status} 
                />
                
                <div className="space-y-6">
                  <div className="flex items-end justify-between">
                    <h2 className="text-5xl font-extrabold">Portfolio</h2>
                  </div>
                  
                  <FeaturedProjectCard />
                  
                  <div className="grid grid-cols-2 gap-6">
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
                
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ClientsCard />
                  <AwardsCard count={stats.globalAwards} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
