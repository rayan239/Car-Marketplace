import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MostSearchedCar from "@/components/MostSearchedCar";
import Service from "@/Shared/Service";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Description from "../components/Description";
import DetailHeader from "../components/DetailHeader";
import Features from "../components/Features";
import FinancialCalculator from "../components/FinancialCalculator";
import ImageGallery from "../components/ImageGallery";
import OwnersDetail from "../components/OwnersDetail";
import Pricing from "../components/Pricing";
import Specification from "../components/Specification";
import { db } from "./../../../config";
import { CarImages, CarListing } from "./../../../config/schema";

function ListingDetail() {
  const { id } = useParams();
  console.log(id);
  const [carDetail, setCarDetail] = useState();

  useEffect(() => {
    GetCarDetails();
  }, []);

  const GetCarDetails = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, id));

    const resp = Service.FormatResult(result);
    setCarDetail(resp[0]);
  };

  return (
    <div>
      <Header />

      <div className="p-10 md:px-20">
        {/* Header Details Component */}
        <DetailHeader carDetail={carDetail} />

        <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5">
          {/* Left */}
          <div className="md:col-span-2 ">
            {/* Image Gallery */}

            <ImageGallery carDetail={carDetail} />

            {/* Description */}
            <Description carDetail={carDetail} />

            {/* Feature */}
            <Features features={carDetail?.features} />

            {/* Financial Calculator */}
            <FinancialCalculator carDetail={carDetail} />
          </div>

          {/* Right */}
          <div className="">
            {/* Pricing */}

            <Pricing carDetail={carDetail} />

            {/* Car Specification */}
            <Specification carDetail={carDetail} />

            {/* Owner Details */}
            <OwnersDetail carDetail={carDetail} />
          </div>
        </div>

        <MostSearchedCar />
      </div>
      <Footer />
    </div>
  );
}

export default ListingDetail;
