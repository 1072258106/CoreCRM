import React from 'react';
import ReactDOM from 'react-dom';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Edit extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

        console.log(111);

    }

    handleClick() {

    }

    render() {
        return (
            <div>

                <Menu
                    onClick={this.handleClick}
                    style={{width: 240}}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                        <MenuItemGroup key="g1" title="Item 1">
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup key="g2" title="Item 2">
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting"/><span>Navigation Three</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>

                {/*
                 <div class="container">

                 <div class="row">
                 <div class="well">
                 <div class="page-header">
                 <h3>修改个人资料</h3>
                 </div>

                 <form role="form" class="form-horizontal" asp-controller="Profile" asp-action="Index"
                 method="post">
                 <div class="form-group">
                 <label asp-for="Avatar" class="col-sm-2 control-label">头像</label>
                 <div class="col-sm-4">
                 <div
                 style="width: 100px; height: 100px; background-color: lightblue; margin-bottom: 8px;">
                 <img src=""></div>
                 <input asp-for="AvatarFile" type="file" class="form-contrl">
                 </div>
                 </div>
                 <div class="form-group">
                 <label asp-for="UserName" class="col-sm-2 control-label">用户名</label>
                 <div class="col-sm-4">
                 <input asp-for="UserName" class="form-control" placeholder="修改用户名">
                 </div>
                 </div>
                 <div class="form-group">
                 <label asp-for="AccountState" class="col-sm-2 control-label">账号状态</label>
                 <div class="col-sm-4">
                 <select asp-for="AccountState"
                 asp-items="Html.GetEnumSelectList<AccountState>()"
                 class="form-control">
                 <option>可用</option>
                 <option>停用</option>
                 </select>
                 </div>
                 </div>
                 <div class="form-group">
                 <label asp-for="Department" class="col-sm-2 control-label">部门</label>
                 <div class="col-sm-4">
                 <select id="Department" asp-for="Department" class="form-control"
                 v-model="selected">
                 <option v-if="departments.length === 0" value="0">加载中</option>
                 <option v-for="option in departments" v-bind:value="option.value">
                 </option>
                 </select>
                 </div>
                 </div>
                 <div class="form-group">
                 <label asp-for="Position" class="col-sm-2 control-label">岗位</label>
                 <div class="col-sm-4">
                 <select id="Position" asp-for="Position" class="form-control"
                 v-model="selected">
                 <option v-if="positions.length === 0" value="0">加载中</option>
                 <option v-for="option in positions" v-bind:value="option.value">
                 </option>
                 </select>
                 </div>
                 </div>
                 <div class="form-group">
                 <label asp-for="Gender" class="col-sm-2 control-label">性别</label>
                 <div class="col-sm-4">
                 <label class="radio-inline">
                 <input asp-for="Gender" type="radio" value="@gender" checked/>
                 男
                 </label>
                 <label class="radio-inline">
                 <input asp-for="Gender" type="radio" value="@gender"/>
                 女
                 </label>
                 </div>
                 </div>
                 <div class="form-group">
                 <label asp-for="Email" class="col-sm-2 control-label">邮箱</label>
                 <div class="col-sm-4">
                 <input asp-for="Email" class="form-control"/>
                 </div>
                 </div>
                 <div class="form-group">
                 <label asp-for="Phone" class="col-sm-2 control-label">电话</label>
                 <div class="col-sm-4">
                 <input asp-for="Phone" class="form-control"/>
                 </div>
                 </div>
                 <div class="form-group">
                 <label asp-for="Email" class="col-sm-2 control-label">通信地址</label>
                 <div class="col-sm-4">
                 <textarea asp-for="Address" class="form-control" rows="2"></textarea>
                 </div>
                 </div>
                 <div class="form-group">
                 <div class="col-sm-offset-2 col-sm-1">
                 <button type="submit" class="btn btn-primary">保存</button>
                 </div>
                 <div class="col-sm-1">
                 <a href="@ViewData[" ReturnUrl"]" class="btn btn-primary">取消</a>
                 </div>
                 </div>
                 </form>
                 </div>
                 </div>

                 <hr />
                 <footer>
                 <p>&copy; 2016 - CoreCRM</p>
                 </footer>
                 </div>
                 */}
            </div>
        )
    }

}


ReactDOM.render(<Edit/>, document.getElementById('wrap'));