# `ChatList`

```html
<q-chat-list>
  <q-chat-item></q-chat-item>
  <q-chat-item></q-chat-item>
</q-chat-list>
```

### Attributes / Properties

无

### Events

无

# `ChatItem`

```html
<q-chat-item
  id="001"
  displayName="张三"
  avatar="/res/avatar.jpg"
  redDotStyle="reddot"
  noticeCount="2"
  noticeMsg="Hello"
  isMuted
></q-chat-item>
```

### Attributes / Properties

##### `id`

`string`

##### `displayName`

`string`

##### `avatar`

`string`, avatar url

##### `redDotStyle`

`string`, "reddot" (isMuted) | "reddot_bbig" (noticeCount >=99) | "reddot_middle"

##### `noticeCount`

`string`, notice message count, can be int(N) | string("99+")

##### `noticeMsg`

`string`, notice message

##### `isMuted`

`bool`, is muted

##### `active`

`bool`, is active

### Events

##### `click`

```js
const chatItem = document.createElement('q-chat-item')
chatItem.addEventListener('click', () => {
  chatItem.active = true
  console.log(chatItem.id)
})
```

# `FriendList`

```html
<q-friend-list>
  <q-friend-item></q-friend-item>
  <q-friend-item></q-friend-item>
</q-friend-list>
```

### Attributes / Properties

无

### Events

无

# `FriendItem`

```html
<q-friend-item
  id="001"
  displayName="张三"
  avatar="/res/avatar.jpg"
></q-friend-item>
```

### Attributes / Properties

##### `id`

`string`

##### `displayName`

`string`

##### `avatar`

`string`, avatar url

##### `active`

`bool`, is active

### Events

##### `click`

```js
const friendItem = document.createElement('q-friend-item')
friendItem.addEventListener('click', () => {
  friendItem.active = true
  console.log(friendItem.id)
})
```

# `ChatView`

```html
<q-chat-view>
  <q-message-item from="张三" content="你好！"></q-message-item>
  <q-message-item from="李四" content="你好！"></q-message-item>
</q-chat-view>
```

### Attributes / Properties

无

### Events

无

# `MessageItem`

```html
<message-item
  content="Hello!"
  from="张三"
  fromAvatar="/res/avatar.jpg"
  fromSelf
></message-item>
```

### Attributes / Properties

##### `content`

`string`, 信息内容

##### `from`

`string`, 发送者名

##### `fromAvatar`

`string`, 发送者头像

##### `fromSelf`

`bool`, 是否本人发送

### Events

无

# `SendBox`

```html
<q-send-box value="Hello!"></q-send-box>
```

### Attributes / Properties

##### `value`

`string`

### Events

##### `input`

输入

```js
const sendBox = document.createElement('q-send-box')
sendBox.addEventListener('input', () => {
  console.log(sendBox.value)
})
```

##### `submit`

提交

```js
const sendBox = document.createElement('q-send-box')
sendBox.addEventListener('submit', () => {
  console.log(sendBox.value)
})
```

##### `file`（比较复杂的功能，考虑是否实现？）

提交文件

```js
const sendBox = document.createElement('q-send-box')
sendBox.addEventListener('file', () => {
  console.log(sendBox.value)
})
```

# `MainTab`

（本次应该没有“阅读”模块，只有“好友” & “聊天”两个模块）

```html
<q-main-tab selected="chat"></q-main-tab>
```

### Attributes / Properties

##### `selected`

`string`: 可选值包括 `chat` / `friend`

### Events

##### `select`

选中行为

```js
const mainTab = document.createElement('q-main-tab')
mainTab.addEventListener('select', () => {
  console.log(mainTab.selected)
})
```

# `ChatHeader`

（原来的 `ChatGroup`，我理解其实是聊天界面的顶栏组件？另，下拉查看群成员列表的功能先不实现？）

```html
<q-chat-header
  title="七牛工作群"
  groupNum="6"
></q-chat-header>
```

### Attributes / Properties

##### `title`

`string`: 聊天标题

##### `groupNum`

`number`: 聊天人数

### Events

无
