import { regions as regionRegistry } from "../data/registries/world/regions.js";
import {worlds as worldRegistry} from "../data/registries/world/worlds.js";
import { settlements as settlementRegistry } from "../data/registries/world/settlements.js";
import { locations as locationRegistry} from "../data/registries/world/locations.js";
import { districts as districtRegistry  } from "../data/registries/world/districts.js";
import { npcs as npcRegistry  } from "../data/registries/characters/npcs.js";

import { getCurrentViewPath } from "../systems/getCurrentViewPath.js";

/**
 * Creates a DOM element with optional className, text content, HTML content, attributes, and children.
 * 
 * @param {string} tag - The HTML tag name (e.g., 'div', 'span', 'button')
 * @param {Object} options - Configuration object
 * @param {string} [options.className] - CSS class name(s) to apply
 * @param {string} [options.text] - Text content for the element
 * @param {string} [options.html] - HTML content for the element
 * @param {Object} [options.attrs={}] - Key-value pairs of HTML attributes
 * @param {Array<HTMLElement>} [children=[]] - Array of child elements to append
 * @returns {HTMLElement} The created DOM element
 * 
 * @example
 * // Create a simple div with class and text
 * const div = element('div', { className: 'container', text: 'Hello World' });
 * 
 * @example
 * // Create a link with attributes and children
 * const link = element('a', 
 *   { text: 'Click me', attrs: { href: '/page', target: '_blank' } },
 *   [element('span', { className: 'icon' })]
 * );
 */
function element(tag, { className, text, html, attrs = {} } = {}, children = []) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text !== undefined) e.textContent = text;
  if (html !== undefined) e.innerHTML = html;
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  for (const child of children) if (child) e.appendChild(child);
  return e;
}
