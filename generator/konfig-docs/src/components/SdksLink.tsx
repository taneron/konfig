import { IconChevronRight } from "@tabler/icons-react";

export function SdksLink() {
  return (
    <a className="hover:no-underline" href="/sdk/category/all">
      <button
        type="submit"
        className="font-medium group flex gap-3 hover:gap-2 items-center transition-all bg-gradient-to-br text-white w-fit text-center px-3 py-2 from-slate-600 to-slate-800 rounded-md"
      >
        <>
          <div>Checkout our SDKs</div>
          <IconChevronRight
            size="1rem"
            className="transition-all group-hover:text-slate-50 text-slate-300"
          />
        </>
      </button>
    </a>
  );
}
