import React,{
    Fragment,
    useState,
} from "react";

import { ethers } from 'ethers';

import {
    Wrapper,
    BackgroundImage,
    ContentWrapper,
    ButtonWrapper,
    ConnectWalletButton,
} from './style';

const FrontPage = ({parentCallback}) => {

    const [connectionStatus, setConnectionStatus] = useState('Connect Wallet');
    const [accountAddr, setAccountAddr] = useState('');
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);


    const handleButtonClick = () => {
        if(window.ethereum && window.ethereum.isMetaMask){
            window.ethereum.request({method: 'eth_requestAccounts'})
                .then((res)=>{
                    accountChangeHandler(res[0]);
                    setConnectionStatus('Wallet Connected');
                })
        }
        else
            setConnectionStatus('Please Install MetaMask First');
    };

    const accountChangeHandler = (newAccount) => {
        setAccountAddr(newAccount);
        updateEthers(newAccount);
    }

    const updateEthers = (addr) => {
        let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(tempProvider);
        let tempSigner = tempProvider.getSigner();
        setSigner(tempSigner);
        parentCallback(addr, tempSigner);
    }

    return (
        <Fragment>
            <Wrapper>
                <BackgroundImage />
                <ButtonWrapper>
                    <ConnectWalletButton
                        onClick={handleButtonClick}
                    ><p>{connectionStatus}</p>
                    </ConnectWalletButton>
                </ButtonWrapper>
            </Wrapper>
        </Fragment>
    );
}

export default FrontPage;

/* 
 * <ContentWrapper>
                    <p className="Time">2022 Summer</p>
                    <p className="Name">NTU CAE DigiCert Service</p>
                    <ButtonWrapper>
                        <ConnectWalletButton onClick={handleButtonClick}><p>Connect Wallet</p></ConnectWalletButton>
                    </ButtonWrapper>
                    <p className="Status">{connectionStatus}</p>
                </ContentWrapper>
 * 
 * 
 * 
 * 
 */