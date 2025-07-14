import CarItem from "../components/CarItem";
import Header from "../components/Header";
import { db } from "./../../config";
import Service from "@/Shared/Service";
import { CarImages, CarListing } from "./../../config/schema";
import { desc, eq } from "drizzle-orm";
import { useEffect, useState } from "react";

function Shop() {
    const [carList, setCarList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetAllCarListings();
    }, []);

    const GetAllCarListings = async () => {
        try {
            const result = await db
                .select()
                .from(CarListing)
                .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))

                //.where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
                .orderBy(desc(CarListing.id));

            // Manual formatting
            // const formattedResult = result.reduce((acc, item) => {
            //     const existingCar = acc.find((car) => car.id === item.CarListing.id);

            //     if (existingCar) {
            //         if (item.CarImages) {
            //             existingCar.images = existingCar.images || [];
            //             existingCar.images.push(item.CarImages);
            //         }
            //     } else {
            //         const newCar = { ...item.CarListing };
            //         if (item.CarImages) {
            //             newCar.images = [item.CarImages];
            //         }
            //         acc.push(newCar);
            //     }

            //     return acc;
            // }, []);
            const resp = Service.FormatResult(result);

            setCarList(resp);
        } catch (error) {
            console.error("Error fetching car listings:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header />


            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">

                {/* Animated Background Elements */}
                {/* <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div> */}

                {/* Header with enhanced animations */}
                <div className="relative z-10 text-center py-20 px-6">
                    <div className="animate-fade-in-down">
                        <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-6 tracking-tight">
                            All Cars
                        </h1>
                    </div>
                    <div className="animate-fade-in-up animation-delay-300">
                        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
                            Discover your perfect ride from our premium collection
                        </p>
                    </div>
                    <div className="animate-scale-in animation-delay-600">
                        <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-lg"></div>
                    </div>
                </div>

                {/* Content with enhanced styling */}
                <div className="relative z-10 mx-24 px-6 pb-20">
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {Array.from({ length: 8 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 animate-pulse hover:shadow-2xl transition-all duration-500"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="h-52 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mb-6 shimmer"></div>
                                    <div className="space-y-4">
                                        <div className="h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-3/4 shimmer"></div>
                                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-1/2 shimmer"></div>
                                        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-2/3 shimmer"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {carList?.length > 0 ? (
                                carList.map((item, index) => (
                                    <div
                                        key={index}
                                        className="animate-slide-up"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <CarItem car={item} />
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-24 animate-fade-in">
                                    <div className="relative">
                                        <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 flex items-center justify-center animate-bounce-slow shadow-2xl">
                                            <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-800 mb-4">No Cars Available</h3>
                                    <p className="text-gray-500 text-xl">Check back later for new arrivals!</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {/* Enhanced CSS animations */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }

                @keyframes fade-in-down {
                    from {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes scale-in {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes shimmer {
                    0% { background-position: -200px 0; }
                    100% { background-position: calc(200px + 100%) 0; }
                }

                @keyframes bounce-slow {
                    0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
                    40%, 43% { transform: translate3d(0, -10px, 0); }
                    70% { transform: translate3d(0, -5px, 0); }
                    90% { transform: translate3d(0, -2px, 0); }
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animate-fade-in-down {
                    animation: fade-in-down 1s ease-out forwards;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out forwards;
                }

                .animate-scale-in {
                    animation: scale-in 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-slide-up {
                    animation: slide-up 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 3s infinite;
                }

                .animate-fade-in {
                    animation: fade-in-up 1s ease-out forwards;
                    opacity: 0;
                }

                .shimmer {
                    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                    background-size: 200px 100%;
                    animation: shimmer 1.5s infinite;
                }

                .animation-delay-300 {
                    animation-delay: 300ms;
                }

                .animation-delay-600 {
                    animation-delay: 600ms;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
}

export default Shop;


