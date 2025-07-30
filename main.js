const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-btn');

function openSidebar() {
  sidebar.classList.remove('-translate-x-full');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // prevent body scroll
}

function closeSidebar() {
  sidebar.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
  document.body.style.overflow = '';
}

function generateSidebarLinks() {
  const sidebarNav = document.querySelector('#dynamic-links');
  const headings = document.querySelectorAll('main h2');

  headings.forEach((heading, index) => {
    // Ensure the heading has a unique ID
    if (!heading.id) {
      heading.id = heading.textContent
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')         // spaces to dashes
        .replace(/[^\w\-]+/g, '')     // remove non-word chars
        .replace(/\-+/g, '-');        // collapse multiple dashes

      // Ensure uniqueness by appending an index if necessary
      if (document.getElementById(heading.id)) {
        heading.id += '-' + index;
      }
    }

    // Create the link
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    const label = Array.from(heading.childNodes)
      .filter(node => node.nodeType === Node.TEXT_NODE)
      .map(node => node.textContent.trim())
      .join(' ');

    link.textContent = label;
    link.className = 'px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-200 transition block';

    // Append to nav
    sidebarNav.appendChild(link);
  });
}

function createStepNavFooter() {
  const main = document.querySelector('main');
  const footer = document.getElementById('step-nav-footer');

  if (!main || !footer) return;

  const prev = main.dataset.prev;
  const next = main.dataset.next;

  footer.innerHTML = `
    <div>
      ${prev ? `<a href="${prev}" class="text-blue-600 hover:underline">&larr; Previous</a>` : ''}
    </div>
    <div>
      ${next ? `<a href="${next}" class="text-blue-600 hover:underline">Next &rarr;</a>` : ''}
    </div>
  `;
}

menuBtn.addEventListener('click', () => {
  if (sidebar.classList.contains('-translate-x-full')) {
    openSidebar();
  } else {
    closeSidebar();
  }
});

sidebar.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link) {
    closeSidebar();
  }
});

overlay.addEventListener('click', closeSidebar);

generateSidebarLinks();
createStepNavFooter();