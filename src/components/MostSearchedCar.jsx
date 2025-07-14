import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import FakeData from "@/Shared/FakeData";
import Service from "@/Shared/Service";
import { desc, eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import { db } from "./../../config";
import { CarImages, CarListing } from "./../../config/schema";
import CarItem from "./CarItem";
function MostSearchedCar() {
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    GetPopularCarList();
  }, []);

  const GetPopularCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .limit(10)
      //.where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(CarListing.id));

    const resp = Service.FormatResult(result);
    console.log(resp);
    setCarList(resp);
  };
  return (
    <div className="mx-24">
      <h2 className="font-bold text-3xl text-center mt-16 mb-7">
        Most Searched Cars
      </h2>

      <Carousel>
        <CarouselContent>
          {carList.map((car, idx) => (
            <CarouselItem key={idx} className="basis-1/4">
              <CarItem car={car} key={idx} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostSearchedCar;
