import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { Typography,Avatar } from 'antd';

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const App = () => {
  return (
    <div>
      
      <Layout>
      <Header className='head' style={{backgroundColor:'gray'}}>
        <h1>Heading</h1>
        <Title level={2}>h2. Ant Design</Title>
        <Avatar size={35} icon="user" style={{float:"right",marginTop:"-115px"}} />
      </Header>

      <Layout>
        <Sider style={{backgroundColor:'orange'}}>Sider</Sider>
        <Content style={{padding:'20px'}}>
          <p>
            the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
            the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
            the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
            the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
            the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
            the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
            the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
          </p>
          <p>
            the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
            the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
            the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
            the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
            the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
            the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
            the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
          </p>
        </Content>
        
      </Layout>
      <Footer style={{backgroundColor:'gray'}}>Footer</Footer>
      
      
    </Layout>


    </div>
  );
};

export default App;