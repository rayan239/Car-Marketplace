import { Button } from "@/components/ui/button";
import Service from "@/Shared/Service";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
function OwnersDetail({ carDetail }) {
  const { user } = useUser();
  const navigation = useNavigate();
  const OnMessageOwnerButtonClick = async () => {
    const userId = user.primaryEmailAddress.emailAddress.split("@")[0];
    const ownerUserId = carDetail?.createdBy.split("@")[0];
    // create current user id
    try {
      await Service.CreateSendBirdUser(
        userId,
        user?.fullName,
        user?.imageUrl
      ).then((resp) => {
        console.log(resp);
      });
    } catch (e) {}

    // Owner user id

    try {
      //console.log(ownerUserId);

      await Service.CreateSendBirdUser(
        ownerUserId,
        carDetail?.userName,
        carDetail?.userImageUrl
      ).then((resp) => {
        console.log(resp);
      });
    } catch (e) {}

    //channel
    try {
      await Service.createSendBirdChannel(
        [userId, ownerUserId],
        carDetail?.listingTitle
      ).then((resp) => {
        console.log(resp);
        console.log("Channel Created");
        navigation("/profile");
      });
    } catch (e) {}
  };
  return (
    <div className="p-10 border rounded-xl shadow-md mt-7">
      <h2 className="font-bold text-2xl mb-3">Owner Details</h2>
      <img
        src={carDetail?.userImageUrl}
        className="w-[100px] h-[100px] rounded-full"
      />
      <h2 className="mt-2 font-bold text-xl">{carDetail?.userName}</h2>
      <h2 className="mt-2 text-gray-500">{carDetail?.createdBy}</h2>

      <Button className="w-full mt-6" onClick={OnMessageOwnerButtonClick}>
        Message Owner
      </Button>
    </div>
  );
}

export default OwnersDetail;
