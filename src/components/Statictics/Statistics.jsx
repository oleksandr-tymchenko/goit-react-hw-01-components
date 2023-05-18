import StatisticList from './StatisticsList'
import StatisticTitle from './StatisticsTitle'
// import data from './data.json'

import { Card } from 'components/GeneralStyles/GeneralStyled'

export default function Statistics() {
    return (
    <Card>
        <StatisticTitle title="Upload stats" />
        <StatisticList/>
        
 
    </Card> 
    )
     
}