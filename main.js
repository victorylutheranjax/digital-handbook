const content = document.getElementById('content');
const sidebar = document.getElementById('sidebar');
const sidebarTitle = document.getElementById('sidebar-title');
const mobileTitle = document.getElementById('mobile-title');
const sidebarNav = document.getElementById('dynamic-links');
const footerNav = document.getElementById('step-nav-footer');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-button');

// --- Utility ---
function scrollToHash() {
  const hash = window.location.hash;
  if (!hash) return;

  const targetEl = content.querySelector(hash) || document.querySelector(hash);
  if (!targetEl) return;

  // find the nearest scrollable ancestor (the first one with scroll height > client height)
  let scroller = content;
  while (scroller && scroller.scrollHeight <= scroller.clientHeight) {
    scroller = scroller.parentElement;
  }
  if (!scroller) scroller = document.scrollingElement || document.documentElement;

  targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function getScrollParent(node) {
  let parent = node.parentElement;
  while (parent) {
    const style = getComputedStyle(parent);
    const overflowY = style.overflowY;
    if (/(auto|scroll)/.test(overflowY)) return parent;
    parent = parent.parentElement;
  }
  // fallback to document scrolling element
  return document.scrollingElement || document.documentElement;
}
function initImageModal() {
  if (!document.getElementById('modal-overlay')) {
    const modalHTML = `
    <div id="modal-overlay"
      class="hidden fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div class="relative max-w-[90%] w-full mx-4">
        <button id="close"
          class="fixed top-4 right-6 text-white text-3xl font-bold leading-none hover:text-gray-300 transition">
          &times;
        </button>
        <img id="modal-image" class="w-full h-auto rounded-2xl shadow-2xl">
      </div>
    </div>
  `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  const modal = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('close');
  const modalImage = document.getElementById('modal-image');
  const images = document.querySelectorAll('.click-to-expand');

  if (images.length === 0) return;

  images.forEach(image => {
    image.addEventListener('click', () => {
      modalImage.src = image.src;
      modal.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => modal.classList.add('hidden'));

  modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) modal.classList.add('hidden');
  });
}

// --- Sidebar open/close ---
function openSidebar() {
  sidebar.classList.remove('-translate-x-full');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  sidebar.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
  document.body.style.overflow = '';
}
menuBtn.addEventListener('click', () => { sidebar.classList.contains('-translate-x-full') ? openSidebar() : closeSidebar(); });
overlay.addEventListener('click', closeSidebar);

// --- Dynamic Page Loader ---
async function loadPage(pagePath, pushState = true) {
  try {
    const res = await fetch(`pages/${pagePath}`);
    if (!res.ok) throw new Error(`Failed to load ${pagePath}`);
    const html = await res.text();

    const doc = new DOMParser().parseFromString(html, 'text/html');
    const main = doc.querySelector('main');
    if (!main) throw new Error('No <main> found.');

    // Update `main` content
    content.innerHTML = main.innerHTML;
    Object.entries(main.dataset).forEach(([k, v]) => {
      content.dataset[k] = v;
    });

    // Update title
    const h1 = main.querySelector('h1');
    const title = h1?.textContent?.trim() || pagePath.replace('.html', '');
    document.title = `${title} — Victory Digital Handbook`;
    sidebarTitle.textContent = title;
    mobileTitle.textContent = title;

    // Update theme color
    const color = main.dataset.themeColor;
    content.className = `max-w-3xl mx-auto w-full p-8 text-${color}-800`;

    // Generate sidebar and footer links
    generateSidebarLinks();
    createStepNavFooter();

    // Update URL
    if (pushState) {
      history.pushState({ page: pagePath }, title, `?page=${pagePath}`);
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToHash();
        initImageModal();
      });
    });

  } catch (err) {
    console.error(err);
    content.innerHTML = `<p class="text-red-600">Failed to load page.</p>`;
  }
}

// --- Sidebar Link Generator ---
function generateSidebarLinks() {
  sidebarNav.innerHTML = '';

  const headings = content.querySelectorAll('h2');

  headings.forEach((heading, i) => {
    if (!heading.id) heading.id = heading.textContent.toLowerCase().replace(/\s+/g, '-');

    const clone = heading.cloneNode(true);
    clone.querySelectorAll('.exclude').forEach(el => el.remove());

    const visibleText = clone.textContent.trim();

    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = visibleText;
    link.className = 'px-4 py-2 rounded-lg text-neutral-600 hover:bg-neutral-200 transition block';

    link.addEventListener('click', (e) => {
      if (e.defaultPrevented || e.button === 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      e.preventDefault();

      const newHash = `#${heading.id}`;

      history.pushState(null, '', newHash);

      if (window.innerWidth < 1024) closeSidebar();

      scrollToHash();
    });

    sidebarNav.appendChild(link);
  });
}

// --- Footer Link Generator ---
function createStepNavFooter() {
  const prev = content.dataset.prev;
  const next = content.dataset.next;

  footerNav.innerHTML = `
    <div>${prev ? `<a href="?page=${prev}" class="text-blue-600 hover:underline">&larr; Previous</a></div>` : ''}</div>
    <div>${next ? `<a href="?page=${next}" class="text-blue-600 hover:underline">Next &rarr;</a></div>` : ''}</div>
  `;

  footerNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const url = new URL(e.target.href);
      const page = url.searchParams.get('page');
      loadPage(page);
    });
  });
}

// --- URL Changes ---
window.addEventListener('popstate', e => {
  const page = e.state?.page || new URL(location).searchParams.get('page');
  if (page) loadPage(page, false);
});

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const page = params.get('page');

  loadPage(page, false);
});