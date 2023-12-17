import { memo, useEffect, useMemo, useState } from "react";

function Infor({ user }) {
  const userMemo = useMemo(() => {
    return JSON.stringify(user);
  }, [user]);

  useEffect(() => {
    console.log("userMemo", userMemo);
  }, [userMemo]);

  console.log(userMemo);
  return (
    <>
      <div>{JSON.parse(userMemo)[0]}</div>
      <div>{JSON.parse(userMemo)[1]}</div>
    </>
  );
}

export default Infor;
