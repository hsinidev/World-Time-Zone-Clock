import React from 'react';
// Assuming the template is in a relative path like this. Adjust if necessary.
// import { BlogPostTemplate } from '../../components/BlogPostTemplate'; 

// NOTE: To make this a standalone file, the BlogPostTemplate is mocked here.
// In your actual project, you would import your real template component.
const BlogPostTemplate: React.FC<{
  title: string;
  tableOfContents: React.ReactNode;
  articleContent: React.ReactNode;
  faqData: { question: string; answer: React.ReactNode }[];
  jsonLdSchema: object;
}> = ({ title, tableOfContents, articleContent, faqData, jsonLdSchema }) => (
  <div className="bg-gray-900 text-gray-100 font-sans">
    <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          {title}
        </h1>
      </header>
      <main className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg">
        <aside className="mb-8 p-4 bg-gray-900 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold text-teal-400 mb-3">Table of Contents</h2>
          {tableOfContents}
        </aside>
        <article className="prose prose-invert lg:prose-xl max-w-none prose-h2:text-3xl prose-h2:font-bold prose-h2:text-teal-400 prose-h3:text-2xl prose-h3:font-semibold prose-h3:text-blue-400 prose-a:text-teal-400 hover:prose-a:text-teal-300">
            {articleContent}
        </article>
      </main>
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-teal-400">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <details key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700 group">
              <summary className="font-semibold text-lg cursor-pointer text-gray-100 group-hover:text-white flex justify-between items-center">
                {faq.question}
                <i className="fas fa-chevron-down transition-transform transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4 text-gray-400">{faq.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </div>
  </div>
);
// END MOCK

// --- ARTICLE DATA ---

const articleTitle = "Understanding the UV Index: What Do the Numbers Mean for Your Skin?";

const tableOfContentsHeadings = [
    "What is the UV Index, Anyway?",
    "How is the UV Index Calculated?",
    "Decoding the Scale: What Each UV Index Level Means for You",
    "Common Myths and Misconceptions about UV Exposure",
    "Making the UV Index a Part of Your Daily Routine"
];

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const TableOfContents: React.FC<{ headings: string[] }> = ({ headings }) => (
    <ul className="space-y-2">
        {headings.map(heading => (
            <li key={heading}>
                <a href={`#${slugify(heading)}`} className="text-gray-300 hover:text-teal-400 transition-colors block p-2 rounded-md hover:bg-gray-700/50">
                    {heading}
                </a>
            </li>
        ))}
    </ul>
);

const articleContent = (
    <>
        <section id={slugify(tableOfContentsHeadings[0])}>
            <h2>{tableOfContentsHeadings[0]}</h2>
            <p>You step outside on a bright summer day. It feels hot, so you know to be careful in the sun. But what about a cool, breezy day that's still surprisingly bright? Or a hazy, overcast afternoon? The temperature and the brightness of the sun can be misleading when it comes to the real danger: ultraviolet (UV) radiation.</p>
            <p>This is where the UV Index comes in. It's a standard international measurement created by the World Health Organization (WHO) and other agencies to indicate the strength of skin-damaging UV radiation from the sun on a given day. Think of it not as a measure of heat, but as a "sunburn forecast." Its purpose is simple but vital: to help you understand your risk of sun exposure and take the right precautions to protect your skin and eyes.</p>
        </section>

        <section id={slugify(tableOfContentsHeadings[1])}>
            <h2>{tableOfContentsHeadings[1]}</h2>
            <p>The UV Index isn't just a random number; it's a carefully calculated forecast that synthesizes several key factors to predict the intensity of UV radiation reaching the Earth's surface. The primary factors include:</p>
            <ul>
                <li><strong>Sun's Position:</strong> The higher the sun is in the sky, the more intense the UV radiation. This is why the index is highest during midday (typically 10 a.m. to 4 p.m.) and in the summer months.</li>
                <li><strong>Cloud Cover:</strong> While thick, heavy clouds can significantly block UV rays, thin or scattered clouds offer little protection. In fact, broken clouds can sometimes reflect and magnify UV radiation, increasing the index.</li>
                <li><strong>Ozone Layer Thickness:</strong> The ozone layer acts as Earth's natural sunshield, absorbing a significant amount of UV radiation. The thickness of this layer varies, affecting the UV levels on the ground.</li>
                <li><strong>Altitude:</strong> UV intensity increases with altitude because there is less atmosphere to absorb the rays. For every 1,000 meters in altitude, UV levels can increase by about 10%.</li>
                <li><strong>Ground Reflection:</strong> Different surfaces reflect UV radiation to varying degrees, increasing your total exposure. Snow is a powerful reflector, nearly doubling UV strength. Sand and water also significantly reflect UV rays, which is why you can burn so easily at the beach or while skiing.</li>
            </ul>
        </section>

        <section id={slugify(tableOfContentsHeadings[2])}>
            <h2>{tableOfContentsHeadings[2]}</h2>
            <p>The UV Index is reported on a scale from 0 to 11+, with each level corresponding to a specific set of precautions. Here's a breakdown of what the numbers mean for you.</p>

            <h3 id="uv-index-0-2">UV Index 0-2: Low (Green)</h3>
            <p>At this level, the risk of sun damage is minimal for the average person. However, protection is still wise. Wear sunglasses on bright days. If you have very fair skin that burns easily, or if you plan to be outside for an extended period, it's still a good idea to cover up and use a broad-spectrum sunscreen with an SPF of 30 or higher.</p>

            <h3 id="uv-index-3-5">UV Index 3-5: Moderate (Yellow)</h3>
            <p>There is a moderate risk of harm from unprotected sun exposure. Sunburns are possible. It's time to start taking active precautions. Seek shade during the peak sun hours of midday. Be sure to wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Apply a generous amount of broad-spectrum SPF 30+ sunscreen every two hours, and more often if you're swimming or sweating.</p>

            <h3 id="uv-index-6-7">UV Index 6-7: High (Orange)</h3>
            <p>The risk of sun damage is high. Unprotected skin can burn in as little as 15-25 minutes. Protection against skin and eye damage is essential. It's highly recommended to reduce your time in the sun between 10 a.m. and 4 p.m. When you are outside, seeking shade is crucial. All precautions from the moderate level—protective clothing, a hat, sunglasses, and regular sunscreen application—are non-negotiable.</p>

            <h3 id="uv-index-8-10">UV Index 8-10: Very High (Red)</h3>
            <p>With a very high risk of harm, take extra precautions. Unprotected skin and eyes can be damaged and burn very quickly, sometimes in 10 minutes or less. Minimize sun exposure as much as possible during peak hours. If you must be outdoors, make shade your top priority. Ensure you are fully covered with protective clothing, a hat, and sunglasses, and diligently reapply SPF 30+ sunscreen every two hours.</p>

            <h3 id="uv-index-11">UV Index 11+: Extreme (Violet)</h3>
            <p>This is the highest level of risk. Unprotected skin and eyes can burn in minutes. During these conditions, it's best to avoid sun exposure between 10 a.m. and 4 p.m. If you have to be outside, take every possible precaution: seek shade, cover up completely with sun-protective clothing, wear a wide-brimmed hat and UV-blocking sunglasses, and be extremely vigilant about applying and reapplying sunscreen.</p>
        </section>

        <section id={slugify(tableOfContentsHeadings[3])}>
            <h2>{tableOfContentsHeadings[3]}</h2>
            <p>Understanding the UV Index also means debunking common myths that can lead to unintentional sun damage.</p>
            <ul>
                <li><strong>Myth 1: "I can't get a sunburn on a cloudy day."</strong> False. Up to 80% of the sun's UV rays can pass through thin clouds. You can still get a significant sunburn on a cool, overcast day.</li>
                <li><strong>Myth 2: "A 'base tan' will protect me from the sun."</strong> False. Any tan is a sign of skin cells in trauma, responding to DNA damage from UV radiation. A tan provides minimal protection—equivalent to an SPF of about 3—which is not enough to prevent sunburn or long-term damage.</li>
                <li><strong>Myth 3: "People with dark skin don't need sunscreen."</strong> False. While darker skin tones have more melanin and thus more natural protection, they are still vulnerable to the harmful effects of UV radiation, including premature aging and skin cancer. Sun protection is for everyone.</li>
            </ul>
        </section>

        <section id={slugify(tableOfContentsHeadings[4])}>
            <h2>{tableOfContentsHeadings[4]}</h2>
            <p>Protecting your skin isn't a one-time decision; it's a daily habit. Checking the UV index should be as routine as checking the temperature or chance of rain. Most weather apps and websites include the UV Index in their daily forecasts.</p>
            <p>By taking a moment to understand the forecast, you can make informed decisions—whether that means scheduling your run for earlier in the morning, packing a hat for your lunch outdoors, or reapplying sunscreen before you leave the office. It's a simple, proactive step that empowers you to enjoy the outdoors safely and maintain the long-term health of your skin.</p>
        </section>
    </>
);

const faqData = [
  {
    question: "What is a 'good' or 'safe' UV index?",
    answer: <p>A UV Index of 0 to 2 is considered low risk. However, sun protection is still recommended for individuals with fair skin or for extended periods outdoors, especially near reflective surfaces like snow or water. There is no truly "safe" level of UV exposure without protection, as damage is cumulative over a lifetime.</p>,
  },
  {
    question: "Does sunscreen with a high SPF let me stay in the sun longer?",
    answer: <p>Not necessarily. A high SPF (Sun Protection Factor) offers more protection against UVB rays, but it's not a license to prolong sun exposure. All sunscreens should be reapplied at least every two hours, and more frequently after swimming or sweating, regardless of SPF. A high SPF can also create a false sense of security, so it's important to continue practicing all sun-safe behaviors.</p>,
  },
  {
    question: "Is the UV index the same as the heat index?",
    answer: <p>No, they measure completely different things. The UV Index measures the strength of the sun's ultraviolet radiation, which causes sunburn. The heat index measures how hot it feels when relative humidity is combined with the air temperature. A cool, cloudy day can still have a high UV index.</p>,
  },
  {
      question: "How can I check the UV index for my area?",
      answer: <p>Most weather websites, smartphone weather apps, and local news forecasts provide the daily UV index forecast. You can also find it on national weather service websites, such as the National Weather Service (NWS) in the United States, or through the EPA's UV Index search tool.</p>
  }
];

const UvIndexExplainedPage = () => {
    const jsonLdSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": articleTitle,
        "description": "A comprehensive guide to the UV Index scale. Learn what the numbers mean, how they affect your skin, and the essential steps to protect yourself at every level.",
        "image": "https://weather.doodax.com/images/blog/uv-index.png",
        "author": {
            "@type": "Organization",
            "name": "Doodax Weather",
            "url": "https://weather.doodax.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Doodax Weather",
            "logo": {
                "@type": "ImageObject",
                "url": "https://weather.doodax.com/images/logo.png"
            }
        },
        "url": "https://weather.doodax.com/blog/uv-index-explained",
        "datePublished": new Date().toISOString(),
        "dateModified": new Date().toISOString(),
        "mainEntityOfPage": {
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": typeof item.answer === 'string' ? item.answer : item.answer.props.children
                }
            }))
        }
    };
    
    return (
        <BlogPostTemplate
            title={articleTitle}
            tableOfContents={<TableOfContents headings={tableOfContentsHeadings} />}
            articleContent={articleContent}
            faqData={faqData}
            jsonLdSchema={jsonLdSchema}
        />
    );
};

export default UvIndexExplainedPage;
