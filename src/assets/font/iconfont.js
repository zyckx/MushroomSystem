/* eslint-disable */
!(function (t) {
  var e,
    n,
    o,
    i,
    l,
    c,
    d =
      '<svg><symbol id="icon-huidaodingbu" viewBox="0 0 1024 1024"><path d="M866.7 96H157.3c-17.8 0-32.2 14.4-32.2 32.2 0 17.8 14.4 32.2 32.2 32.2h709.5c17.8 0 32.2-14.4 32.2-32.2 0-17.8-14.4-32.2-32.3-32.2zM512 225c-16.5 0-33 6.3-45.6 18.9L169.9 540.3c-5.8 5.8-9.4 13.9-9.4 22.8s3.6 17 9.4 22.8c5.8 5.8 13.9 9.4 22.8 9.4s17-3.6 22.8-9.4l264.2-264.2v574c0 17.8 14.4 32.2 32.2 32.2 17.8 0 32.2-14.4 32.2-32.2v-574l264.2 264.2c5.8 5.8 13.9 9.4 22.8 9.4s17-3.6 22.8-9.4c5.8-5.8 9.4-13.9 9.4-22.8s-3.6-17-9.4-22.8L557.6 243.9C545 231.3 528.5 225 512 225z"  ></path></symbol><symbol id="icon-huojian" viewBox="0 0 1024 1024"><path d="M727.04 750.592h-68.608v-81.92H686.08V249.856L512 99.328 337.92 253.952v414.72h28.672v81.92H296.96l-40.96-40.96V235.52l13.312-30.72 215.04-190.464h54.272l215.04 186.368 14.336 30.72v478.208z" fill="#437DFF" ></path><path d="M869.376 638.976l-147.456-18.432-35.84-40.96V350.208l69.632-28.672 147.456 147.456 12.288 28.672v99.328l-46.08 41.984zM768 543.744l65.536 8.192v-35.84L768 449.536v94.208zM154.624 638.976l-46.08-40.96v-99.328l12.288-28.672 147.456-147.456 69.632 28.672v229.376l-35.84 40.96-147.456 17.408z m35.84-123.904v35.84L256 542.72v-94.208l-65.536 66.56z" fill="#437DFF" ></path><path d="M512 465.92m-67.584 0a67.584 67.584 0 1 0 135.168 0 67.584 67.584 0 1 0-135.168 0Z" fill="#437DFF" ></path><path d="M479.232 660.48h58.368v233.472h-58.368zM391.168 723.968h58.368v157.696h-58.368zM461.824 922.624h58.368v88.064h-58.368zM574.464 748.544h58.368v188.416h-58.368z" fill="#63F7DE" ></path></symbol></svg>',
    a = (a = document.getElementsByTagName("script"))[
      a.length - 1
    ].getAttribute("data-injectcss");
  if (a && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (t) {
      console && console.log(t);
    }
  }
  function s() {
    l || ((l = !0), o());
  }
  (e = function () {
    var t, e, n, o;
    ((o = document.createElement("div")).innerHTML = d),
      (d = null),
      (n = o.getElementsByTagName("svg")[0]) &&
        (n.setAttribute("aria-hidden", "true"),
        (n.style.position = "absolute"),
        (n.style.width = 0),
        (n.style.height = 0),
        (n.style.overflow = "hidden"),
        (t = n),
        (e = document.body).firstChild
          ? ((o = t), (n = e.firstChild).parentNode.insertBefore(o, n))
          : e.appendChild(t));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(e, 0)
        : ((n = function () {
            document.removeEventListener("DOMContentLoaded", n, !1), e();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((o = e),
        (i = t.document),
        (l = !1),
        (c = function () {
          try {
            i.documentElement.doScroll("left");
          } catch (t) {
            return void setTimeout(c, 50);
          }
          s();
        })(),
        (i.onreadystatechange = function () {
          "complete" == i.readyState && ((i.onreadystatechange = null), s());
        }));
})(window);
