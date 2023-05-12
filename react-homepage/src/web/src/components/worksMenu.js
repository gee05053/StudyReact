import { Card, Row, Col, Button, Badge } from 'antd';

function WorksMenu() {
  return (
    <Card bordered={false} bodyStyle={{ padding: '0' }}>
      <Row>
        <Col span={4}>
          <Card type="inner" title="주요업무">
            <div>
              <Button type="link">
                <Badge status="default" text="육군 군사보안센터"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="장비정비정보체계"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="국방군수통합정보체계"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="국방수송정보체계"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="국방탄약관리체계"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="국방인사정보체계"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="자료교환체계"/>
              </Button>
            </div>
          </Card>
        </Col>
        <Col span={4}>
          <Card type="inner" title="업무참고">
            <div>
              <Button type="link">
                <Badge status="default" text="암호장비관리체계"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="보안지원센터"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="통합예약체계"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="육군모집"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="DRIMS"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="재정관리단"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="신체검사(검진)"/>
              </Button>
            </div>
          </Card>
        </Col>
        <Col span={4}>
          <Card type="inner" title="정보마당">
            <div>
              <Button type="link">
                <Badge status="default" text="국방일보"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="M♥Kiss"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="유해발굴 홍보 및 교육자료"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="국방급여정보"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="군 쇼핑몰"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="자기개발정보센터"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="뉴스파발마"/>
              </Button>
            </div>
          </Card>
        </Col>
        <Col span={4}>
          <Card type="inner" title="신고/상담">
            <div>
              <Button type="link">
                <Badge status="default" text="장병 인터넷중독 진단체계"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="성고충상담실"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="육군인권존중센터"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="육군안전센터"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="신인성검사"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="군기수준 평가체계"/>
              </Button>
            </div>
            <div>
              <Button type="link">
                <Badge status="default" text="징계 상담"/>
              </Button>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card type="inner" title="부대활동">
            test
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default WorksMenu;