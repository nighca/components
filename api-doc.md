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
  display-name="张三"
  avatar="/res/avatar.jpg"
  red-dot-style="reddot"
  notice-count="2"
  notice-msg="Hello"
  is-muted
></q-chat-item>
```

### Attributes / Properties

##### `id`

`string`

##### `displayName`

`string`: chat 名

##### `avatar`

`string`, 头像图片 url

##### `noticeCount`

`number` | `string`, 未读消息数，数字(N)或字符串("99+")

##### `noticeMsg`

`string`, 未读消息内容

##### `isMuted`

`bool`, 是否静音

##### `active`

`bool`, 是否被选中

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
  display-name="张三"
  avatar="/res/avatar.jpg"
></q-friend-item>
```

### Attributes / Properties

##### name

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
  from-avatar="/res/avatar.jpg"
  from-self
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
  group-num="6"
></q-chat-header>
```

### Attributes / Properties

##### `title`

`string`: 聊天标题

##### `groupNum`

`number`: 聊天人数

### Events

无
