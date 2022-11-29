import * as Styled from './style';

export default function Button({children, border = 50, bg, bgHover, onClick}) {
    
    return (
        <Styled.Container
        border={border}
        bg={!!bg?bg:'hsl(176, 50%, 47%)'}
        bgHover={!!bgHover? bgHover : 'hsl(176, 72%, 28%)' }
        onClick={onClick}
        >
            {children}
        </Styled.Container>
    )
}
