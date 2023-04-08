import { Row, Col, Button } from 'antd';
import homeMark from '../Image/homeMark.png';
import chant from '../Image/chant.png';

const date= new Date();
const year = date.getFullYear().toString();
let month = date.getMonth();
let day = date.getDate();
const weekList = ["일", "월", "화", "수", "목", "금", "토"];
let week = weekList[date.getDay()];

const changeMonth = (stringMonth) => {
  month = "0" + stringMonth;
}
const changeDay = (stringDay) => {
  day = "0" + stringDay;
}
if (month < 10) {
  month = month + 1;
  changeMonth(month.toString());
}
if (day < 10) {
  changeDay(day.toString());
}
const stringDate = year + "-" + month + "-" + day +'(' + week + ')';
function Header() {
  return (
    <Row align="top">
      <Col span={2}/>
      <Col span={8}>
        <img src={chant} alt="chant" style={{width:250}}/>
      </Col>
      <Col span={8}>
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        <img src={homeMark} alt="logo" style={{width:250}}/>
      </Col>
      <Col span={6}>
        <Button type="text">
          홈으로
        </Button>
        |
        <Button type="text">
          사이트맵
        </Button>
        |
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {stringDate}
      </Col>
    </Row>
  );
}

export default Header;