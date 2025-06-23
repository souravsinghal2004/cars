import { Button } from "@/components/ui/button";
import HomeSearch from "@/components/home-search";
import { Chevron } from "react-day-picker";
import { ChevronRight } from "lucide-react";
import { featuredCars } from "@/lib/data";
import CarCard from "@/components/car-card";

export default function Home() {
  return (
    <div className="pt-20 flex flex-col">

                {/*HERO Section */}

            <section className="relative py-16 md:py-28 dotted-background" >

               <div className="max-w-4xl mx-auto text-center">

                <div className="mb-8">
                  
                  <h1 className="text-5xl md:text-8xl mb-4 gradient-title">
                 Find Your Cars With WheelDeal AI</h1>

                  <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
                   Advanced AI Car Search and test drive from thousands of vehicles.
            </p>
                </div>

                {/*SEARCH*/}
                <HomeSearch/>
              </div>




            </section>

      {/* section2 */}

      <section className="py-12">
      <div>
        <div>
          <h2>Featuerd Car</h2>
          <Button>
            View All <ChevronRight className="m-1 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCars.map((car) =>{

           return <CarCard key={car.id} car={car}    />
          })}
        </div>
      </div>

      </section>























    </div>
  );
}
