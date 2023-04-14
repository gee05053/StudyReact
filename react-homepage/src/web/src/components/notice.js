import { Tabs } from 'antd';

function Notice () {
  const tabList = [
    {
      key: "공지사항",
      label: "공지사항",
      children: "no 공지사항",
    },
    {
      key: "5군단",
      label: "5군단",
      children: "no 5군단",
    },
    {
      key: "지작사",
      label: "지작사",
      children: "no 지작사",
    },
    {
      key: "육본",
      label: "육본",
      children: "no 육본",
    }
  ]
  return (
    <Tabs
      type="card"
      items={tabList}
      defaultActiveKey="공지사항"
      size='large'
    />
  );
}

export default Notice;