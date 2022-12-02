import * as Styled from "./style";
import imgClose from "../../assets/images/icon-close-modal.svg";
import { useState } from "react";

export default function ViewOption({ info }) {
  //   console.log(info);

  const [view, setView] = useState(false);

  function handleView(e) {
    console.log(e);
    setView(p=>!p);
    console.log(view)
  }

  return (
    <>
      
    </>
  );
}
