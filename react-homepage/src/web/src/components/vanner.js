import { Card } from 'antd';
import call from '../Image/call.jpg'

function Vanner() {
  return (
    <Card size="small" title="전체보기" bodyStyle={{padding: 0 }}>
      <img src={call} alt="call" style={{ width:"100%"}}/>
    </Card>
  );
}

export default Vanner;