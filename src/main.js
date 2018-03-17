import layer from "./components/layer/layer.js";

const appendChild = (layer) => {
    var tpl = layer.tpl;
    document.getElementById("app").innerHTML = tpl;
}
console.log(layer);
appendChild(layer);