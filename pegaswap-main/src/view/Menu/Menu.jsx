import React from 'react'
// import { Route, Switch, useRouteMatch } from 'react-router-dom'
// import { useWallet } from 'use-wallet'

// import chef from '../../assets/img/chef.png'

// import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
// import WalletProviderModal from '../../components/WalletProviderModal'

// import useModal from '../../hooks/useModal'

// import Farm from '../Farm'

import FarmCard from './components/FarmCard'

const Menu = () => {
  // const { path } = useRouteMatch()
  // const { account } = useWallet()
  // const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  return (
    // <Switch>
      <Page>
        {/* {!!account ? (
          <>
            <Route exact path={path}>
              <PageHeader
                icon={<img src={chef} height="120" />}
                subtitle="Earn SUSHI tokens by staking SushiSwap V2 SLP Tokens."
                title="Select Your Favorite Dishes"
              />
              <div
                style={{
                  alignItems: 'center',
                  marginBottom: '2%'
                }}
              >
                Note: Current APY includes 2/3rd SUSHI emission that is locked for 6 months.
              </div>
              <FarmCards />
            </Route>
            <Route path={`${path}/:farmId`}>
              <Farm />
            </Route>
          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text="🔓 Unlock Wallet"
            />
          </div>
        )} */}
        {/* <Route exact path={path}> */}
          <PageHeader
            icon={<img src={'images/chef.png'} height="120" />}
            subtitle="Earn SUSHI tokens by staking SushiSwap V2 SLP Tokens."
            title="Select Your Favorite Dishes"
          />
          <div
            style={{
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: '2%',
              
            }}
          >
            Note: Current APY includes 2/3rd SUSHI emission that is locked for 6 months.
              </div>
          <FarmCard />
         
        {/* </Route> */}
        {/* <Route path={`${path}/:farmId`}>
          <Farm />
        </Route> */}
      </Page>
    // </Switch>
  )
}

export default Menu
