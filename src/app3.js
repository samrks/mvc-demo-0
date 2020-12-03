import "./app3.css"
import $ from "jquery"

const $square = $("#app3 .square")
$square.on("click", () => {
  /* toggle（切换）有则删除、无则添加 */
  $square.toggleClass("active")
})