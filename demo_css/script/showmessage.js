(function (window, document) {
    let Msg = function (options) {
        this.init(options);
    }
    Msg.prototype = {
        init({
            content = "", 
        }) {
            this.content = content;
            this.creatElement();
            this.show({
                el: this._el
            });
        },
        creatElement() {
            let wrap = document.createElement("div");
            wrap.className = "msg_wrap";
            const iconHTML = "<div><img src='../images/warn.png'></img></div>";
            const innerHTML = `
            <div class="msg-body">
                ${iconHTML}
                <div class="msg-body-content"></div>
            </div>`;
            wrap.innerHTML = innerHTML;
            let content = wrap.querySelector(".msg-body .msg-body-content");
            content.innerText = this.content;
            this._el = wrap;
        },
        show({
            el
        }) {
            document.body.appendChild(el);
            setTimeout(() => {
                el.style.transform = "translate(-50%,-50%) scale(1,1)";
            });
            setTimeout(() => {
                document.body.removeChild(el);
            },2000);
        },
    }
    window.$Msg = Msg;
})(window, document);