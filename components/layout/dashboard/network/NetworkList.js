import NetworkItem from "./NetworkItem";
import NetworkListHeading from "./NetworkListHeading";

import config from "@/lib/config";

const NetworkList = () => {
  return (
    <div className="flex flex-1 flex-grow flex-col items-center gap-6 overflow-hidden rounded-t-xl border border-border-light bg-gradient-light-linear/85 p-10 shadow">
      <NetworkListHeading />

      <div className="relative flex w-full flex-grow overflow-hidden">
        <ul className="absolute h-full w-full flex-grow overflow-y-scroll rounded-xl border border-border-light bg-white">
          {config.map((chain) => (
            <NetworkItem key={chain.chainId} chain={chain} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NetworkList;
