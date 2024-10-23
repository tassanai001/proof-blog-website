import Image from 'next/image';
import Footer from '@/app/components/Footer';
import heroImage from '@/app/assets/images/hero-image.jpg';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex min-h-screen">
                {/* Left side - Hero Image and Footer */}
                <div className="w-1/2 fixed left-0 top-0 h-screen flex flex-col">
                    <div className="flex-grow relative">
                        <Image
                            src={heroImage}
                            alt="Nature scenery"
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
                            <div className="border border-white p-4 mb-4">
                                <h1 className="text-6xl font-bold">PROOF</h1>
                            </div>
                            <h2 className="text-3xl mb-2">Explore.</h2>
                            <h2 className="text-3xl mb-2">Shoot.</h2>
                            <h2 className="text-3xl mb-4">Write.</h2>
                            <p className="text-xl">A Nature Photography Magazine</p>
                            <p className="text-lg">By Billy Rogers</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0">
                        <Footer />
                    </div>
                </div>

                {/* Right side - Content */}
                <div className="w-1/2 ml-[50%] h-screen overflow-hidden hover:overflow-auto transition-all duration-300">
                    <div className="min-h-screen">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}