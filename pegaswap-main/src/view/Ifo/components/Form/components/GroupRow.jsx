import React from 'react'
import styled from 'styled-components'
import Row from './Row'
import StyleA from '../../../components/StyleA'
import {supportedIfo} from './constants'

const GroupRow = () => {
    // let A = <StyleA title="3PM SGT"/>;
    return (
      <StyledEx>
        <React.Fragment>
          {supportedIfo.map((item, i) => {
            return <Row key={`card_${i}`} name={item.name} value={item.value} add={item.add} />;
          })}
        </React.Fragment>
    
    </StyledEx>
    );
}
const StyledEx = styled.div`    margin-bottom: 24px;`

export default GroupRow
