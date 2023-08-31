<script setup></script>

<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside class="aside">
        <div class="aside-info">
          <img src="../assets/images/info-pic.png" alt="" class="info-pic" />
          <h1>周深童</h1>
          <div class="info-value">
            <p>徐州金龙湖小学</p>
            <span>校管</span>
          </div>
        </div>
        <button class="user">用户中心</button>
        <div class="aside-fuc">
          <div class="fuc1">
            <img src="../assets/images/fuc1.png" alt="" />
            <h1>32条</h1>
            <p>未读消息</p>
          </div>
          <div class="fuc2">
            <img src="../assets/images/fuc2.png" alt="" />
            <h1>12条</h1>
            <p>剩余待办</p>
          </div>
        </div>
        <div class="aside-collect">
          <div class="collect-title">
            <h1>我的收藏</h1>
            <img src="../assets/icon/add.svg" alt="" />
          </div>
          <ul class="collect-list">
            <li>
              <h1>百度知道</h1>
              <p>www.baidu.com</p>
              <div class="list-icon">
                <img src="../assets/icon/aside-edit.png" alt="" />
              </div>
            </li>
            <li>
              <h1>百度知道</h1>
              <p>www.baidu.com</p>
              <div class="list-icon">
                <img src="../assets/icon/aside-edit.png" alt="" />
              </div>
            </li>
            <li>
              <h1>百度知道</h1>
              <p>www.baidu.com</p>
              <div class="list-icon">
                <img src="../assets/icon/aside-edit.png" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </el-aside>
      <el-main class="main">
        <div class="header">
          <div class="title">
            <img src="../assets/images/logo.png" alt="logo" />
            <h1>金龙湖小学智慧教育云平台</h1>
          </div>
          <div></div>
          <ul class="tabs">
            <li class="selected"><a href="">个人空间</a></li>
            <li><a href="">应用商城</a></li>
          </ul>
          <div class="info">
            <p>
              <img src="../assets/icon/theme.svg" alt="" /><a href=""
                >切换皮肤</a
              >
            </p>
            <p>
              <img src="../assets/images/pic.png" alt="" /><a href=""
                >系统管理员</a
              >
            </p>
          </div>
        </div>
        <div class="content">
          <div class="function">
            <div class="funciton-info">
              <h1>常用应用</h1>
              <a href="">编辑</a>
            </div>
            <ul>
              <li>
                <img src="../assets/images/main-fun1.png" alt="" />
                <p>论文评论</p>
              </li>
              <li>
                <img src="../assets/images/main-fun1.png" alt="" />
                <p>论文评论</p>
              </li>
              <li>
                <img src="../assets/images/main-fun1.png" alt="" />
                <p>论文评论</p>
              </li>
              <li>
                <img src="../assets/images/main-fun1.png" alt="" />
                <p>论文评论</p>
              </li>
              <li>
                <img src="../assets/images/main-fun1.png" alt="" />
                <p>论文评论</p>
              </li>
              <li>
                <img src="../assets/images/main-fun1.png" alt="" />
                <p>论文评论</p>
              </li>
              <li>
                <img src="../assets/images/main-fun1.png" alt="" />
                <p>论文评论</p>
              </li>
              <li>
                <img src="../assets/images/main-fun1.png" alt="" />
                <p>论文评论</p>
              </li>
            </ul>
          </div>
          <div class="box">
            <div class="box01">
              <ul class="box1-title">
                <li class="selected">未读消息</li>
                <li>已读</li>
              </ul>
              <div class="box1-content">
                <img src="../assets/images/404.png" alt="" />
                <p>暂无消息</p>
              </div>
            </div>
            <div class="box02">
              <ul class="box2-title">
                <li class="selected">剩余待办</li>
                <li>已办</li>
              </ul>
              <ul class="box2-content">
                <li>
                  <div class="title">OA办公</div>
                  <div class="info">
                    <h1>【人力资源部】</h1>
                    <p>
                      您的审批表已有回馈您的审批表已您的审批表已审批表已您的审批表已审批表已您的审批表已
                    </p>
                  </div>
                  <p class="time">2023/06/06 14:00</p>
                </li>
                <li>
                  <div class="title">OA办公</div>
                  <div class="info">
                    <h1>【人力资源部】</h1>
                    <p>
                      您的审批表已有回馈您的审批表已您的审批表已审批表已您的审批表已审批表已您的审批表已
                    </p>
                  </div>
                  <p class="time">2023/06/06 14:00</p>
                </li>
                <li>
                  <div class="title">OA办公</div>
                  <div class="info">
                    <h1>【人力资源部】</h1>
                    <p>
                      您的审批表已有回馈您的审批表已您的审批表已审批表已您的审批表已审批表已您的审批表已
                    </p>
                  </div>
                  <p class="time">2023/06/06 14:00</p>
                </li>
                <li>
                  <div class="title">OA办公</div>
                  <div class="info">
                    <h1>【人力资源部】</h1>
                    <p>
                      您的审批表已有回馈您的审批表已您的审批表已审批表已您的审批表已审批表已您的审批表已
                    </p>
                  </div>
                  <p class="time">2023/06/06 14:00</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  height: 100%;
  width: 100%;
  background-color: var(--color-primary);
}
.aside,
.container,
.main {
  height: 100%;
}
.aside {
  width: 308px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 88px;
}
.aside > .aside-info {
  display: flex;
  flex-direction: column;
  color: var(--color-white);
  align-items: center;
}
.aside > .aside-info > .info-pic {
  width: 112px;
  height: 112px;
}
.aside > .aside-info > h1 {
  font-weight: 700;
  font-size: 18px;
  padding: 16px 0 8px 0;
}
.aside > .aside-info > .info-value {
  display: flex;
  align-items: center;
}
.aside > .aside-info > .info-value > p {
  font-size: 14px;
  margin-right: 8px;
}
.aside > .aside-info > .info-value > span {
  background-color: var(--color-aside-bg);
  padding: 4px 8px;
  border-radius: 4px;
}
.aside > button {
  margin: 16px 0 24px 0;
  width: 88px;
  height: 30px;
  border-radius: 15px;
  border: none;
  line-height: 30px;
  font-weight: 700;
  color: var(--color-primary);
  background-color: var(--color-white);
  cursor: pointer;
}
.aside > .aside-fuc {
  display: flex;
}
.aside > .aside-fuc > .fuc1,
.fuc2 {
  width: 106px;
  height: 148px;
  background-color: var(--color-white);
  border-radius: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  cursor: pointer;
}
.aside > .aside-fuc > .fuc1 > img,
.fuc2 > img {
  width: 48px;
  height: 48px;
}
.aside > .aside-fuc > .fuc1 > h1,
.fuc2 > h1 {
  font-size: 16px;
  font-weight: 700;
  padding: 16px 0 8px 0;
}
.aside > .aside-fuc > .fuc1 > p,
.fuc2 > p {
  font-size: 14px;
  font-weight: 400;
  color: var(--color-text-third);
}
.aside > .aside-fuc > .fuc1 {
  margin-right: 16px;
}
.aside > .aside-collect {
  display: flex;
  flex-direction: column;
  width: 228px;
  margin-top: 40px;
}
.aside > .aside-collect .collect-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.aside > .aside-collect .collect-title > h1 {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-white);
}
.aside > .aside-collect .collect-title > img {
  cursor: pointer;
}
.aside > .aside-collect > .collect-list > li {
  width: 100%;
  height: 66px;
  background-color: var(--color-aside-bg);
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 24px;
  color: var(--color-white);
  border-radius: 12px;
  cursor: pointer;
  position: relative;
}
.aside > .aside-collect > .collect-list > li > .list-icon {
  position: absolute;
  right: 24px;
  display: none;
}
.aside > .aside-collect > .collect-list > li:hover > .list-icon {
  display: block;
}
.aside > .aside-collect > .collect-list > li h1 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
}
.aside > .aside-collect > .collect-list > li p {
  font-size: 14px;
  color: var(--color-aside-font);
}
.main {
  padding: 0;
  border-radius: 36px 0 0 36px;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
}

.header {
  height: 88px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  color: var(--color-text-first);
}
.header > .title {
  display: flex;
  align-items: center;
}
.header > .title img {
  width: 36px;
  height: 36px;
  margin-right: 16px;
}
.header > .title h1 {
  font-size: 26px;
  font-weight: 700;
}
.header > .tabs {
  display: flex;
  align-items: center;
}
.header > .tabs li {
  padding: 0 16px;
}
.header > .tabs li.selected {
  font-size: 18px;
  position: relative;
}
.header > .tabs li.selected a {
  font-weight: bold;
}
.header > .tabs li.selected::before {
  content: " ";
  position: absolute;
  bottom: -12px;
  left: calc(50% - 8px);
  width: 16px;
  height: 4px;
  border-radius: 2px;
  background-color: var(--color-primary);
}
.header > .info {
  display: flex;
}
.header > .info p {
  display: flex;
  align-items: center;
  margin-left: 24px;
}
.header > .info img {
  margin-right: 8px;
}
.header > .info p:nth-child(2) a {
  line-height: 15px;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 40px 40px 40px;
}
.content .function {
  background-color: var(--color-background-white);
  margin-bottom: 32px;
  border-radius: 32px;
  padding: 32px 32px 40px 32px;
  box-shadow: 0px 36px 32px -28px rgba(181, 190, 212, 0.5);
}
.content .function > .funciton-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
}
.content .function > .funciton-info > h1 {
  font-size: 18px;
  font-weight: 700;
}
.content .function > .funciton-info a:hover {
  color: var(--color-primary);
}
.content .function > ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  align-content: start;
}
.content .function > ul > li {
  height: 88px;
  background-color: var(--color-background);
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 16px;
  cursor: pointer;
}
.content .function > ul > li > img {
  width: 64px;
  height: 64px;
  margin-right: 16px;
}
.content .function > ul > li > p {
  font-size: 15px;
}
.content .box {
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.content .box .box01,
.box02 {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background-white);
  border-radius: 32px;
  box-shadow: 0px 36px 32px -28px rgba(181, 190, 212, 0.5);
  padding: 32px 32px 40px 32px;
}
.content .box .box01 > .box1-title,
.box02 > .box2-title {
  display: flex;
  align-items: center;
}
.content .box .box01 > .box1-title > li,
.box02 > .box2-title > li {
  margin-right: 24px;
  position: relative;
  cursor: pointer;
}
.content .box .box01 > .box1-title > .selected,
.box02 > .box2-title > .selected {
  font-size: 18px;
  font-weight: 700;
}
.content .box .box01 > .box1-title > li.selected::before,
.box02 > .box2-title > li.selected::before {
  content: " ";
  position: absolute;
  bottom: -12px;
  left: calc(50% - 8px);
  width: 16px;
  height: 4px;
  border-radius: 2px;
  background-color: var(--color-primary);
}
.content .box .box01 {
  margin-right: 32px;
}
.content .box .box01 > .box1-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-bottom: 40px;
}
.content .box .box01 > .box1-content > img {
  width: 220px;
  height: 220px;
}
.content .box .box02 > .box2-content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  overflow: hidden;
}
.content .box .box02 > .box2-content > li {
  display: flex;
  align-items: center;
  padding: 12px 0;
}
.content .box .box02 > .box2-content > li > .title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 48px;
  font-weight: 700;
  border-radius: 8px;
  padding: 0 16px;
  text-align: center;
  color: var(--color-primary);
  background-color: var(--color-aside-font);
  margin-right: 12px;
}
.content .box .box02 > .box2-content > li > .info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 0;
}
.content .box .box02 > .box2-content > li > .info > p {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content .box .box02 > .box2-content > li > .info > h1 {
  font-size: 15px;
  color: var(--color-primary);
  font-weight: 700;
  margin-left: -8px;
  margin-bottom: 8px;
}
.content .box .box02 > .box2-content > li > .time {
  font-size: 12px;
  color: var(--color-text-third);
  margin-left: 12px;
}
</style>
