import "./app2.css"
import $ from "jquery"

const $tabBar = $("#app2 .tab-bar")
const $tabContent = $("#app2 .tab-content")

// 1. jq 提供的事件委托写法如下：监听 tabBar 下的所以 li 的 click 事件
// 2. 如何确定一个元素在所有同级元素中的位置：遍历。jq 内置遍历下标 index()
$tabBar.on("click", "li", (e) => {
  // console.log(e.target)  // 可能获取到 span
  // console.log(e.currentTarget)  // 只获取 li // 具体用哪一个，可以试一下
  const $li = $(e.currentTarget)
  $li.addClass("selected")
    .siblings().removeClass("selected")
  const index = $li.index()
  console.log(index)  // 0 或 1
  $tabContent.children()
    .eq(index).addClass("active")
    .siblings().removeClass("active")
})

// 设置默认情况下，展示第一个 li（也可以在 html 中直接添加上激活的类名来展示默认li）
$tabBar.children().eq(0).trigger("click")
