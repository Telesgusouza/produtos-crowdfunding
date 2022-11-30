import { useState } from "react";
import Button from "../Button";
import * as Styled from "./style";

import imgClose from "../../assets/images/icon-close-modal.svg";

export default function ProjectInformation() {
  const [viewCrowndfund, setViewCrowndfund] = useState(true);

  function handleViewCrowndfund() {
    setViewCrowndfund((p) => !p);
  }

  return (
    <Styled.Container className="center sections">
      <h3>Sobre este projeto</h3>
      <p>
        O Mastercraft Bamboo Monitor Riser é uma plataforma robusta e elegante
        que eleva sua tela para uma altura de visualização mais confortável.
        Colocar o monitor ao nível dos olhos tem o potencial de melhorar sua
        postura e deixá-lo mais confortável durante o trabalho, ajudando você a
        manter o foco na tarefa em questão.
      </p>
      <p>
        Com artesanato artesanal, a simplicidade do design cria espaço extra na
        mesa abaixo do computador para permitir que blocos de notas, canetas e
        pendrives sejam armazenados sob o suporte.
      </p>

      <Styled.OptionsCrowdfunding>
        <Styled.ContainerTitle>
          <h4>Suporte de bambo</h4>
          <span>Doar $ 25 ou mais</span>
        </Styled.ContainerTitle>

        <p>
          Você obtém um suporte ergonômico feito de bambu natural. você nos
          ajudou lançar nossa campanha promocional, e você será adicionado a um
          especial Lista de membros apoiadores. 101 restantes Selecione
          Recompensa
        </p>

        <Styled.ContainerButton>
          <div>
            <h5>101</h5>
            <p>restantes</p>
          </div>

          <Button onClick={handleViewCrowndfund}>selecionar recompensa</Button>
        </Styled.ContainerButton>
      </Styled.OptionsCrowdfunding>

      <Styled.OptionsCrowdfunding>
        <Styled.ContainerTitle>
          <h4>Edição suporte preto</h4>
          <span>Doar $ 75 ou mais</span>
        </Styled.ContainerTitle>

        <p>
          Você recebe um suporte de computador Black Special Edition e um
          agradecimento pessoal. Você será adicionado ao nosso Apoiador lista de
          membros. O envio está incluído.
        </p>

        <Styled.ContainerButton>
          <div>
            <h5>64</h5>
            <p>restantes</p>
          </div>

          <Button onClick={handleViewCrowndfund}>selecionar recompensa</Button>
        </Styled.ContainerButton>
      </Styled.OptionsCrowdfunding>

      <Styled.OptionsCrowdfunding nullOption>
        <Styled.ContainerTitle>
          <h4>mogno edição especial</h4>
          <span>Doar $ 200 ou mais</span>
        </Styled.ContainerTitle>

        <p>
          Você ganha dois estandes de mogno da edição especial, uma camiseta do
          Backer e um agradecimento pessoal. você será adicionado à nossa lista
          de membros do Backer. O envio está incluído.
        </p>

        <Styled.ContainerButton>
          <div>
            <h5>0</h5>
            <p>restantes</p>
          </div>

          <Button bg="#808080" bgHover="#808080">
            selecionar recompensa
          </Button>
        </Styled.ContainerButton>
      </Styled.OptionsCrowdfunding>

      {viewCrowndfund && (
        <Styled.ContainerViewCrowndfund>
          <Styled.ViewCrowndfund>
            <Styled.HeaderViewCrowndfund>
              <div>
                <h5>apoiar este projeto</h5>
                <p>
                  quer nos apoiar em trazer riser de monitor de bambu
                  mastercraft para o mundo?
                </p>
              </div>
              <div>
                <img src={imgClose} alt="Botão de fechar página" />
              </div>
            </Styled.HeaderViewCrowndfund>

            <Styled.ContainerOptionCrowndfund>
              <div>
                <input type="radio" name="radio" />
              </div>
              <Styled.ContentOptionCrowndfund>
                <Styled.OptionHeader>
                  <div>
                    <h6> suporte de bambu</h6>
                    <span>Doar $25 ou mais</span>
                  </div>

                  <div>
                    <h6>101</h6>
                    <p>restante</p>
                  </div>
                </Styled.OptionHeader>

                <p>
                  Você obtém um suporte ergonômico feito de bambu natural. Você
                  nos ajudou a lançar nossa campanha promocional e você será
                  adicionado a uma lista especial de membros do Backer.
                </p>
              </Styled.ContentOptionCrowndfund>
            </Styled.ContainerOptionCrowndfund>

            

          </Styled.ViewCrowndfund>
        </Styled.ContainerViewCrowndfund>
      )}
    </Styled.Container>
  );
}
