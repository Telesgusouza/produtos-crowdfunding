import * as Styled from './style';
import logo from '../../assets/images/logo-mastercraft.svg';
import Button from '../Button';

import bookmark from '../../assets/images/icon-bookmark.svg';

export default function Main() {
    
    return (
        <Styled.Container className='center' >
            <img src={logo} alt='logo' />

            <h1>Artesanato Riser de monitor de bambu</h1>
            <p>um suporte de monitor bonito e feito à mão para reduzir a tensão do pescoço e dos olhos.</p>

            <Styled.ContainerButton>
                <Button >Apoie este projeto</Button>

                <Styled.bookmark>
                    <img src={bookmark} alt='logo para dizer que está marcado' />
                    <p>Marca páginas</p>
                </Styled.bookmark>
            </Styled.ContainerButton>
        </Styled.Container>
    )
}
