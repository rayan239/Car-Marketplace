import { useUser } from "@clerk/clerk-react";
import { SendBirdProvider } from "@sendbird/uikit-react";
import "@sendbird/uikit-react/dist/index.css";
import { GroupChannel } from "@sendbird/uikit-react/GroupChannel";
import { GroupChannelList } from "@sendbird/uikit-react/GroupChannelList";
import { useEffect, useState } from "react";
function Inbox() {
  const { user } = useUser();
  const [userId, setUserId] = useState();
  const [channelUrl, setChannnelUrl] = useState();
  useEffect(() => {
    if (user) {
      const id = (user.primaryEmailAddress?.emailAddress).split("@")[0];
      setUserId(id);
    }
  }, [user]);
  return (
    user && (
      <div>
        <div style={{ width: "100%", height: "500px" }}>
          <SendBirdProvider
            appId={import.meta.env.VITE_SENBIRD_APP_ID}
            userId={userId}
            nickname={user?.fullName}
            profileUrl={user?.imageUrl}
            allowProfileEdit={true}
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 h-full">
              {/* Channel List */}
              <div className="p=5 border shadow-lg">
                <GroupChannelList
                  onChannelSelect={(channel) => {
                    setChannnelUrl(channel?.url);
                  }}
                  channelListQueryParams={{
                    includeEmpty: true,
                  }}
                />
              </div>
              {/* Channel Message Area */}
              <div className="md:col-span-2 shadow-lg">
                <GroupChannel channelUrl={channelUrl} />
              </div>
            </div>
          </SendBirdProvider>
        </div>
      </div>
    )
  );
}

export default Inbox;
