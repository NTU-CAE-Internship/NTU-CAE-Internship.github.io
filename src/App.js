import React, { 
  Fragment,
  useState,
  useCallback,
} from "react";
import NavBar from "./navbar";
import FrontPage from "./frontpage";
import BulletionBoard from "./bulletinboard";
import VerifyPage from "./verifypage";
import ProbSol from "./probsol";
import MintPage from "./mintpage";
import AboutPage from "./aboutpage";

function App() {
  const [accountAddr, setAccountAddr] = useState('');

  const [signer, setSigner] = useState(null);

  const addrCallback = useCallback((addr, tempSigner)=>{
    setAccountAddr(addr);
    setSigner(tempSigner);
  }, []);

  return (
    <Fragment>
      <NavBar />
      <FrontPage 
        parentCallback={addrCallback}/>
      <BulletionBoard />
      <MintPage 
        accountAddr={accountAddr}
        tempSigner={signer}  
      />
      <VerifyPage />
      <ProbSol />
      <AboutPage />
    </Fragment>
  );
}

export default App;
