"use client"

import Header from '@/app/components/Header';
import Image from 'next/image';

import article1 from '@/app/assets/images/article1.jpg';

const articles = [
  {
    title: '21st Century Ansel Adams',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: article1,
    date: 'March 2, 2014',
    categories: ['Camera', 'Nature'],
  },
  {
    title: '21st Century Ansel Adams',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: article1,
    date: 'March 2, 2014',
    categories: ['Camera', 'Nature'],
  }, {
    title: '21st Century Ansel Adams',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: article1,
    date: 'March 2, 2014',
    categories: ['Camera', 'Nature'],
  }, {
    title: '21st Century Ansel Adams',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: article1,
    date: 'March 2, 2014',
    categories: ['Camera', 'Nature'],
  }, {
    title: '21st Century Ansel Adams',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: article1,
    date: 'March 2, 2014',
    categories: ['Camera', 'Nature'],
  }, {
    title: '21st Century Ansel Adams',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: article1,
    date: 'March 2, 2014',
    categories: ['Camera', 'Nature'],
  }, {
    title: '21st Century Ansel Adams',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: article1,
    date: 'March 2, 2014',
    categories: ['Camera', 'Nature'],
  }, {
    title: '21st Century Ansel Adams',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: article1,
    date: 'March 2, 2014',
    categories: ['Camera', 'Nature'],
  }, {
    title: '21st Century Ansel Adams',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: article1,
    date: 'March 2, 2014',
    categories: ['Camera', 'Nature'],
  }, {
    title: '21st Century Ansel Adams',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    image: article1,
    date: 'March 2, 2014',
    categories: ['Camera', 'Nature'],
  },
];


export default function Home() {

  return (
    <>
      <Header />
      <main className="p-4">
        {articles.map((article, index) => (
          <article key={index} className="flex mb-8 border-b pb-4">
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
    </>
  );
}