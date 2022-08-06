import html2canvas from "html2canvas";
import jsPdf from "jspdf";

// 判断是否需要添加空白div
const isSplit = (nodes, index, pageHeight) => {
  // 计算当前这块dom是否跨越了a4大小，以此分割
  if (
    nodes[index].offsetTop + nodes[index].offsetHeight < pageHeight &&
    nodes[index + 1] &&
    nodes[index + 1].offsetTop + nodes[index + 1].offsetHeight > pageHeight
  ) {
    return true;
  }
  return false;
};
const pdf = (containerClassname: string, fileName: string) => {
  // 避免出现浏览器滚动条导致的内容不全处理
  document.body.scrollTop = 0;
  //div内部滚动导致内容不全处理
  const target = document.getElementsByClassName(containerClassname)[0] as HTMLElement;
  target.style.height = "auto";
  html2canvas(target, {
    allowTaint: true,
    scale: 2,
    ignoreElements: (e) => {
      if (typeof e.className === "string") {
        return e.className?.includes("ignore-ele");
      }
      return false;
    },
  }).then((canvas) => {
    const contentWidth = canvas.width;
    const contentHeight = canvas.height;

    //一页pdf显示html页面生成的canvas高度;
    const pageHeight = (contentWidth / 592.28) * 841.89;
    //未生成pdf的html页面高度
    let leftHeight = contentHeight;
    //页面偏移
    let position = 0;
    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    const imgWidth = 595.28;
    const imgHeight = (592.28 / contentWidth) * contentHeight;

    const pageData = canvas.toDataURL("image/jpeg", 1.0);

    const pdf = new jsPdf({
      orientation: "p",
      unit: "pt",
      format: "a4",
    });

    //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
    //当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < pageHeight) {
      pdf.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
    } else {
      while (leftHeight > 0) {
        pdf.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
        leftHeight -= pageHeight;
        position -= 841.89;
        //避免添加空白页
        if (leftHeight > 0) {
          pdf.addPage();
        }
      }
    }
    pdf.save(`${fileName}.pdf`);
    target.style.height = "100%";
    document
      .getElementsByClassName("emptyDiv")[0]
      ?.parentNode.removeChild(document.getElementsByClassName("emptyDiv")[0]);
  });
};

//避免分页被截断
export const useExportPdf = (props: { containerClassname: string; itemClassName: string; fileName }): void => {
  const { containerClassname, itemClassName, fileName } = props;
  const A4_WIDTH = 592.28;
  const A4_HEIGHT = 841.89;
  const target = document.getElementsByClassName(containerClassname)[0];
  const pageHeight = (target.scrollWidth / A4_WIDTH) * A4_HEIGHT;
  const lableListID: any = document.getElementsByClassName(itemClassName);
  // 进行分割操作，当dom内容已超出a4的高度，则将该dom前插入一个空dom，把他挤下去，分割
  for (let i = 0; i < lableListID.length; i++) {
    const multiple = Math.ceil((lableListID[i].offsetTop + lableListID[i].offsetHeight) / pageHeight);
    if (isSplit(lableListID, i, multiple * pageHeight)) {
      const divParent = lableListID[i].parentNode;
      const newNode = document.createElement("div");
      newNode.className = "emptyDiv";
      const _H = multiple * pageHeight - (lableListID[i].offsetTop + lableListID[i].offsetHeight);
      newNode.style.height = _H + 30 + "px";
      newNode.style.width = "100%";
      newNode.style.marginTop = "40px";
      const next = lableListID[i].nextSibling; // 获取div的下一个兄弟节点
      // 判断兄弟节点是否存在
      if (next) {
        // 存在则将新节点插入到div的下一个兄弟节点之前，即div之后
        divParent.insertBefore(newNode, next);
      } else {
        // 不存在则直接添加到最后,appendChild默认添加到divParent的最后
        divParent.appendChild(newNode);
      }
    }
  }
  pdf(containerClassname, fileName);
};
