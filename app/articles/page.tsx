"use client"

import Header from '@/app/components/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import article1 from '@/app/assets/images/article1.jpg';
import MainTemplate from '@/app/components/MainTemplate';

const articles = [
    {
        id: 1,
        title: "Trekking and Documenting the Surreal Patagonia",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: article1,
        date: "March 2, 2014",
        categories: ["Camera", "Nature"],
        slug: "trekking-and-documenting-the-surreal-patagonia"
    },
    {
        id: 2,
        title: "Portugal, Here I Come",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: article1,
        date: "March 2, 2013",
        categories: ["Photography", "Nature"],
        slug: "portugal-here-i-come"
    },
    {
        id: 3,
        title: "Trees, Trees Everywhere",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: article1,
        date: "March 2, 2013",
        categories: ["Photography", "Nature"],
        slug: "trees-trees-everywhere"
    }
];


export default function ArticlesPage() {

    const router = useRouter();

    const handleArticleClick = (slug: string) => {
        router.push(`/articles/${slug}`);
    };

    return (
        <MainTemplate>
            <Header />
            <main className="p-4">
                {articles.map((article) => (
                    <article key={article.id}
                        className="flex mb-8 border-b pb-4 cursor-pointer hover:bg-gray-50 transition-all duration-200"
                        onClick={() => handleArticleClick(article.slug)}
                        role="link"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleArticleClick(article.slug);
                            }
                        }}>
                        <Image src={article.image} alt={article.title} width={100} height={100} className="mr-4" />
                        <div>
                            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                            <p className="mb-2">{article.excerpt}</p>
                            <div className="text-sm text-gray-500">
                                <span>{article.date}</span>
                                {article.categories.map((category, i) => (
                                    <span key={i} className="ml-2 bg-gray-200 px-2 py-1 rounded">{category}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </main>
        </MainTemplate>
    );
}