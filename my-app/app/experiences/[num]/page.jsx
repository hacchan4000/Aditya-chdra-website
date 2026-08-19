import React, { use } from 'react';
import Image from 'next/image';
import { assets, exp } from '@/public/Assets/assets';

// ini buat service yang aku tawarin
// tambahin payment gateway

const Page = ({ params }) => {
  const { num } = use(params); // because your folder is [num]

  // ✅ convert to number for comparison and emoji logic
  const numInt = parseInt(num);

  const emoji = (e) => {
    switch (e) {
      case 1: return "🎮";
      case 2: return "🌐";
      case 3: return "📊";
      case 4: return "🎨";
      case 5: return "🎬";
      default: return "❓";
    }
  };

  // ✅ find the right data using for loop (your request!)
  let data = null;
  for (let i = 0; i < exp.length; i++) {
    if (exp[i].id === numInt) {
      data = exp[i];
      break;
    }
  }

  if (!data) {
    return (
      <div className="p-10 text-red-500">
        Experience not found 😢
      </div>
    );
  }

  return (
    <div>
      <div className="w-full h-60 bg-white overflow-hidden">
        <Image
          src={data.img || assets.banner1}
          alt={data.judul}
          width={800}
          height={240}
          className="object-cover w-full h-60"
        />
      </div>

      <h1 className="absolute text-[60px] m-10 top-40">{emoji(numInt)}</h1>
      <h1 className="text-[60px] m-10 top-40">{data.judul}</h1>

      <div className="relative m-10 max-w-2xl">
        <p className="text-justify">{data.deskripsi}</p>

        <p className="text-justify mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ullam maiores molestiae
          officiis blanditiis esse voluptatum repellendus non numquam vitae quas dicta error sapiente
          rem suscipit ut exercitationem soluta dolore, facilis adipisci?
        </p>
      </div>
    </div>
  );
};

export default Page;
