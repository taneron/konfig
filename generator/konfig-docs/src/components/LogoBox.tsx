import React, { useEffect, useState } from "react";

export function LogoBox({
  logo,
  company,
  onLoad,
}: {
  logo: string;
  company: string;
  onLoad?: () => void;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      if (onLoad) {
        onLoad();
      }
    };
    img.src = logo;
  }, [logo, onLoad]);

  return (
    <div className="my-5 p-4 shadow-xl bg-white rounded-md w-fit ">
      <img
        className="max-h-[100px] sm:h-16 sm:max-h-none "
        src={logo}
        alt={`${company} logo`}
      />
    </div>
  );
}
