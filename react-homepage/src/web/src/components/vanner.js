import { Card } from 'antd';
import call from '../Image/call.jpg'

function Vanner() {
  return (
    <Card size="small" title="전체보기" cover={<img src={call} alt="call"/>} bodyStyle={{padding: 0}}/>
  );
}

export default Vanner;