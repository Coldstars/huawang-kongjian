<script setup></script>

<template>
  <div class="aside">
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
  </div>
</template>

<style scoped>
.aside {
  width: 100%;
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
</style>
