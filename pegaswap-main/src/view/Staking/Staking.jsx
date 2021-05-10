import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
// import {useWallet} from 'use-wallet'

// import chef from '../../assets/img/chef.png'

// import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
// import WalletProviderModal from '../../components/WalletProviderModal'

// import useModal from '../../hooks/useModal'
import StakeXSushi from "../StakeXSushi";

const Staking = () => {
  const {path} = useRouteMatch()
  // const {account} = useWallet()
  // const [onPresentWalletProviderModal] = useModal(<WalletProviderModal/>)
  return (
    <Switch>
      <Page>
        
          <>
            <Route exact path={path}>
              <PageHeader
                icon={<img src={'images/chef.png'} height="120"/>}
                subtitle="Welcome to the Sushi Bar, stake Sushi to earn Sushi."
                title="Irasshaimase!"
              />
            </Route>
            <StakeXSushi/>
          </>
       
      </Page>
    </Switch>
  )
}

export default Staking
