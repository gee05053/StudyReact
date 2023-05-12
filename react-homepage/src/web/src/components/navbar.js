import { Row, Col } from 'antd';

function Navbar() {
  const menuList = ["부대소개", "온나라", "웹메일", "참모부", "예하부대", "생활정보", "사이버 역사관"];
  return(
    <div>
      <Row align="bottom">
        <Col span={3}/>
        <Col span={18} >
          <Row>
            {menuList.map((menuName, index) => {
              return(
                <Col span={3} key={index}>
                  <div style={{fontSize:"22px"}}>
                    {menuName}
                  </div>
                </Col>
              )
            })}
          </Row>
        </Col>
        <Col span={3}/>
      </Row>
      <div style={{backgroundColor: "blue", height:"25px"}}>
        {"\u00A0"}
      </div>
    </div>
  )
}

export default Navbar;