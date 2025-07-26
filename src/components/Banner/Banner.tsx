import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/banner.jpg',
    title: 'শ্রাবণ অফার',
    subtitle: 'সিলেক্টেড পণ্যে দারুন মূলছাড়',
    button: 'Buy Now',
  },
  {
    image: '/banner.jpg',
    title: '0% EMI Offer',
    subtitle: 'সকল পণ্যে EMI সুবিধা',
    button: 'Shop EMI',
  },
  {
    image: '/banner.jpg',
    title: 'Starlink Internet',
    subtitle: 'Satellite Package শুরু মাত্র 49,500৳',
    button: 'Order Now',
  },
];

export default function HomeBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative pt-10 w-full h-[400px] overflow-hidden rounded-md shadow">
     <div className="w-full px-4 py-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px]">
    {/* বড় ব্যানার - বাম পাশে */}
    <div className="md:col-span-2">
      <img
        src="/banner.jpg"
        alt="Main Banner"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>

    {/* ডান পাশে দুইটি ছোট ব্যানার */}
    <div className="flex flex-col gap-4">
      <img
        src="/banner.jpg"
        alt="Top Right Banner"
        className="w-full h-1/2 object-cover rounded-2xl"
      />
      <img
        src="/banner.jpg"
        alt="Bottom Right Banner"
        className="w-full h-1/2 object-cover rounded-2xl"
      />
    </div>
  </div>
</div>

    </div>
  );
}
