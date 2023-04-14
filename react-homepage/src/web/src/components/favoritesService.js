import { Badge, Button, Card, Row, Col } from 'antd';

function FavoritesService () {
  return (
    <Card size="small" title="자주찾는서비스" extra={<a href="#test">+더보기</a>}>
      <Row>
        <Col span={12}>
          <Button type="link">
            <Badge status="default" text="지휘통제"/>
          </Button>
        </Col>
        <Col span={12}>
          <Button type="link">
            <Badge status="default" text="부대발전제언"/>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Button type="link">
            <Badge status="default" text="일정관리"/>
          </Button>
        </Col>
        <Col span={12}>
          <Button type="link">
            <Badge status="default" text="일일상황평가회의"/>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Button type="link">
            <Badge status="default" text="전투일일결산"/>
          </Button>
        </Col>
        <Col span={12}>
          <Button type="link">
            <Badge status="default" text="초과근무관리"/>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Button type="link">
            <Badge status="default" text="부대행정업무"/>
          </Button>
        </Col>
        <Col span={12}>
          <Button type="link">
            <Badge status="default" text="위병소출입관리"/>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Button type="link">
            <Badge status="default" text="보안일일결산"/>
          </Button>
        </Col>
        <Col span={12}>
          <Button type="link">
            <Badge status="default" text="배차일지"/>
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default FavoritesService;