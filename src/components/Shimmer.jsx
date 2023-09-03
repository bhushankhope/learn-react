import React from "react";
import { Image, Shimmer } from "react-shimmer";
const ShimmerUI = () => {
  return (
    <div>
      <Image
        src="https://csshint.com/wp-content/uploads/2022/01/Css-Skeleton-Loader-Animation.jpg"
        fallback={<Shimmer width={1500} height={600} />}
      />
    </div>
  );
};

export default ShimmerUI;
