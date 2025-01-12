export default function textAreaSizer() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".text-area-sizer")
  );
  elements.forEach((element) => {
    const form = element.closest<HTMLFormElement>("form");
    const textarea = element.querySelector<HTMLTextAreaElement>("textarea");
    const initialValue = textarea ? textarea.value : "";
    textarea?.addEventListener("input", () => {
      element.setAttribute("data-text", textarea.value);
    });
    textarea?.addEventListener("change", () => {
      element.setAttribute("data-text", textarea.value);
    });

    textarea?.addEventListener("paste", (event) => {
      event.preventDefault();
      if (!event.clipboardData) return;
      let paste = event.clipboardData.getData("text");
      element.setAttribute("data-text", paste);
      const selection = window.getSelection();
      if (!selection?.rangeCount) return;
      selection.deleteFromDocument();
      selection.getRangeAt(0).insertNode(document.createTextNode(paste));
      selection.collapseToEnd();
    });
    form?.addEventListener("reset", () => {
      element.setAttribute("data-text", initialValue);
    });
  });
}
