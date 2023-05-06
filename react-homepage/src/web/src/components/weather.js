import { Card } from 'antd';

function Weather() {
  return (
    <Card>
      <Card.Grid hoverable={false} style={{ textAlign:'center', width: '50%' }}>
        오늘의날씨<br/>
        날씨 사진
      </Card.Grid>
      <Card.Grid hoverable={false} style={{ textAlign:'center', width: '50%' }}>
        내일의날씨<br/>
        날씨 사진
      </Card.Grid>
    </Card>
  );
}

export default Weather;