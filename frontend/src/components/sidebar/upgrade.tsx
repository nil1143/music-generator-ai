"use client";

import { authClient } from "~/lib/auth.client";
import { Button } from "../ui/button";

export default function Upgrade() {
  const upgrade = async () => {
    await authClient.checkout({
      products: [
        "56866f71-aafc-4217-bafd-c52326276291",
        "96a14134-1841-4dd1-a8e8-15ecf0a763d8",
        "3212d404-b6f8-44b3-a891-0fa5b87e5768",
      ],
    });
  };
  return (
    <Button
      variant="outline"
      size="sm"
      className="ml-2 cursor-pointer text-orange-400"
      onClick={upgrade}
    >
      Upgrade
    </Button>
  );
}
