import * as Styled from "./style";
import logo from "../../assets/images/logo-mastercraft.svg";
import Button from "../Button";

import logoBookmark from "../../assets/images/icon-bookmark.svg";
import logoBookmarked from "../../assets/images/icon-bookmarked.svg";
import { useState } from "react";

export default function Main() {
  const [bookmark, setBookmark] = useState(false);

  function handleBookmark() {
    setBookmark((p) => !p);
  }

  return (
    <Styled.Container className="center">
      <img src={logo} alt="logo" />

      <h1>Artesanato Riser de monitor de bambu</h1>
      <p>
        um suporte de monitor bonito e feito à mão para reduzir a tensão do
        pescoço e dos olhos.
      </p>

      <Styled.ContainerButton>
        <Button>Apoie este projeto</Button>

        <Styled.bookmark
          bookmark={bookmark ? "hsl(176, 72%, 28%)" : "#606060"}
          onClick={handleBookmark}
        >
          <img
            src={bookmark ? logoBookmarked : logoBookmark}
            alt="logo para dizer que está marcado"
          />
          <p>Marca páginas</p>
        </Styled.bookmark>
      </Styled.ContainerButton>
    </Styled.Container>
  );
}
