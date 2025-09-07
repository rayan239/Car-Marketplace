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
  }, [condition, make, price]);
  const GetCarList = async () => {
    const conditions = [];
    if (condition && condition !== "undefined") {
      conditions.push(eq(CarListing.condition, condition));
    }
    if (make && make !== "undefined") {
      conditions.push(eq(CarListing.make, make));
    }
    if (price && price !== "undefined") {
      conditions.push(
        sql`CAST(REPLACE(REPLACE(${
          CarListing.sellingPrice
        }, '$', ''), ',', '') AS INTEGER) <= ${Number(price)}`
      );
    }

    let query = db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId));

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const result = await query;
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
