import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'components/ui/tabs';
import StatCard from './_components/StatCard';
import { Link } from 'react-router-dom';
import Footer from 'components/layouts/Footer';


const Store = () => {
    return (
        <div className="text-white p-6 md:p-12 font-mono" style={{ backgroundColor: '#010001' }}>
            <div className="max-w-6xl mx-auto">
                <div className='flex justify-between'>
                <Link to="/">
                    <h1 className="text-3xl font-bold mb-8 text-[#199C16]">Store</h1>
                </Link>

                 <Link to="/">
                    <h1 className="text-2xl font-bold mb-8 bg-[#199C16] px-6 py-2 rounded-lg cursor-pointer hover:bg-[#199C16] hover:text-white hover:border-none transition-colors duration-300 border border-transparent">Back</h1>
                </Link>
                </div>

                <Tabs defaultValue="stationary" className=" flex gap-10">
                    <TabsList className="flex flex-col w-[200px] h-fit bg-[#14171c] border border-[#31363B] mb-10 p-2 gap-1">
                        <TabsTrigger
                            value="stationary"
                            className="w-full justify-start px-4 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-[#1f2428] data-[state=active]:bg-[#199C16] data-[state=active]:text-white data-[state=active]:font-semibold transition-all"
                        >
                            Stationary
                        </TabsTrigger>
                        <TabsTrigger
                            value="swags"
                            className="w-full justify-start px-4 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-[#1f2428] data-[state=active]:bg-[#199C16] data-[state=active]:text-white data-[state=active]:font-semibold transition-all"
                        >
                            Swags
                        </TabsTrigger>
                        <TabsTrigger
                            value="template"
                            className="w-full justify-start px-4 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-[#1f2428] data-[state=active]:bg-[#199C16] data-[state=active]:text-white data-[state=active]:font-semibold transition-all"
                        >
                            Template
                        </TabsTrigger>
                        <TabsTrigger
                            value="books"
                            className="w-full justify-start px-4 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-[#1f2428] data-[state=active]:bg-[#199C16] data-[state=active]:text-white data-[state=active]:font-semibold transition-all"
                        >
                            Books
                        </TabsTrigger>
                    </TabsList>


                    <TabsContent value="stationary" className="space-y-12 animate-in fade-in duration-500">
                        <section>
                            <h2 className="text-[#199C16] text-xl font-bold mb-6  tracking-wider">Stationary</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                <StatCard title="Recreation" value="12822" icon="mdi:microphone" color="#EF4444" />
                                <StatCard title="Social" value="3241445" icon="mdi:chat-processing" color="#10B981" />
                                <StatCard title="Education" value="242425" icon="mdi:book-open-page-variant" color="#3B82F6" />
                                <StatCard title="Photograph" value="757546" icon="mdi:camera" color="#EAB308" />
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-10">
                                <StatCard title="Recreation" value="12822" icon="mdi:microphone" color="#EF4444" />
                                <StatCard title="Social" value="3241445" icon="mdi:chat-processing" color="#10B981" />
                                <StatCard title="Education" value="242425" icon="mdi:book-open-page-variant" color="#3B82F6" />
                                <StatCard title="Photograph" value="757546" icon="mdi:camera" color="#EAB308" />
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-10">
                                <StatCard title="Recreation" value="12822" icon="mdi:microphone" color="#EF4444" />
                                <StatCard title="Social" value="3241445" icon="mdi:chat-processing" color="#10B981" />
                                <StatCard title="Education" value="242425" icon="mdi:book-open-page-variant" color="#3B82F6" />
                                <StatCard title="Photograph" value="757546" icon="mdi:camera" color="#EAB308" />
                            </div>
                        </section>


                    </TabsContent>

                    <TabsContent value="swags" className="space-y-12 animate-in fade-in duration-500">
                        <section>
                            <h2 className="text-[#199C16] text-xl font-bold mb-6  tracking-wider">Swag</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                <StatCard title="Recreation" value="12822" icon="mdi:microphone" color="#EF4444" />
                                <StatCard title="Social" value="3241445" icon="mdi:chat-processing" color="#10B981" />
                                <StatCard title="Education" value="242425" icon="mdi:book-open-page-variant" color="#3B82F6" />
                                <StatCard title="Photograph" value="757546" icon="mdi:camera" color="#EAB308" />
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-10">
                                <StatCard title="Recreation" value="12822" icon="mdi:microphone" color="#EF4444" />
                                <StatCard title="Social" value="3241445" icon="mdi:chat-processing" color="#10B981" />
                                <StatCard title="Education" value="242425" icon="mdi:book-open-page-variant" color="#3B82F6" />
                                <StatCard title="Photograph" value="757546" icon="mdi:camera" color="#EAB308" />
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-10">
                                <StatCard title="Recreation" value="12822" icon="mdi:microphone" color="#EF4444" />
                                <StatCard title="Social" value="3241445" icon="mdi:chat-processing" color="#10B981" />
                                <StatCard title="Education" value="242425" icon="mdi:book-open-page-variant" color="#3B82F6" />
                                <StatCard title="Photograph" value="757546" icon="mdi:camera" color="#EAB308" />
                            </div>
                        </section>

                    </TabsContent>
                    <TabsContent value="template" className="space-y-12 animate-in fade-in duration-500">
                        <section>
                            <h2 className="text-[#199C16] text-xl font-bold mb-6  tracking-wider">Template</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                <StatCard title="Recreation" value="12822" icon="mdi:microphone" color="#EF4444" />
                                <StatCard title="Social" value="3241445" icon="mdi:chat-processing" color="#10B981" />
                                <StatCard title="Education" value="242425" icon="mdi:book-open-page-variant" color="#3B82F6" />
                                <StatCard title="Photograph" value="757546" icon="mdi:camera" color="#EAB308" />
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-10">
                                <StatCard title="Recreation" value="12822" icon="mdi:microphone" color="#EF4444" />
                                <StatCard title="Social" value="3241445" icon="mdi:chat-processing" color="#10B981" />
                                <StatCard title="Education" value="242425" icon="mdi:book-open-page-variant" color="#3B82F6" />
                                <StatCard title="Photograph" value="757546" icon="mdi:camera" color="#EAB308" />
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-10">
                                <StatCard title="Recreation" value="12822" icon="mdi:microphone" color="#EF4444" />
                                <StatCard title="Social" value="3241445" icon="mdi:chat-processing" color="#10B981" />
                                <StatCard title="Education" value="242425" icon="mdi:book-open-page-variant" color="#3B82F6" />
                                <StatCard title="Photograph" value="757546" icon="mdi:camera" color="#EAB308" />
                            </div>
                        </section>
                    </TabsContent>
                    <TabsContent value="books" className="space-y-12 animate-in fade-in duration-500">
                        <section>
                            <h2 className="text-[#199C16] text-xl font-bold mb-6  tracking-wider">Books</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                <StatCard title="Recreation" value="12822" icon="mdi:microphone" color="#EF4444" />
                                <StatCard title="Social" value="3241445" icon="mdi:chat-processing" color="#10B981" />
                                <StatCard title="Education" value="242425" icon="mdi:book-open-page-variant" color="#3B82F6" />
                                <StatCard title="Photograph" value="757546" icon="mdi:camera" color="#EAB308" />
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-10">
                                <StatCard title="Recreation" value="12822" icon="mdi:microphone" color="#EF4444" />
                                <StatCard title="Social" value="3241445" icon="mdi:chat-processing" color="#10B981" />
                                <StatCard title="Education" value="242425" icon="mdi:book-open-page-variant" color="#3B82F6" />
                                <StatCard title="Photograph" value="757546" icon="mdi:camera" color="#EAB308" />
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-10">
                                <StatCard title="Recreation" value="12822" icon="mdi:microphone" color="#EF4444" />
                                <StatCard title="Social" value="3241445" icon="mdi:chat-processing" color="#10B981" />
                                <StatCard title="Education" value="242425" icon="mdi:book-open-page-variant" color="#3B82F6" />
                                <StatCard title="Photograph" value="757546" icon="mdi:camera" color="#EAB308" />
                            </div>
                        </section>
                    </TabsContent>
                </Tabs>
            </div>


            <div className="-mt-20">
                <Footer />
            </div>

        </div>
    );
};

export default Store;