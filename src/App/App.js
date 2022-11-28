import * as Styled from './style';

import Header from '../components/Header';
import Main from '../components/Main';
import InfoCrowdfund from '../components/InfoCrowdfund';
import ProjectInformation from '../components/ProjectInformation';

function App() {
  
  return (
    <Styled.Container>
      <Header />
      <Main />
      <InfoCrowdfund />
      <ProjectInformation />
    </Styled.Container>
  )
}


export default App;
