import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'element-react';
import { Input } from 'element-react';
import { Carousel } from 'element-react';
import { Dialog } from 'element-react';
import { Radio } from 'element-react';
import 'element-theme-default';
import './Home.css';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

var imgList = [
    '../img/post1.jpg',
    '../img/post2.jpg',
    '../img/post3.jpg',
    '../img/post4.jpg',
    '../img/post5.jpg',
    '../img/post6.jpg',
],
dialogVisible1 = false,
dialogVisible2 = false,
dialogVisible3 = false,
dialogVisible4 = false,
patientId = '',
patientPwd = '',
doctorId = '',
doctorPwd = '',
dataId = 0,
showDoctorButton = true,
doctorName = '',
doctorLoginSuccess = false,
patientLogin = {
    id: '',
    name: '',
    passwords: '',
    gender: '',
    phoneNumber: '',
    address:'',
    nation:'',
    education:'',
},
doctorSign = {
    id: '',
    passwords: '',
    name: '',
    gender: '',
    phoneNumber:'',
    address:'',
    nation:'',
    education:'',
},
inviteCode = '';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="body">
                <div style={{backgroundColor: '#ffffff',margin: '15px'}}>
                    <Carousel interval="4000" type="card" height="200px" style={{paddingtop:'30px'}}>
                        {
                            [1,2,3,4,5,6].map((item, index) => {
                                return (
                                    <Carousel.Item key={index} style={{backgroundImage:'url('+ imgList[index] + ')'}}>
                                    </Carousel.Item>
                                )
                                })
                        }
                    </Carousel>
                    <DoctorName history={history}></DoctorName>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'20px 0'}}>
                        <label style={{marginRight:'20px'}}>登陆：</label>
                        <Dialog title="病患登陆"
                                visible={dialogVisible1}
                                width="20%">
                            <div style={{margin: '10px 20px'}}>
                                <label>用户：</label>
                                <Input placeholder="请输入内容" value={patientId} style={{width:'200px'}}></Input>
                            </div>
                            <div style={{margin: '10px 20px'}}>
                                <label>密码：</label>
                                <Input placeholder="请输入内容" value={patientPwd} style={{width:'200px'}} type="password"></Input>
                            </div>
                            <span slot="footer" className="dialog-footer">
                                <Button onClick={dialogVisible1 = false}>取 消</Button>
                                <Button type="primary" onClick={this.patientsLogin}>确 定</Button>
                            </span>
                        </Dialog>
                        <Dialog title="医生登陆"
                                visible={dialogVisible2}
                                width="20%">
                            <div style={{margin: '10px 20px'}}>
                                <label>用户：</label>
                                <Input placeholder="请输入内容" value={doctorId} style={{width:'200px'}}></Input>
                            </div>
                            <div style={{margin: '10px 20px'}}>
                                <label>密码：</label>
                                <Input placeholder="请输入内容" value={doctorPwd} style={{width:'200px'}} type="password"></Input>
                            </div>
                            <span slot="footer" className="dialog-footer">
                                <Button onClick={dialogVisible2 = false}>取 消</Button>
                                <Button type="primary" onClick={this.doctorLogin}>确 定</Button>
                            </span>
                        </Dialog>
                        <Button onClick={this.showDialog} type="primary" style={{marginRight:'15px'}}>病患</Button>
                        <Button onClick={dialogVisible2=true} type="primary" v-if="showDoctorButton">医生</Button>
                    </div>
                    <div style={{display:'flex',justifyContent:'center', alignItems:'center',margin:'20px 0'}}>
                        <label style={{marginRight:'20px'}}>注册：</label>
                        <Dialog title="病人注册"
                                visible={dialogVisible3}
                                width="30%">
                            <div>
                                <div style={{display:'flex', margin:'10px 0'}}>
                                    <div style={{marginRight:'40px;'}}>
                                        <label>用户：</label>
                                        <Input value={patientLogin.id} style={{width:'150px'}}></Input>
                                    </div> 
                                    <div>
                                        <label>姓名：</label>
                                        <Input value={patientLogin.name} style={{width:'150px'}}></Input>
                                    </div>
                                </div>
                                <div style={{display:'flex', margin:'10px 0'}}>    
                                    <div style={{marginRight:'40px'}}>
                                        <label>密码：</label>
                                        <Input value={patientLogin.passwords} style={{width:'150px'}} type="password"></Input>
                                    </div>
                                    <div>
                                        <label>性别：</label>
                                        <Radio label="男">男</Radio>
                                        <Radio label="女">女</Radio>
                                    </div>
                                </div>   
                                <div style={{display:'flex', margin:'10px 0'}}>
                                        <div style={{marginRight:'40px'}}>
                                            <label>电话：</label>
                                            <Input style={{width:'150px'}}></Input>
                                        </div>
                                        <div>
                                            <label>户籍：</label>
                                            <Input style={{width:'150px'}}></Input>
                                        </div> 
                                </div>
                                <div style={{display:'flex',margin:'10px 0'}}>   
                                    <div style={{marginRight:'40px'}}>
                                        <label>民族：</label>
                                        <Input style={{width:'150px'}}></Input>
                                    </div>
                                    <div>
                                        <label>学历：</label>
                                        <Input style={{width:'150px'}}></Input>
                                    </div>
                                </div>     
                            </div>
                            <div style={{display:'flex', margin:'10px 0',justifyContent:'center'}}>
                                <Button onClick={this.patientSignUp} type="primary" style={{marginRight:'20px'}}>确定</Button>
                                <Button onClick={dialogVisible3=false}>取消</Button>
                            </div>
                        </Dialog>
                        <Dialog title="医生注册"
                                visible={dialogVisible4}
                                width="30%">
                            <div>
                                <div style={{display:'flex', margin:'10px 0'}}>
                                    <div style={{marginRight:'40px'}}>
                                        <label>用户：</label>
                                        <Input value={doctorSign.id} style={{width:'150px'}}></Input>
                                    </div> 
                                    <div>
                                        <label>姓名：</label>
                                        <Input value={doctorSign.name} style={{width:'150px'}}></Input>
                                    </div>
                                </div>  
                                <div style={{display:'flex', margin:'10px 0'}}>
                                    <div style={{marginRight:'40px'}}>
                                        <label>密码：</label>
                                        <Input v-model="doctorSign.passwords" style={{width:'150px'}} type="password"></Input>
                                    </div>
                                    <div>
                                        <label>性别：</label>
                                        <Radio v-model="doctorSign.gender" label="男">男</Radio>
                                        <Radio v-model="doctorSign.gender" label="女">女</Radio>
                                    </div>
                                </div>    
                                <div style={{display:'flex', margin:'10px 0'}}> 
                                    <div style={{marginRight:'40px'}}>
                                        <label>电话：</label>
                                        <Input v-model="doctorSign.phoneNumber" style={{width:'150px'}}></Input>
                                    </div>
                                    <div>
                                        <label>户籍：</label>
                                        <Input v-model="doctorSign.address" style={{width:'150px'}}></Input>
                                    </div>
                                </div>  
                                <div style={{display:'flex', margin:'10px 0'}}>  
                                    <div style={{marginRight:'40px'}}>
                                        <label>民族：</label>
                                        <Input v-model="doctorSign.nation" style={{width:'150px'}}></Input>
                                    </div>
                                    <div>
                                        <label>学历：</label>
                                        <Input v-model="doctorSign.education" style={{width:'150px'}}></Input>
                                    </div>
                                </div>
                                <div>
                                    <label>邀请码：</label>
                                    <Input v-model="inviteCode" style={{width:'150px'}}></Input>
                                </div>     
                            </div>
                            <div style={{display:'flex',margin:'10px 0', justifyContent:'center'}}>
                                <Button onClick={this.doctorSignUp} type="primary" style={{marginRight:'40px'}}>确定</Button>
                                <Button onClick={dialogVisible4=false}>取消</Button>
                            </div>
                        </Dialog>
                        <Button onClick={dialogVisible3=true} type="primary" style={{marginRight:'15px'}}>病患</Button>
                        <Button onClick={dialogVisible4=true} type="primary">医生</Button>
                    </div>
                    <div style={{margin: '0 10px'}}>
                        <div style={{height:'40px', fontSize:'20px'}} >
                            <label className="eachline">重要新闻</label>
                        </div>
                        <div className="eachline">
                            <a href="http://news.sciencenet.cn/htmlnews/2018/1/398697.shtm" target="_blank" title="2017中国十大医学进展/新闻人物揭晓">2017中国十大医学进展/新闻人物揭晓</a>
                        </div>
                        <div className="eachline">
                            <a href="https://www.kanzhun.com/news/70408.html" target="_blank" title="交大医学院余健秀课题组在《核酸研究》发表论文">交大医学院余健秀课题组在《核酸研究》发表论文</a>
                        </div>
                        <div className="eachline">
                            <a href="http://www.sohu.com/a/228785560_102185" target="_blank" title="中国医学科学院肿瘤医院检验科副主任韩晓红：分子靶向治疗呼唤更多自主创新技术">中国医学科学院肿瘤医院检验科副主任韩晓红：分子靶向治疗呼唤更多自主创新技术</a>
                        </div>
                        <div className="eachline">
                            <a href="https://www.thepaper.cn/newsDetail_forward_2031130" target="_blank" title="中山医学院院长：提升公立医院儿科、急诊等医生岗位吸引力">中山医学院院长：提升公立医院儿科、急诊等医生岗位吸引力</a>
                        </div>
                        <div className="eachline">
                            <a href="http://www.jinan.gov.cn/art/2018/3/1/art_1222_1022282.html" target="_blank" title="济南国际医学科学中心召开专家评审会">济南国际医学科学中心召开专家评审会</a>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

    patientsLogin() {

    }

    doctorLogin() {

    }

    showDialog() {
        dialogVisible1=true
    }

    patientSignUp() {

    }

    doctorSignUp() {

    }
}


class DoctorName extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: doctorName,show:showDoctorButton};
    }
   
    render() {
      return (
        this.state.show ? 
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'20px 0'}}>
            <div style={{marginRight:'20px'}}>
                <label>主治医生：</label>
                <label>{this.state.name}</label>
            </div>
            <div>
            {/* <Link to="/welcome/" ><Button type="primary" onClick={this.recentInfo}>近期状况</Button></Link> */}
            <Button type="primary" onClick={this.recentInfo}>近期状况</Button>
            </div>
        </div> :
        null
      );
    }

    recentInfo(){
        console.log(this.props)
        this.props.history.push('./welcome')
    }
}
   
ReactDOM.render(
<DoctorName />,
document.getElementById('root')
);



export default Home;