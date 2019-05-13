import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import 'element-theme-default';
import * as serviceWorker from './serviceWorker';
import { Radio } from 'element-react';

var functionList = ['门诊中医诊断', '门诊中药处方', '中医针灸配穴', '门诊中医治未病', '门诊中医电子病历'];
ReactDOM.render(
    <BrowserRouter>
        <div class="bodytop">
            <div>
                <h2>业务选择</h2>
            </div>
            <div style="margin-right:30px;">
                <span style="color:#555555;">首页</span>
                <span style="color:#BBBBBB;"> > </span>
                <span style="color:#777777;">业务模块</span>
                <span style="color:#BBBBBB;"> > </span>
                <span style="color:#777777;">{{functionModel}}</span>
            </div>
        </div>
        <div class="bodymain">
            <Radio.Group value={this.state.radio3} onChange={this.onChange.bind(this, 'radio3')}>
                {
                    functionList.forEach((item,index) => {
                        return (
                            <Radio.Button value={item}>{item}</Radio.Button>
                        )
                    })
                }
            </Radio.Group>
        </div>
    </BrowserRouter>
)