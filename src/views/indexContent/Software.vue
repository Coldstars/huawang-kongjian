<script setup></script>

<template>
  <div class="content">
    <div class="function">
      <div class="funciton-info">
        <h1>全部应用</h1>
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
  flex: 1;
  background-color: var(--color-background-white);
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
</style>
