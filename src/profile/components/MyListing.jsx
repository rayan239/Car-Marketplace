import CarItem from "@/components/CarItem";
import { Button } from "@/components/ui/button";
import Service from "@/Shared/Service";
import { useUser } from "@clerk/clerk-react";
import { desc, eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "./../../../config";
import { CarImages, CarListing } from "./../../../config/schema";
function MyListing() {
  const { user } = useUser();
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    user && GetUserCarListing();
  }, [user]);
  const GetUserCarListing = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(CarListing.id));

    const resp = Service.FormatResult(result);
    console.log(resp);
    setCarList(resp);
    console.log("Added");
  };
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl">My Listing</h2>
        <Link to={"/add-listing"}>
          <Button>+ Add New Listing</Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5">
        {carList?.length > 0
          ? carList.map((item, index) => (
              <div key={index}>
                <CarItem car={item} />
                <div className="p-2 bg-gray-50 rounded-lg flex justify-between gap-3">
                  <Link to={"/add-listing?mode=edit&id=" + item?.id}>
                    <Button variant="outline" className="cursor-pointer">
                      Edit
                    </Button>
                  </Link>
                  {/* <Button variant="destructive" className="cursor-pointer">
                <FaTrashAlt />
              </Button> */}
                </div>
              </div>
            ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div className="h-[100px] rounded-xl bg-gray-600 animate-ping"></div>
            ))}
      </div>
    </div>
  );
}

export default MyListing;
