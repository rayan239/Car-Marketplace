import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Service from "@/Shared/Service";
import { useUser } from "@clerk/clerk-react";
import { eq } from "drizzle-orm";
import moment from "moment";
import { useEffect, useState } from "react";
import { LuLoaderCircle } from "react-icons/lu";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { db } from "./../../config";
import { CarImages, CarListing } from "./../../config/schema";
import carDetails from "./../Shared/carDetails.json";
import features from "./../Shared/features.json";
import DropDownField from "./components/DropDownField";
import IconField from "./components/IconField";
import InputField from "./components/InputField";
import TextAreaField from "./components/TextAreaField";
import UploadImages from "./components/UploadImages";

function AddListing() {
  const [formData, setFormData] = useState([]);

  const [featuresData, setFeaturesData] = useState([]);

  const [triggrUploadImages, settriggrUploadImages] = useState();

  const [searchParams] = useSearchParams();

  const [loader, setLoader] = useState(false);

  const [carInfo, setCarInfo] = useState();

  const navigate = useNavigate();

  const { user } = useUser();

  const mode = searchParams.get("mode");
  const recordId = searchParams.get("id");

  useEffect(() => {
    if (mode == "edit") {
      getListingDetail();
    }
  }, []);

  const getListingDetail = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, recordId));

    const resp = Service.FormatResult(result);
    console.log(resp);
    setCarInfo(resp[0]);
    setFormData(resp[0]);
    setFeaturesData(resp[0].features);
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(formData);
  };

  const handleFeaturesChange = (name, value) => {
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(featuresData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = carDetails.carDetails.filter(item => item.required);
    const missingFields = requiredFields.filter(item => !formData[item.name]);

    if (missingFields.length > 0) {
      toast.error(`Please fill out all required fields: ${missingFields.map(item => item.label).join(', ')}`);
      return;
    }

    setLoader(true);
    toast("Please Wait...");

    if (mode == "edit") {
      const result = await db
        .update(CarListing)
        .set({
          ...formData,
          features: featuresData,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          userName: user?.fullName,
          userImageUrl: user?.imageUrl,
          postedOn: moment().format("DD/MM/yyyy"),
        })
        .where(eq(CarListing.id, recordId))
        .returning({ id: CarListing.id });
      console.log(result);
      navigate("/profile");
      setLoader(false);
    } else {
      try {
        const result = await db
          .insert(CarListing)
          .values({
            ...formData,
            features: featuresData,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            userName: user?.fullName,
            userImageUrl: user?.imageUrl,
            postedOn: moment().format("DD/MM/yyyy"),
          })
          .returning({ id: CarListing.id });
        if (result) {
          console.log("Data Saved");
          settriggrUploadImages(result[0]?.id);
          setLoader(false);
        }
      } catch (e) {
        console.log("Error", e);
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>

        <form className="p-10 border rounded-xl mt-10">
          {/* Car Details */}
          <div>
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className="text-sm flex gap-2 items-center mb-1">
                    <IconField icon={item?.icon} />
                    {item?.label}
                    {item.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.fieldType == "text" || item.fieldType == "number" ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange}
                      carInfo={carInfo}
                    />
                  ) : item.fieldType == "dropdown" ? (
                    <DropDownField
                      item={item}
                      handleInputChange={handleInputChange}
                      carInfo={carInfo}
                    />
                  ) : item.fieldType == "textarea" ? (
                    <TextAreaField
                      item={item}
                      handleInputChange={handleInputChange}
                      carInfo={carInfo}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-6" />
          {/* Feature List */}
          <div>
            <h2 className="font-medium text-xl my-6">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {features.features.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <Checkbox
                    onCheckedChange={(value) =>
                      handleFeaturesChange(item.name, value)
                    }
                    checked={featuresData?.[item.name]}
                  />
                  <h2 className="font-serif">{item.label}</h2>
                </div>
              ))}
            </div>
          </div>
          {/* Car Images */}
          <Separator className="my-6" />
          <UploadImages
            triggrUploadImages={triggrUploadImages}
            carInfo={carInfo}
            mode={mode}
            setLoader={(v) => {
              setLoader(v);
              navigate("/profile");
            }}
          />
          <div className="mt-10 flex justify-end">
            <Button
              type="submit"
              disabled={loader}
              onClick={(e) => onSubmit(e)}
            >
              {!loader ? (
                "Submit"
              ) : (
                <LuLoaderCircle className="animate-spin text-lg" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
