// GoatCounter events and the header visitor total. A plain script, independent of the app bundle; every part fails silently.
(() => {
  const track = (path, title = path) => { try { window.goatcounter?.count?.({ path, title, event: true }); } catch {} };
  const slug = text => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  // Project and About dialogs, however they were opened (list, scene or nav).
  const dialog = document.querySelector('#project-dialog');
  if (dialog) new MutationObserver(() => {
    const title = dialog.open && document.querySelector('#dialog-title')?.textContent.trim();
    if (title) track(`open-${slug(title)}`, title);
  }).observe(dialog, { attributes: true, attributeFilter: ['open'] });
  // Entering the forest (capture runs before the button flips aria-pressed).
  document.querySelector('#explore-toggle')?.addEventListener('click', e => {
    if (e.currentTarget.getAttribute('aria-pressed') === 'false') track('enter-forest');
  }, true);
  fetch('https://mallikarjun.goatcounter.com/counter/TOTAL.json').then(r => r.ok ? r.json() : null).then(data => {
    const pill = document.querySelector('#visitors');
    if (!data?.count || !pill) return;
    pill.textContent = `Visitors ${data.count}`; pill.hidden = false;
  }).catch(() => {});
})();
