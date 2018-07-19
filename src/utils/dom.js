// @flow
export const getElement = (id: string): Object => document.getElementById(id) || {};

export const appendChild = (el: HTMLElement, node: ?HTMLElement) => {
  if (node) {
    node.appendChild(el);
  }
};

export const renderBacklinks = (id: string, pops: Object[] = []) => {
  const alphabetical = pops.slice().sort((a, b) => (a.name < b.name ? -1 : 1));
  const html = alphabetical.map(
    pop => `
    <li>
      <a href="${pop.url}" target="_blank">
        ${pop.name} data center in ${pop.building.city}, ${pop.building.country_name}
      </a>
    </li>
  `
  );
  getElement(id).innerHTML = `<ul>${html.join('')}</ul>`;
};
