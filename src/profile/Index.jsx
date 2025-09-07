import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyListing from "./components/MyListing";
import OrderHistory from "./components/OrderHistory";

function Profile() {
  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <Tabs defaultValue="my-listing" className="w-full">
          <TabsList className="w-full flex justify-start">
            <TabsTrigger value="my-listing">My Listing</TabsTrigger>
            <TabsTrigger value="orders">Order History</TabsTrigger>
          </TabsList>
          <TabsContent value="my-listing">
            <MyListing />
          </TabsContent>

          <TabsContent value="orders">
            <OrderHistory />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Profile;
