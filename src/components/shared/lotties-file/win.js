import Lottie from "react-lottie";

import woooo from "./woooo.json";
import waffer from "./waffer.json";
import ballon from "./ballon.json";
import { useAuthState } from "../../../context/auth-context";
import { useState, useEffect } from "react";
import auth from "../../../utils/auth";
import { io } from "socket.io-client";

const Win = () => {
  const { user, logout } = useAuthState();
  const [IsWinner, setIsWinner] = useState(null);

  useEffect(() => {
    auth.getToken().then((accessToken) => {
      const headers = {
        Authorization: accessToken ? "Bearer " + accessToken : undefined,
      };
      const URL = process.env.REACT_APP_DEV_WEB_SOCKET_URL;
      const newSocket = io(URL, {
        extraHeaders: Object.entries(headers).reduce(
          (acc, [key, value]) =>
            value !== undefined ? { ...acc, [key]: value } : acc,
          {}
        ),
        path: "/socket.io",
      });
      newSocket?.on("auction:winner", (data) => {
        setIsWinner(data);
        console.log("====================================");
        console.log(data);
        console.log("====================================");
      });

      return () => {
        newSocket.close();
        logout();
      };
    });
  }, [IsWinner, logout]);

  const wooooOptions = {
    loop: true,
    autoplay: true,
    animationData: woooo,
  };

  return IsWinner ? (
    <div className="fixed top-0 w-full h-full z-[500]">
      <Lottie options={wooooOptions} />
    </div>
  ) : null;
};

export default Win;
