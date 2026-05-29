import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../redux/cartSlice';
import { PaystackButton } from 'react-paystack';
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'components/ui/tabs';
import StatCard from './_components/StatCard';
import { Link } from 'react-router-dom';
import Footer from 'components/layouts/Footer';
import { Icon } from '@iconify/react';
import Container from 'components/layouts/Container';
import Header from 'components/layouts/Header';

const Store = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // Fallback to a dummy key if the env variable is not found
    const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com", // Dummy email for demo
        amount: totalAmount > 0 ? totalAmount * 100 : 100, // Paystack amount is in kobo, must be > 0
        publicKey
    };



    const handlePaystackSuccessAction = (reference) => {
        alert("Payment complete! Reference: " + reference.reference);
        dispatch(clearCart());
        setIsCartOpen(false);
    };

    const handlePaystackCloseAction = () => {
        console.log('Payment closed');
    };

    const componentProps = {
        ...config,
        text: 'Checkout with Paystack',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

    return (
        <div>
            <Container>
                <Header title="BeeC00des" showNav={false} />
            </Container>


            <div className="text-white p-6 md:p-12 font-mono" style={{ backgroundColor: '#010001' }}>
                <div className="max-w-6xl mx-auto">
                    <div className='flex justify-between'>
                        <Link to="/">
                            <h1 className="text-3xl font-bold mb-8 text-[#199C16]">Store</h1>
                        </Link>

                        <div className="flex gap-4">


                            <Link to="/">
                                <button
                                    className="relative flex items-center gap-2 border border-[#199C16] px-5 py-2 w-fit text-xs font-semibold tracking-wider hover:bg-[#199C16] hover:text-white transition-all"
                                >
                                    <Icon icon="mdi:cart" width="18" /> CART

                                    {totalQuantity > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                            {totalQuantity}
                                        </span>
                                    )}
                                </button>
                            </Link>
                            <Link to="/">
                                <button
                                    className="flex items-center gap-2 border border-[#199C16] px-5 py-2 w-fit text-xs font-semibold tracking-wider hover:bg-[#199C16] hover:text-white transition-all"
                                >
                                    <Icon icon="mdi:chevron-double-left" width="18" /> BACK TO HOME
                                </button>
                            </Link>
                        </div>
                    </div>

                    <Tabs defaultValue="stationary" className="flex flex-col md:flex-row gap-6 md:gap-10">
                        <TabsList className="flex flex-row md:flex-col w-full md:w-[200px] md:h-[600px] h-fit lg:h-fit lg:bg-[#14171c] border border-[#31363B] mb-6 md:mb-10 p-2 gap-2 md:gap-1 overflow-x-auto scrollbar-none">
                            <TabsTrigger
                                value="stationary"
                                className="flex-shrink-0 md:w-full justify-center md:justify-start whitespace-nowrap px-4 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-[#1f2428] data-[state=active]:bg-[#199C16] data-[state=active]:text-white data-[state=active]:font-semibold transition-all"
                            >
                                Stationary
                            </TabsTrigger>
                            <TabsTrigger
                                value="swags"
                                className="flex-shrink-0 md:w-full justify-center md:justify-start whitespace-nowrap px-4 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-[#1f2428] data-[state=active]:bg-[#199C16] data-[state=active]:text-white data-[state=active]:font-semibold transition-all"
                            >
                                Swags
                            </TabsTrigger>
                            <TabsTrigger
                                value="template"
                                className="flex-shrink-0 md:w-full justify-center md:justify-start whitespace-nowrap px-4 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-[#1f2428] data-[state=active]:bg-[#199C16] data-[state=active]:text-white data-[state=active]:font-semibold transition-all"
                            >
                                Template
                            </TabsTrigger>
                            <TabsTrigger
                                value="books"
                                className="flex-shrink-0 md:w-full justify-center md:justify-start whitespace-nowrap px-4 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-[#1f2428] data-[state=active]:bg-[#199C16] data-[state=active]:text-white data-[state=active]:font-semibold transition-all"
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

            {/* Cart Sidebar */}
            {isCartOpen && (
                <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-60 backdrop-blur-sm transition-all duration-300">
                    <div className="w-full max-w-md bg-[#0a0c10] h-full shadow-2xl border-l border-[#31363B] flex flex-col animate-in slide-in-from-right duration-300">
                        <div className="flex items-center justify-between p-6 border-b border-[#31363B]">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <Icon icon="mdi:cart-outline" className="text-[#199C16]" /> Your Cart
                            </h2>
                            <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white bg-[#14171c] p-2 rounded-full transition-colors cursor-pointer">
                                <Icon icon="mdi:close" width="24" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-none">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                    <Icon icon="mdi:cart-remove" width="64" className="mb-4 opacity-50" />
                                    <p className="text-lg">Your cart is empty.</p>
                                    <p className="text-sm mt-2 text-gray-600">Add some items to get started!</p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between bg-[#14171c] p-4 rounded-xl border border-[#31363B]/50 shadow-sm hover:border-[#199C16]/30 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-[#1f2428] p-3 rounded-lg border border-[#31363B]">
                                                <Icon icon={item.icon || "mdi:package-variant"} style={{ color: item.color || '#199C16' }} className="text-2xl" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                                                <p className="text-gray-400 text-sm font-mono">${item.price} x {item.quantity}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <span className="text-white font-bold font-mono text-lg">${item.totalPrice}</span>
                                            <button
                                                onClick={() => dispatch(removeFromCart(item.id))}
                                                className="text-red-500 hover:text-red-400 bg-red-500/10 hover:bg-red-500/20 p-2 rounded-lg transition-colors cursor-pointer"
                                            >
                                                <Icon icon="mdi:trash-can-outline" width="20" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="p-6 border-t border-[#31363B] bg-[#14171c] z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-400 text-lg">Total Amount</span>
                                <span className="text-3xl font-bold text-white font-mono">${totalAmount}</span>
                            </div>
                            {items.length > 0 ? (
                                <PaystackButton
                                    {...componentProps}
                                    className="w-full bg-[#199C16] hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(25,156,22,0.3)] hover:shadow-[0_0_30px_rgba(25,156,22,0.5)] cursor-pointer"
                                />
                            ) : (
                                <button
                                    disabled
                                    className="w-full bg-[#1f2428] text-gray-500 py-4 rounded-xl font-bold text-lg cursor-not-allowed border border-[#31363B]"
                                >
                                    Checkout
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Store;