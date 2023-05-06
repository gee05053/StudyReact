import { Card, Row, Col, Button, Badge } from 'antd';

function WorksMenu() {
  return (
    <Card bordered={false} bodyStyle={{ padding: "0", width: "96%" }}>
      <Row>
        <Col span={5}>
          <Card type="inner" title="주요업무">
            <Button type="link">
              <Badge status="default" text="육군 군사보안센터"/>
            </Button>
            <Button type="link">
              <Badge status="default" text="장비정비정보체계"/>
            </Button>
            <Button type="link">
              <Badge status="default" text="국방군수통합정보체계"/>
            </Button>
            <Button type="link">
              <Badge status="default" text="국방수송정보체계"/>
            </Button>
            <Button type="link">
              <Badge status="default" text="국방탄약관리체계"/>
            </Button>
            <Button type="link">
              <Badge status="default" text="국방인사정보체계"/>
            </Button>
            <Button type="link">
              <Badge status="default" text="자료교환체계"/>
            </Button>
          </Card>
        </Col>
        <Col span={5}>
          <Card type="inner" title="업무참고">
            test2
          </Card>
        </Col>
        <Col span={5}>
          <Card type="inner" title="정보마당">
            test3
          </Card>
        </Col>
        <Col span={5}>
          <Card type="inner" title="신고/상담">
            test4
          </Card>
        </Col>
        <Col span={4}>
          <Card type="inner" title="부대활동">
            test
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default WorksMenu;