import CarItem from "@/components/CarItem";
import Header from "@/components/Header";
import Service from "@/Shared/Service";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./../../../config";
import { CarImages, CarListing } from "./../../../config/schema";
function SearchByCategory() {
  const { category } = useParams();
  const [carList, setCarList] = useState([]);
  console.log(category);

  useEffect(() => {
    GetCarList();
  }, []);

  const GetCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.category, category));

    const resp = Service.FormatResult(result);
    setCarList(resp);
  };
  return (
    <div>
      <Header />

      {/* <div className="p-16 bg-black flex justify-center">
        <Search />
      </div> */}

      <div className="p-10 md:px-20">
        <h2 className="font-bold text-4xl">{category}</h2>

        {/* List of CarList */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
          {carList?.length > 0
            ? carList.map((item, index) => (
                <div key={index}>
                  <CarItem car={item} />
                </div>
              ))
            : [1, 2, 3, 4, 5, 6].map((item, index) => (
                <div className="h-[100px] rounded-xl bg-gray-600 animate-ping"></div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default SearchByCategory;
