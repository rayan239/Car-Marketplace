import { eq } from "drizzle-orm";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { db } from "./../../../config";
import { storage } from "./../../../config/firebaseConfig";
import { CarImages } from "./../../../config/schema";
function UploadImages({ triggrUploadImages, setLoader, carInfo, mode }) {
  const [selectedFileList, setselectedFileList] = useState([]);
  const [EditCarImageList, setEditCarImageList] = useState([]);

  useEffect(() => {
    if (mode == "edit") {
      setEditCarImageList([]);
      carInfo?.images.forEach((image) => {
        setEditCarImageList((prev) => [...prev, image?.imageUrl]);
        console.log(image);
      });
    }
  }, [carInfo]);
  useEffect(() => {
    if (triggrUploadImages) {
      UploadImageToServer();
    }
  }, [triggrUploadImages]);
  const onFileSelected = (event) => {
    const files = event.target.files;

    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      setselectedFileList((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image, index) => {
    const result = selectedFileList.filter((item) => item != image);
    setselectedFileList(result);
  };

  const onImageRemoveFromDB = async (image, index) => {
    const result = await db
      .delete(CarImages)
      .where(eq(CarImages.id, carInfo?.images[index]?.id))
      .returning({ id: CarImages.id });
    const imageList = EditCarImageList.filter((item) => item != image);
    setEditCarImageList(imageList);
  };
  const UploadImageToServer = async () => {
    setLoader(true);
    await selectedFileList.forEach(async (file) => {
      const fileName = Date.now() + ".jpeg";
      const storageRef = ref(storage, "Car-Marketplace/" + fileName);
      const metaData = {
        contentType: "image/jpeg",
      };
      await uploadBytes(storageRef, file, metaData)
        .then((snapShot) => {
          console.log("Uploaded File");
        })
        .then((resp) => {
          getDownloadURL(storageRef).then(async (downloadUrl) => {
            console.log(downloadUrl);

            await db.insert(CarImages).values({
              imageUrl: downloadUrl,
              carListingId: triggrUploadImages,
            });
          });
        });
      setLoader(false);
    });
  };

  return (
    <div>
      <h2 className="font-semibold text-xl my-3">Upload Car Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {mode == "edit" &&
          EditCarImageList.map((image, index) => (
            <div key={index}>
              <IoIosCloseCircle
                className="absolute m-2 text-lg text-white"
                onClick={() => onImageRemoveFromDB(image, index)}
              />
              <img
                src={image}
                className="w-full h-[130px] object-cover rounded-xl"
              />
            </div>
          ))}

        {selectedFileList.map((image, index) => (
          <div key={index}>
            <IoIosCloseCircle
              className="absolute m-2 text-lg text-white"
              onClick={() => onImageRemove(image, index)}
            />
            <img
              src={URL.createObjectURL(image)}
              className="w-full h-[130px] object-cover rounded-xl"
            />
          </div>
        ))}

        <label htmlFor="upload-images">
          <div className="border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md">
            <h2 className="text-lg text-center">+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple={true}
          id="upload-images"
          onChange={onFileSelected}
          className="opacity-0"
        />
      </div>
    </div>
  );
}

export default UploadImages;
