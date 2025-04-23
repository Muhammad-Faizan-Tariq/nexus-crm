import React from "react";

import { UnifiedTo } from "@unified-api/typescript-sdk";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODA4MzViNDhiZDZjNGNmM2M2MWEzODIiLCJ3b3Jrc3BhY2VfaWQiOiI2ODA4MzViNDhiZDZjNGNmM2M2MWEzODUiLCJpYXQiOjE3NDUzNjg1MDB9.WoDcX0pmufeJICQBc8cTUfXeG8fegJX0CudeIqmswdo",
    },
  });

  const res = await sdk.accounting.listAccountingAccounts({
    connectionId: "680837b28bd6c4cf3c61a44d",
  });

  console.log("res >>>>>>>>>> ", res)
}

run();

const index = () => {
  console.log("UNIFIED_QUICKBOOK_CONNECTION_ID >>>>>>>>>")
  return <div className="text-blue-400 underline">Nexus CRM</div>;
};

export default index;
