// utils/cloudinary.ts

export const getCloudinaryImage = (
  id: string,
  options: {
    width?: number;
    height?: number;
    crop?: "fill" | "fit" | "thumb";
    format?: "jpg" | "webp" | "auto";
  } = {}
) => {
  const cloudName = "your-cloud-name"; // replace with your real cloud name
  const { width = 600, height, crop = "fill", format = "auto" } = options;

  const transformations = [
    `w_${width}`,
    height ? `h_${height}` : null,
    `c_${crop}`,
    "q_auto",
    `f_${format}`,
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${id}`;
};
