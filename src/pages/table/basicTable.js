import React, {Component} from 'react';
import {Card, Table} from 'antd';
import axios from './../../axios/index';

class BasicTable extends Component {
    state = {
        dataSource2: []
    }

    componentDidMount() {
        const data = [
            {
                id: '0',
                userName: 'Jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥利匹克公园',
                time: '09:00'
            },
            {
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥利匹克公园',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥利匹克公园',
                time: '09:00'
            }
        ]

        data.map((item,index) =>{
            item.key = index;
        });

        this.setState({
            dataSource: data
        });

        this.request();
    }

    // 动态获取mock数据
    request = () => {
       axios.ajax({
           url: '/table/list',
           data: {
               params: {
                   page: 1
               }
           }
       }).then((res) => {
           if(res.code == 0) {
               this.setState({
                   dataSource2: res.result
               })
           }
       })
    }

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'state'
            },
            {
                title: '爱好',
                dataIndex: 'interest'
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        pagination={false}
                        columns={columns}
                        dataSource={this.state.dataSource}
                    />
                </Card>
                <Card title="动态数据渲染表格" style={{margin: '10px 0'}}>
                    <Table
                        bordered
                        pagination={false}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                    />
                </Card>
            </div>
        )
    }
}

export default BasicTable;