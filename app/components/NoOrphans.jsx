"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const BLOCKS = "h1, h2, h3, h4, h5, h6, p, li, dt, dd, blockquote, figcaption";
const NBSP = " ";

// tie a block's last two words with a no-break space, so its last line never
// holds one word alone. text-wrap (see globals.css) only hints at this and
// Chrome still leaves plenty, so it's done here, after hydration so the
// server markup still matches. A forced break between the last two words (a
// <br>, or a newline the block keeps with white-space: pre-line) is the
// design's own line, so it's left alone.
function tie(el) {
  if (el.dataset.tied) return;
  const ws = getComputedStyle(el).whiteSpace;
  if (ws === "nowrap" || ws === "pre") return;
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  const nodes = [];
  let n;
  while ((n = walker.nextNode())) {
    if (n.nodeType === 1 && n.tagName === "BR") nodes.push(n);
    else if (n.nodeType === 3) nodes.push(n);
  }
  // walk back from the end: past the last word, to the first gap before it
  let seenWord = false;
  for (let i = nodes.length - 1; i >= 0; i--) {
    const node = nodes[i];
    if (node.nodeType === 1) return; // a <br> before the last word
    const text = node.data;
    for (let k = text.length - 1; k >= 0; k--) {
      const ch = text[k];
      if (!/\s/.test(ch)) {
        seenWord = true;
        continue;
      }
      if (!seenWord) continue; // trailing whitespace
      if (ch !== " ") return; // a newline or an existing no-break space
      // skip pairs too long to share a line in a narrow box
      const tail = el.textContent.trim().split(/\s+/).slice(-2).join(" ");
      if (tail.length > 28) return;
      node.data = text.slice(0, k) + NBSP + text.slice(k + 1);
      el.dataset.tied = "1";
      return;
    }
  }
}

export default function NoOrphans() {
  const pathname = usePathname();

  useEffect(() => {
    const run = () => document.querySelectorAll(BLOCKS).forEach(tie);
    run();
    // content that mounts later (carousels, revealed sections, client data)
    let t;
    const mo = new MutationObserver(() => {
      clearTimeout(t);
      t = setTimeout(run, 100);
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      clearTimeout(t);
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
