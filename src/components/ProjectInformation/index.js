import { useEffect, useState } from "react";
import Button from "../Button";
import * as Styled from "./style";

import imgClose from "../../assets/images/icon-close-modal.svg";
// import imgSearch from '../../assets/images/search.svg';

export default function ProjectInformation() {
  const [viewCrowndfund, setViewCrowndfund] = useState(true);

  const [optionCrowndfund, setOptionCrowndfund] = useState("");
  const [search, setSearch] = useState("");

  function handleViewCrowndfund() {
    setViewCrowndfund((p) => !p);
  }

  function option(value) {
    setOptionCrowndfund(value);

    if(value != optionCrowndfund) {
      setSearch("");
    };
  }

  function handleSearch(value) {
    const regOp = /[.,/?°\|!@#$%&*()_+{}"¨'<>ç]/;
    const regText = /[a-zA-Z]/;


    if ( !regOp.test(value) && !regText.test(value) && search < 999) {
      setSearch(value);
    }
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

      <Styled.ContainerViewCrowndfund>
        <Styled.ViewCrowndfund>
          <Styled.HeaderViewCrowndfund>
            <div>
              <h5>Sobre este projeto</h5>
              <p>
                quer nos apoiar em trazer riser de monitor de bambu mastercraft
                para o mundo?
              </p>
            </div>
            <div>
              <img src={imgClose} alt="Botão de fechar página" />
            </div>
          </Styled.HeaderViewCrowndfund>

          {/*  */}

          <Styled.ContainerOptionCrowndfund>
            <Styled.ContainerContent>
              <input
                type="radio"
                name="radio"
                onClick={() => {
                  option("promessasemrecompensa");
                }}
              />
              <Styled.ContentOptionCrowndfund>
                <Styled.OptionHeader>
                  <div>
                    <h6>Promessa sem recompensa</h6>
                  </div>
                </Styled.OptionHeader>

                <p>
                  Escolha nos apoiar sem recompensa se você simplesmente
                  acreditar em nosso projeto. Como apoiador, você se inscreverá
                  para receber atualizações de produtos por e-mail.
                </p>
              </Styled.ContentOptionCrowndfund>
            </Styled.ContainerContent>

            {optionCrowndfund === "promessasemrecompensa" && (
              <Styled.ContainerPledge>
                <p>ensira sua doação</p>
                <div>
                  <Styled.InputValue>
                    <p>$</p>
                    <input
                      type="text"
                      placeholder="0"
                      value={search}
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </Styled.InputValue>
                  <Button>Continue</Button>
                </div>
              </Styled.ContainerPledge>
            )}
          </Styled.ContainerOptionCrowndfund>

          <Styled.ContainerOptionCrowndfund>
            <Styled.ContainerContent>
              <input
                type="radio"
                name="radio"
                onClick={() => {
                  option("suportedebambu");
                }}
              />

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
            </Styled.ContainerContent>

            {optionCrowndfund === "suportedebambu" && (
              <Styled.ContainerPledge>
                <p>ensira sua doação</p>
                <div>
                  <Styled.InputValue>
                    <p>$</p>
                    <input
                      type="text"
                      placeholder="0"
                      value={search}
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </Styled.InputValue>
                  <Button>Continue</Button>
                </div>
              </Styled.ContainerPledge>
            )}
          </Styled.ContainerOptionCrowndfund>

          <Styled.ContainerOptionCrowndfund>
            <Styled.ContainerContent>
              <input
                type="radio"
                name="radio"
                onClick={() => {
                  option("suporteediçãopreta");
                }}
              />

              <Styled.ContentOptionCrowndfund>
                <Styled.OptionHeader>
                  <div>
                    <h6>Suporte edição preta</h6>
                    <span>Doar $75 ou mais</span>
                  </div>

                  <div>
                    <h6>64</h6>
                    <p>restante</p>
                  </div>
                </Styled.OptionHeader>

                <p>
                  Você recebe um suporte de computador Black Special Edition e
                  um agradecimento pessoal. Você será adicionado ao nosso
                  Apoiador lista de membros. O envio está incluído.
                </p>
              </Styled.ContentOptionCrowndfund>
            </Styled.ContainerContent>
            {optionCrowndfund === "suporteediçãopreta" && (
              <Styled.ContainerPledge>
                <p>ensira sua doação</p>
                <div>
                  <Styled.InputValue>
                    <p>$</p>
                    <input
                      type="text"
                      placeholder="0"
                      value={search}
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </Styled.InputValue>
                  <Button>Continue</Button>
                </div>
              </Styled.ContainerPledge>
            )}
          </Styled.ContainerOptionCrowndfund>

          <Styled.ContainerOptionCrowndfund>
            <Styled.ContainerContent>
              <input type="radio" name="radio" />

              <Styled.ContentOptionCrowndfund>
                <Styled.OptionHeader>
                  <div>
                    <h6>Mogno edição especial</h6>
                    <span>Doar $200 ou mais</span>
                  </div>

                  <div>
                    <h6>0</h6>
                    <p>restante</p>
                  </div>
                </Styled.OptionHeader>

                <p>
                  Você ganha dois estandes de mogno da edição especial, uma
                  camiseta do Backer e um agradecimento pessoal. você será
                  adicionado à nossa lista de membros do Backer. O envio está
                  incluído.
                </p>
              </Styled.ContentOptionCrowndfund>
            </Styled.ContainerContent>
          </Styled.ContainerOptionCrowndfund>

          {/*  */}
        </Styled.ViewCrowndfund>
      </Styled.ContainerViewCrowndfund>
    </Styled.Container>
  );
}
