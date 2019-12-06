let chatItems = [
  {
      id: "chat001",
      displayName: "三剑客",
      avatar: "/res/avatar-group.jpg",
      noticeCount: 0,
      noticeMsg: "",
      isMuted: false
  },
  {
      id: "chat002",
      displayName: "架构设计专栏",
      avatar: "/res/avatar-group.jpg",
      noticeCount: 5,
      noticeMsg: "许式伟:[收到了一个表情，请在手机上查看]",
      isMuted: false
  },
  {
      id: "chat003",
      displayName: "经纬CEO群",
      avatar: "/res/avatar-group.jpg",
      noticeMsg: "张颖:[收到了一个表情，请在手机上查看]",
      isMuted: true
  },
  {
      id: "chat004",
      displayName: "马云",
      avatar: "/res/avatar.jpg",
  },
  {
      id: "chat005",
      displayName: "任正非",
      avatar: "/res/avatar.jpg",
      noticeCount: "99+",
      noticeMsg: "[收到了一个表情，请在手机上查看]"
  }
]
class MyChatList {
  constructor() {
      this.onDataChanged = null
  }
  size() {
      return chatItems.length
  }
  get(i) {
      return chatItems[i]
  }
  add(chatItem) {
      let index = chatItems.length
      chatItems.push(chatItem)
      if (this.onDataChanged) {
          this.onDataChanged(index, index+1)
      }
  }
  remove(i) {
      if (i < chatItems.length) {
          chatItems.splice(i, 1)
          if (this.onDataChanged) {
              this.onDataChanged(i, chatItems.length)
          }
      }
  }
  listenDataChanged(handle) {
      this.onDataChanged = handle
  }
  onSelectionChanged(index) {
      console.log("onSelectionChanged:", index)
  }
}

window.chats = new MyChatList()
