import CarItem from "@/components/CarItem";
import Header from "@/components/Header";
import Service from "@/Shared/Service";
import { and, eq, sql } from "drizzle-orm";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { db } from "./../../config";
import { CarImages, CarListing } from "./../../config/schema";
function SearchByOptions() {
  const [searchParam] = useSearchParams();
  const [carList, setCarList] = useState([]);
  const condition = searchParam.get("cars");
  const make = searchParam.get("make");
  const price = searchParam.get("price");

  useEffect(() => {
    GetCarList();
  }, []);
  const GetCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      //   .where(condition != undefined && eq(CarListing.condition, condition))
      //   .where(make != undefined && eq(CarListing.make, make))

      //   .where(
      //     price != undefined &&
      //       sql`CAST(REPLACE(REPLACE(${
      //         CarListing.sellingPrice
      //       }, '$', ''), ',', '') AS INTEGER) <= ${Number(price)}`
      //   );

      .where(
        and(
          eq(CarListing.condition, condition),
          eq(CarListing.make, make),
          sql`CAST(REPLACE(REPLACE(${
            CarListing.sellingPrice
          }, '$', ''), ',', '') AS INTEGER) <= ${Number(price)}`
        )
      );
    const resp = Service.FormatResult(result);
    console.log(resp);
    setCarList(resp);
  };

  return (
    <div>
      <Header />

      {/* <div className="p-16 bg-black flex justify-center">
        <Search />
      </div> */}

      <div className="p-10 md:px-20">
        <h2 className="font-bold text-4xl">Search Result</h2>

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

export default SearchByOptions;
