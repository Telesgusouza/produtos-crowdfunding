import * as Styled from './style';

export default function Button({children, border = 50}) {
    
    return (
        <Styled.Container
        border={border}
        >
            {children}
        </Styled.Container>
    )
}
