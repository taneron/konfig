import { useGraphicStyles } from "@/utils/use-graphic-styles";
import { UnstyledButton, clsx } from "@mantine/core";
import {
  IconBook2,
  IconChevronRight,
  IconCode,
  IconTerminal2,
  TablerIconsProps,
} from "@tabler/icons-react";

export function OurProducts() {
  return (
    <div className="flex flex-col items-center px-4 pt-36 pb-32 md:pb-64 bg-white">
      <h2 className="mb-8 md:mb-24 text-4xl text-gray-600">Our Products</h2>
      <div className="flex flex-col xl:flex-row gap-12">
        <Product
          product="SDKs"
          description="Publish SDKs in the most popular languages"
          className="bg-gradient-to-br hover:bg-gradient-to-bl"
          graphicClassName="-top-10 -right-5 xl:-left-5 [clip-path:polygon(0%_0%,_100%_0%,_0%_100%)]"
          Icon={IconCode}
          scrollTo="sdks"
        />
        <Product
          product="Docs"
          description="Generate beautiful documentation for your API"
          className="bg-gradient-to-b hover:bg-gradient-to-br"
          graphicClassName="xl:-top-10 xl:right-1/2 xl:left-auto xl:translate-x-1/2  -bottom-5 -left-5"
          Icon={IconBook2}
          scrollTo="docs"
        />
        <Product
          product="Demos & Tutorials"
          description="Build engaging demos and tutorials for your API"
          className="bg-gradient-to-bl hover:bg-gradient-to-br"
          graphicClassName="-bottom-5 -right-5 xl:-top-10 rounded-full"
          Icon={IconTerminal2}
          scrollTo="demos"
        />
      </div>
    </div>
  );
}

function Product({
  product,
  description,
  className,
  scrollTo,
  Icon,
  graphicClassName,
}: {
  product: string;
  description: string;
  className: string;
  graphicClassName: string;
  scrollTo: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
}) {
  const {
    classes: { texture },
  } = useGraphicStyles({})();
  return (
    <div className="relative">
      <UnstyledButton
        onClick={() => scrollIntoView(scrollTo)}
        className={clsx(
          className,
          "shadow-lg hover:shadow-xl",
          "z-10 relative from-white to-gray-50 hover:to-gray-100 p-8 w-full xl:w-80 group rounded-xl border-solid border-gray-100 transition-all hover:scale-[1.01] bg-white"
        )}
      >
        <Icon className="text-gray-300 mb-2" />
        <div className="flex transition-all flex-row gap-2 items-center group-hover:gap-4">
          <div className="font-semibold text-2xl">{product}</div>
          <IconChevronRight className="text-gray-300 " />
        </div>
        <div className="text-gray-600 mt-4">{description}</div>
      </UnstyledButton>
      <div
        className={clsx(
          texture,
          graphicClassName,
          "w-[100px] h-[100px] absolute z-0"
        )}
      />
    </div>
  );
}

/**
 * Finds the element with the given id and scrolls it into view.
 * @param id
 */
function scrollIntoView(id: string) {
  const element = document.getElementById(id);

  if (element) {
    // set URL to include hash
    window.history.pushState({}, "", `#${id}`);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
