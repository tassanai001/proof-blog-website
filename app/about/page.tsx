import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

import Image from 'next/image';
import Header from '@/app/components/Header';
import team1 from '@/app/assets/images/team1.jpg';
import MainTemplate from '@/app/components/MainTemplate';

const AboutPage = () => {
    const teamMembers = [
        { name: 'Rob Thomas', image: '@/app/assets/images/team1.jpg' },
        { name: 'Jen Jillians', image: '/api/placeholder/200/200' },
        { name: 'Tommy Tikes', image: '/api/placeholder/200/200' },
    ];

    return (
        <MainTemplate>
            <Header />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <section className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">About Proof</h1>
                    <p className="mb-4">
                        We started Proof to commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus
                        id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                    <p>
                        Then we decided that it was varius enim in eros elementum tristique. Duis cursus, mi quis
                        viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean
                        faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                        posuere.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8">The Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <Image
                                    src={team1}
                                    alt={member.name}
                                    className="w-full h-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <div className="flex justify-center space-x-4">
                                    <Twitter size={20} className="text-gray-500" />
                                    <Instagram size={20} className="text-gray-500" />
                                    <Facebook size={20} className="text-gray-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </MainTemplate>
    );
};

export default AboutPage;