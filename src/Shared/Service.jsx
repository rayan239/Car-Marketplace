import axios from "axios";
const SendBirdApplocationId = import.meta.env.VITE_SENBIRD_APP_ID;
const SendBirdApiToken = import.meta.env.VITE_SENDBIRD_API_TOKEN;
const FormatResult = (resp) => {
  let result = [];
  let finalResult = [];
  resp.forEach((item) => {
    const listingId = item.carListing?.id;
    if (!result[listingId]) {
      result[listingId] = {
        car: item.carListing,
        images: [],
      };
    }
    if (item.carImages) {
      result[listingId].images.push(item.carImages);
    }
  });
  result.forEach((item) => {
    finalResult.push({
      ...item.car,
      images: item.images,
    });
  });

  return finalResult;
};

const CreateSendBirdUser = (userId, nickname, profileUrl) => {
  return axios.post(
    "https://api-" + SendBirdApplocationId + ".sendbird.com/v3/users",
    {
      user_id: userId,
      nickname: nickname,
      profile_url: profileUrl,
      issue_access_token: false,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Api-Token": SendBirdApiToken,
      },
    }
  );
};

const createSendBirdChannel = (users, title) => {
  return axios.post(
    "https://api-" + SendBirdApplocationId + ".sendbird.com/v3/group_channels",
    {
      user_ids: users,
      is_distinct: true,
      name: title,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Api-Token": SendBirdApiToken,
      },
    }
  );
};
export default {
  FormatResult,
  CreateSendBirdUser,
  createSendBirdChannel,
};
