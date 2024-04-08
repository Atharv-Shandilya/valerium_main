"use client";
import { ChevronRight } from "lucide-react";

import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import CopyButton from "../ui/buttons/CopyButton";

import { compressEthAddress } from "@/utils/pubKey";

const ChainSwitcher = () => {
  const [address, setAddress] = useState(
    "0x0000000000000000000000000000000000000000"
  );
  const currentChain = useSelector((state) => state.chain.currentChain);
  const walletAddresses = useSelector((state) => state.user.walletAddresses);

  useEffect(() => {
    if (currentChain && walletAddresses) {
      const walletAddress = walletAddresses.find(
        (address) => address.chainId === currentChain.chainId
      );

      if (walletAddress) {
        setAddress(walletAddress.address);
      }
    }
  }, [currentChain, walletAddresses]);

  return (
    <section
      className="flex items-center px-2 py-2.5 rounded-lg cursor-pointer gap-8 border border-border-light shadow-sm"
      style={{
        color: currentChain.style.baseTextColor,
        background: currentChain.style.gradientColorLight,
      }}
    >
      <div className="flex">
        <div className="mr-2 rounded-full border border-black">
          <Image
            src={`/tokens/${currentChain.style.logo}`}
            width={36}
            height={36}
            alt={
              currentChain.chainName
                ? currentChain.chainName + " Logo"
                : "Chain Logo"
            }
          />
        </div>

        <div>
          <div className="flex text-xs items-center gap-1">
            <p>{compressEthAddress(address, 8, 4)}</p>

            <CopyButton text={address} />
          </div>

          <p className="text-sm font-bold">{currentChain.chainName}</p>
        </div>
      </div>

      <ChevronRight size={20} />
    </section>
  );
};

export default ChainSwitcher;
