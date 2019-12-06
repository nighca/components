const friendItems = [
  {
    id: "friend001",
    displayName: "三剑客",
    avatar: "/res/avatar-group.jpg",
  },
  {
    id: "friend002",
    displayName: "架构设计专栏",
    avatar: "/res/avatar-group.jpg",
  },
  {
    id: "friend003",
    displayName: "经纬CEO群",
    avatar: "/res/avatar-group.jpg",
  },
  {
    id: "friend004",
    displayName: "马云",
    avatar: "/res/avatar.jpg",
  },
  {
    id: "friend005",
    displayName: "任正非",
    avatar: "/res/avatar.jpg",
  }
]

class MyFriendList {
  constructor() {
    this.onDataChanged = null
  }
  size() {
    return friendItems.length
  }
  get(i) {
    return friendItems[i]
  }
  add(friend) {
    let index = friendItems.length
    friendItems.push(friend)
    if (this.onDataChanged) {
      this.onDataChanged(index, index+1)
    }
  }
  remove(i) {
    if (i < friendItems.length) {
      friendItems.splice(i, 1)
      if (this.onDataChanged) {
          this.onDataChanged(i, friendItems.length)
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

window.friends = new MyFriendList()
