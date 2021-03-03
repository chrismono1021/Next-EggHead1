import React, {FunctionComponent} from 'react'
import {NextSeo} from 'next-seo'
import Markdown from 'react-markdown'
import Topic from 'components/search/components/topic'
import Image from 'next/image'
import Link from 'next/link'

type LandingProps = {
  course: any
}

const landingPage: FunctionComponent<LandingProps> = () => {
  const course = {
    id: '418892',
    title: 'Introduction to Cloudflare Workers',
    path: '/playlists/introduction-to-cloudflare-workers-5aa3',
    image:
      'https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/418/892/full/EGH_IntroCloudFlareWorkers_Final.png',
    resources: [
      {
        title: 'Create a Cloudflare Workers Account',
        slug: 'cloudflare-create-a-cloudflare-workers-account',
        path: '/lessons/cloudflare-create-a-cloudflare-workers-account',
      },
      {
        title: 'Install and Configure the Cloudflare Workers CLI Wrangler',
        slug:
          'cloudflare-install-and-configure-the-cloudflare-workers-cli-wrangler',
        path:
          '/lessons/cloudflare-install-and-configure-the-cloudflare-workers-cli-wrangler',
      },
      {
        title:
          "Generate New Cloudflare Workers Projects with Wrangler's generate Command",
        slug:
          'cloudflare-generate-new-cloudflare-workers-projects-with-wrangler-s-generate-command',
        path:
          '/lessons/cloudflare-generate-new-cloudflare-workers-projects-with-wrangler-s-generate-command',
      },
      {
        title: 'Write Your First Cloudflare Workers Serverless Function',
        slug:
          'cloudflare-write-your-first-cloudflare-workers-serverless-function',
        path:
          '/lessons/cloudflare-write-your-first-cloudflare-workers-serverless-function',
      },
      {
        title: 'Preview and Publish Your Cloudflare Workers Project',
        slug: 'cloudflare-preview-and-publish-your-cloudflare-workers-project',
        path:
          '/lessons/cloudflare-preview-and-publish-your-cloudflare-workers-project',
      },
      {
        title: 'Render HTML Pages with Cloudflare Workers',
        slug: 'cloudflare-render-html-pages-with-cloudflare-workers',
        path: '/lessons/cloudflare-render-html-pages-with-cloudflare-workers',
      },
      {
        title: 'Render Cloudflare Region Data for a Request Using request.cf',
        slug:
          'cloudflare-render-cloudflare-region-data-for-a-request-using-request-cf',
        path:
          '/lessons/cloudflare-render-cloudflare-region-data-for-a-request-using-request-cf',
      },
      {
        title:
          'Deploy to a Custom Domain with Cloudflare Wrangler Environments',
        slug:
          'cloudflare-deploy-to-a-custom-domain-with-cloudflare-wrangler-environments',
        path:
          '/lessons/cloudflare-deploy-to-a-custom-domain-with-cloudflare-wrangler-environments',
      },
    ],
  }

  return (
    <>
      <div className="mb-10 pb-10 xl:px-0 px-5 max-w-screen-xl mx-auto">
        <div className="mt-10 mb-16 text-center">
          <div className="mb-10">
            <Image priority src={course.image} height="270" width="270" />
          </div>
          <p className="text-lg md:text-2xl leading-6 text-gray-500">
            Portfolio Project Challenge
          </p>
          <h1 className="text-2xl md:text-4xl font-bold mt-2">
            {course.title}
          </h1>
        </div>
        <ProjectBrief
          className="pb-12"
          topic={{
            name: 'cloudflare',
            label: 'Project Brief',
          }}
        >
          <Markdown className="prose dark:prose-dark pt-2 sm:text-base text-sm leading-normal text-gray-800 dark:text-gray-200 mt-0">
            {`You are a developer for a national concert promoter.

Music fans from all over the world visit your site to see when and where the next show is going to be. To save them time when they visit the page, we want to show them upcoming events at a venue close to their location.

Your task is to create and deploy a Cloudflare Worker that will examine the request for location data, and render HTML featuring information for the closest concert taking place based on the nearest [regional Cloudflare Location](https://www.cloudflare.com/network/). Choose locations for testing where you have friends (or a VPN 😅) so you can prove this functionality works as expected.`}
          </Markdown>
        </ProjectBrief>

        <div className="flex justify-center">
          <svg
            width="7"
            height="155"
            viewBox="0 0 7 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="3.5"
              y1="-1.5299e-07"
              x2="3.50001"
              y2="155"
              stroke="#B0B0B0"
              strokeWidth="7"
              strokeDasharray="10 10"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-16 mb-16">
          <div className="relative px-10 py-10 bg-white dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 col-span-2 shadow rounded-md border border-gray-100 sm:mr-0 md:mr-4">
            <div
              className="absolute rounded-t-lg rounded-b-none left-0 top-4 -mt-5 h-3 w-full bg-gradient-to-r"
              style={{
                background:
                  'linear-gradient(to right, #F5C361 0%, #E75E3C 100%)',
              }}
            />
            <h1 className="sm:text-2xl text-xl font-bold mb-2">Performance</h1>
            <Markdown className="prose dark:prose-dark pt-2 sm:text-base text-sm leading-normal text-gray-800 dark:text-gray-200 mt-0">
              {`- No styling or third party npm modules are prescribed. Instead, the focus is on the big takeaways that the Cloudflare network has many locations, and a Worker project supports JS.

- In the course, Kristian deploys a worker that makes use of Cloudflare's **IncomingRequestCfProperties** ([see docs](https://developers.cloudflare.com/workers/runtime-apis/request#incomingrequestcfproperties)) to retrieve the user's country. There are additional data available here that could be used in fulfilling this project brief.

- The template rendered in the demo ([see repo](https://github.com/signalnerve/region-workers-example/blob/main/template.js)) imports the country-code-emoji package from npm. While the project brief doesn't call for using a 3rd party library, the learner should be able to see how they could create an object with hardcoded demo data.`}
            </Markdown>
          </div>
          <div className="relative px-10 py-10 bg-white dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 col-span-1 shadow rounded-md border border-gray-100 mt-4 md:mt-0">
            <div
              className="absolute rounded-t-lg rounded-b-none left-0 top-4 -mt-5 h-3 w-full bg-gradient-to-r"
              style={{
                background:
                  'linear-gradient(to right, #E75E3C 0%, #F5C361 100%)',
              }}
            />
            <h1 className="sm:text-2xl text-xl font-bold mb-2">Standards</h1>
            <Markdown className="prose dark:prose-dark pt-2 sm:text-base text-sm leading-normal text-gray-800 dark:text-gray-200 mt-0">
              {`- The application uses Cloudflare Workers.

- The application is deployed to the web and is useable for its intended purpose.

- The application contains minimal bugs.

- The application is accessible.`}
            </Markdown>
          </div>
        </div>

        <div className="flex justify-center">
          <svg
            width="7"
            height="155"
            viewBox="0 0 7 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="3.5"
              y1="-1.5299e-07"
              x2="3.50001"
              y2="155"
              stroke="#B0B0B0"
              strokeWidth="7"
              strokeDasharray="10 10"
            />
          </svg>
        </div>

        <div className="relative bg-white dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 shadow rounded-md border border-gray-100 mt-16 mb-16 px-10 py-10">
          <div
            className="absolute rounded-t-lg rounded-b-none left-0 top-4 -mt-5 h-3 w-full bg-gradient-to-r"
            style={{
              background: 'linear-gradient(to right, #F5C361 0%, #E75E3C 100%)',
            }}
          />
          <h1 className="sm:text-2xl text-xl font-bold mb-2 text-center">
            Course Content
          </h1>

          <div className="max-w-screen-sm m-auto pb-4">
            <ul className="mt-10">
              {course?.resources?.map((lesson: any) => {
                return (
                  <li key={`${course.path}::${lesson.slug}`}>
                    <div className="flex items-center leading-tight py-2">
                      <Link href={lesson.path}>
                        <a className="py-1 flex space-x-2 items-center dark:text-gray-100 text-gray-700 hover:text-blue-600 group">
                          {/* prettier-ignore */}
                          <div className="flex-shrink-0"><svg className="text-gray-400 dark:text-gray-400 group-hover:text-blue-600" width={18} height={18} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" ><path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z" fill="currentColor"/></g></svg></div>
                          <Markdown className="prose dark:prose-dark md:dark:prose-lg-dark md:prose-lg text-gray-700 dark:text-gray-100 mt-0 text-base md:text-lg">
                            {lesson.title}
                          </Markdown>
                        </a>
                      </Link>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <svg
            width="7"
            height="155"
            viewBox="0 0 7 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="3.5"
              y1="-1.5299e-07"
              x2="3.50001"
              y2="155"
              stroke="#B0B0B0"
              strokeWidth="7"
              strokeDasharray="10 10"
            />
          </svg>
        </div>
        <div>
          <div className="mt-10 text-center pb-12">
            <h1 className="text-2xl md:text-4xl font-bold pb-4">
              Did you complete the Portfolio Project Challenge?
            </h1>
            <p className="text-lg md:text-2xl leading-6 text-gray-500">
              Let us know what you built!
            </p>

            <a
              className="inline-flex justify-center items-center px-6 py-4 font-semibold rounded-md bg-blue-600 text-white transition-all hover:bg-blue-700 ease-in-out duration-200 mt-12"
              title="Share on twitter"
              href="https://twitter.com/intent/tweet?text=I%20created%20my%20portfolio%20project%20for%20the%20Introduction%20to%20Cloudflare%20Workers%20course%20on%20@eggheadio!"
              rel="noopener"
            >
              Tweet @eggheadio
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export enum CARD_TYPES {
  SUMMARY = 'summary',
  SUMMARY_LARGE_IMAGE = 'summary_large_image',
}

export type Topic = {
  name: string
  label: string
  title?: string
}

type ProjectBriefProps = {
  topic: Topic
  className: any
  pageData?: any
  CTAComponent?: React.FC
  ogImage?: string
  verticalImage?: string
  cardType?: CARD_TYPES
}

const ProjectBrief: React.FC<ProjectBriefProps> = ({
  topic,
  children,
  ogImage,
  className,
  cardType = CARD_TYPES.SUMMARY_LARGE_IMAGE,
}) => {
  const description = `Build a localization engine that renders data based on the Edge location nearest to the application's user using Cloudflare Workers.`

  const title =
    topic.title ||
    `Introduction to Cloudflare Workers - Portfolio Project Challenge`

  return (
    <div className={`xl:px-0 dark:bg-gray-900 ${className ? className : ''}`}>
      <NextSeo
        description={description}
        title={title}
        titleTemplate={'%s | egghead.io'}
        twitter={{
          site: `@eggheadio`,
          cardType,
        }}
        openGraph={{
          title,
          description: description,
          site_name: 'egghead',
          images: [
            {
              url:
                ogImage ||
                `https://og-image-react-egghead.now.sh/topic/${topic.name}?orientation=landscape&v=20201104`,
            },
          ],
        }}
      />
      <div className="md:grid grid-cols-1 gap-5 justify-self-center space-y-5 md:space-y-0 dark:bg-gray-900">
        <div
          className={`bg-white grid grid-cols-8 h-full relative items-center overflow-hidden shadow rounded-md border border-gray-100 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 col-span-8`}
        >
          <div
            className="overflow-hidden sm:col-span-3 col-span-3 w-full h-full"
            style={{
              background: `url(https://og-image-react-egghead.now.sh/topic/${topic.name}?orientation=portrait&v=20201104)`,
              backgroundSize: 'cover',
              backgroundPosition: '38%',
            }}
          />
          <div className="sm:col-span-5 col-span-5 flex flex-col justify-start h-full px-12 py-12 pt-10">
            <h1 className="sm:text-2xl text-xl font-bold mb-2">
              {topic.label}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default landingPage
