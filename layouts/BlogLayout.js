import Head from 'next/head';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import Footer from '@/components/Footer';

import 'prism-themes/themes/prism-atom-dark.css';

export default function BlogLayout({ children, frontMatter }) {
  const title = `${frontMatter.title} - Vaibhav Shinde`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={frontMatter.subtext} />
        <meta name="description" content={frontMatter.subtext} />
        <meta name="author" content="Vaibhav Shinde" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={frontMatter.subtext}
        />
      </Head>
      <article className="w-full max-w-3xl mx-auto p-8 mt-12">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {frontMatter.title}
          </h1>
          <div className="flex items-center space-x-3 text-gray-700">
            <div className="flex items-center space-x-2">
              <Image
                src="/static/images/avatar.jpg"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-gray-600 text-sm">Vaibhav Shinde</span>
            </div>
            <div className="text-sm text-gray-500 font-light">
              {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
            </div>
          </div>
        </div>
        <div className="prose lg:prose-lg max-w-none w-full mt-8">
          {children}
        </div>
      </article>

      <Footer />
    </>
  );
}
