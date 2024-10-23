// app/articles/[slug]/page.tsx
"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BlogPostProps {
    params: {
        slug: string;
    };
}

const BlogPost: React.FC<BlogPostProps> = ({ params }) => {
    console.log(params);

    // Mock data - in a real app this would come from an API or CMS
    const post = {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.`,
        photoGrid: [
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200",
            "/api/placeholder/300/200"
        ],
        mainImage: "/api/placeholder/800/400",
        date: "March 2, 2013",
        categories: ["Photography", "Nature"]
    };

    const suggestedStories = [
        {
            title: "Portugal, Here I Come",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            image: "/api/placeholder/200/150",
            date: "March 2, 2013",
            categories: ["Photography", "Nature"]
        },
        {
            title: "Trees, Trees Everywhere",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            image: "/api/placeholder/200/150",
            date: "March 2, 2013",
            categories: ["Photography", "Nature"]
        },
        {
            title: "A Lonely Road from Russia",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            image: "/api/placeholder/200/150",
            date: "March 2, 2013",
            categories: ["Photography", "Nature"]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Main Quote */}
                <blockquote className="text-3xl font-light mb-8 border-l-4 pl-6">
                    {post.title}
                </blockquote>

                {/* Content Sections */}
                <div className="space-y-8">
                    <p className="text-gray-600">
                        {post.content}
                    </p>

                    <h2 className="text-2xl font-bold">Something new is coming</h2>

                    {/* Photo Grid */}
                    <div className="grid grid-cols-5 gap-4 mb-8">
                        {post.photoGrid.map((photo, index) => (
                            <div key={index} className="relative h-24">
                                <Image
                                    src={photo}
                                    alt={`Photo ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-gray-500">Here&apos; s some text about this photo</p>

                    {/* Main Image */}
                    <div className="relative h-96 w-full mb-8">
                        <Image
                            src={post.mainImage}
                            alt="Main article image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <p className="text-sm text-gray-500">Here&apos;s some text about this photo</p>

                    {/* Social Share Section */}
                    <div className="border-t border-b py-6 my-8">
                        <h3 className="text-xl mb-4">Loved it? Share it.</h3>
                        <div className="flex space-x-4">
                            <div className="flex items-center space-x-2">
                                <div className="fb-like" data-share="true" data-width="450" data-show-faces="true"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Email Subscription */}
                <div className="relative my-16">
                    <div className="absolute inset-0">
                        <Image
                            src="/api/placeholder/1200/300"
                            alt="Subscribe background"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    </div>

                    <div className="relative py-16 text-center text-white">
                        <h2 className="text-2xl mb-6">Get the latest articles in your inbox</h2>
                        <div className="max-w-xl mx-auto px-4">
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-1 px-4 py-2 text-black"
                                />
                                <button className="bg-blue-600 text-white px-6 py-2">
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Suggested Stories */}
                <div className="my-16">
                    <h2 className="text-2xl text-center mb-8">Suggested Stories</h2>
                    <div className="space-y-6">
                        {suggestedStories.map((story, index) => (
                            <Link href={`/articles/${story.title.toLowerCase().replace(/ /g, '-')}`} key={index}>
                                <div className="flex items-center justify-between group hover:bg-gray-50 p-4 transition-colors">
                                    <div className="flex items-center space-x-4">
                                        <div className="relative w-32 h-24">
                                            <Image
                                                src={story.image}
                                                alt={story.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold group-hover:text-blue-600">{story.title}</h3>
                                            <p className="text-gray-600 line-clamp-2">{story.excerpt}</p>
                                            <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
                                                <span>{story.date}</span>
                                                {story.categories.map((cat, i) => (
                                                    <span key={i} className="px-2 py-1 bg-gray-100 rounded-full">{cat}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight className="text-gray-400 group-hover:text-blue-600" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;