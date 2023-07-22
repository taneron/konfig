import { ExportedImageProps } from "next-image-export-optimizer";
import NextImage from "next-image-export-optimizer";

export default function Image(
  props: ExportedImageProps & React.RefAttributes<HTMLImageElement | null>
) {
  return <NextImage {...props} placeholder="empty" />;
}
