<script setup></script>

<template>
  <div class="content">
    <div class="function">
      <div class="funciton-info">
        <h1>常用应用</h1>
        <a href="">编辑</a>
      </div>
      <ul>
        <li>
          <img src="../../assets/images/main-fun1.png" alt="" />
          <p>论文评论</p>
        </li>
        <li>
          <img src="../../assets/images/main-fun1.png" alt="" />
          <p>论文评论</p>
        </li>
        <li>
          <img src="../../assets/images/main-fun1.png" alt="" />
          <p>论文评论</p>
        </li>
        <li>
          <img src="../../assets/images/main-fun1.png" alt="" />
          <p>论文评论</p>
        </li>
        <li>
          <img src="../../assets/images/main-fun1.png" alt="" />
          <p>论文评论</p>
        </li>
        <li>
          <img src="../../assets/images/main-fun1.png" alt="" />
          <p>论文评论</p>
        </li>
        <li>
          <img src="../../assets/images/main-fun1.png" alt="" />
          <p>论文评论</p>
        </li>
        <li>
          <img src="../../assets/images/main-fun1.png" alt="" />
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
          <img src="../../assets/images/404.png" alt="" />
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
</template>

<style scoped>
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
