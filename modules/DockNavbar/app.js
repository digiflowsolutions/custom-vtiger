/**
 *
 * @param {number} val
 * @param {number} min
 * @param {number} max
 */

function between(val, min, max) {
  return Math.max(min, Math.min(val, max));
}

/**
 * Gère le scaling a appliquer en fonction de la distance
 * https://transum.org/maths/activity/graph/desmos.asp pour le graphique
 * @param {number} d
 */
function scaling(d) {
  return Math.max(Math.min(-0.2 * Math.pow(d, 2) + 1.05, 1), 0);
}

const TransformOrigins = {
  "-1": "right",
  0: "center",
  1: "left",
};
/**
 * @property {HTMLElement} root
 * @property {HTMLElement} icons
 * @property {number} iconSize
 * @property {number} mousePosition
 */

class Dock {
  scale = 1;

  /**
   * @property {HTMLElement} modal
   */
  modal = document.getElementById("dock-modal");
  /**
   *
   * @param {HTMLElement} el
   */
  constructor(el) {
    this.root = el;
    this.icons = Array.from(el.children);

    if (this.icons.length === 0) {
      return;
    }
    this.iconSize = this.icons[0].offsetWidth;
    el.addEventListener("mousemove", this.handleMouseMove.bind(this));
    el.addEventListener("mouseleave", this.handleMouseMove.bind(this));
    el.addEventListener("mouseenter", this.handleMouseEnter.bind(this));

    // Add event listeners for icon hover
    this.icons.forEach((icon) => {
      icon.addEventListener("mouseenter", this.handleIconHover.bind(this));
      icon.addEventListener("mouseleave", this.hideModal.bind(this));
    });
  }

  /**
   *
   * @param {MouseEvent} e
   */
  handleMouseMove(e) {
    this.mousePosition = between(
      (e.clientX - this.root.offsetLeft) / this.iconSize,
      0,
      this.icons.length
    );
    this.scaleIcons();
  }
  /**
   * Applique la transformation sur les icones
   */
  scaleIcons() {
    const selectedIndex = Math.floor(this.mousePosition);
    const centerOffset = this.mousePosition - selectedIndex - 0.5;

    let baseOffset = this.scaleFromDirection(
      selectedIndex,
      0,
      -centerOffset * this.iconSize
    );
    let offset = baseOffset * (0.5 - centerOffset);

    for (let i = selectedIndex + 1; i < this.icons.length; i++) {
      offset += this.scaleFromDirection(i, 1, offset);
    }

    offset = baseOffset * (0.5 + centerOffset);

    for (let i = selectedIndex - 1; i >= 0; i--) {
      offset += this.scaleFromDirection(i, -1, -offset);
    }
  }

  /**
   *
   * @param {number} index Index de l'icône à agrandir
   * @param {number} direction Position de l'icone(0:centre, -1:gauche, 1:droite)
   * @param {number} offset
   */
  scaleFromDirection(index, direction, offset) {
    const center = index + 0.5;
    const distanceFromPointer = this.mousePosition - center;
    const scale = scaling(distanceFromPointer) * this.scale;
    const icon = this.icons[index];

    if (icon) {
      // Add a check to ensure the icon is defined
      icon.style.setProperty(
        "transform",
        `translateX(${offset}px) scale(${scale + 1})`
      );
      icon.style.setProperty(
        "transform-origin",
        `${TransformOrigins[direction.toString()]} bottom`
      );
    }

    return scale * this.iconSize;
  }

  handleMouseLeave() {
    this.icons.forEach((icon) => {
      icon.style.removeProperty("transform");
      icon.style.removeProperty("transform-origin");
    });
  }

  handleMouseEnter() {
    this.root.classList.add("animated");
    window.setTimeout(() => {
      this.root.classList.remove("animated");
    }, 100);
  }

  /**
   * Handles the mouseenter event on the icon element
   * @param {MouseEvent} e
   */
  handleIconHover(e) {
    const imgAlt = e.target
      .querySelector("img")
      .getAttribute("alt")
      .toUpperCase();
    this.showModal(imgAlt);
  }

  /**
   * Shows the modal with the specified content
   * @param {string} content
   */
  showModal(content) {
    this.modal.textContent = content;
    this.modal.classList.add("show");
  }

  /**
   * Hides the modal
   */
  hideModal() {
    this.modal.classList.remove("show");
  }
}

new Dock(document.querySelector(".dock"));
