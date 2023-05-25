/* eslint-disable max-len */
/**
 * Definition of the link between components.
 */
class DependsOnLinkDefinition {
/**
 * Default constructor.
 * @param {object} [props={}] - Object that contains all properties to set.
 * @param {string} [props.attributeRef] - Reference of attribute can be the link.
 * @param {string} [props.sourceRef] - Reference of component can be the source in a link.
 * @param {string} [props.targetRef] - Reference of component can be the target of the link.
 * @param {string} [props.type] - Representation of the link.
 * @param {string} [props.color='black'] - Color of the link.
 * @param {number} [props.width=2] - Width of the link.
 * @param {number[]} [props.dashStyle] - Dash style of the link. See stroke-dasharray of svg.
 * @param {object} [props.marker] - Marker of the link, see
 * {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker official documentation}.
 * @param {number} [props.marker.width=5] - Width of the marker.
 * @param {number} [props.marker.height=5] - Height of the marker.
 * @param {number} [props.marker.refX=4] - X offset of the marker from the edge of the link path.
 * @param {number} [props.marker.refY=2.5] - Y offset of the marker from
 * the edge of the link path.
 * @param {ComponentAttributeDefinition[]} [props.definedAttributes=[]] - Defined attributes for
 * this type.
 * @param {string} [props.marker.orient='auto-start-reverse'] - Orientation of the marker.
 * @param {string} [props.marker.path='M 0 0 L 5 2.5 L 0 5'] - Path of the shape of the marker.
 */
  constructor(props = {
    attributeRef: null,
    sourceRef: null,
    targetRef: null,
    definedAttributes: [],
    type: null,
    color: 'black',
    width: 2,
    dashStyle: null,
    marker: {
      width: 5,
      height: 5,
      refX: 4,
      refY: 2.5,
      orient: 'auto-start-reverse',
      path: 'M 0 0 L 5 2.5 L 0 5',
    },
  }) {
    const {
      attributeRef,
      sourceRef,
      definedAttributes,
      targetRef,
      type,
      color,
      width,
      dashStyle,
      marker,
    } = props;

    /**
     * Reference of attribute can be the link.
     * @type {string}
     */
    this.attributeRef = attributeRef || null;
    /**
     * Reference of component can be the source in a link.
     * @type {string}
     */
    this.sourceRef = sourceRef || null;
    /**
     * Reference of component can be the target of the link.
     * @type {string}
     */
    this.targetRef = targetRef || null;
    /**
     * Representation of the link.
     * @type {string}
     */
    this.type = type || null;
    /**
     *
     * Defined attributes for this type.
     * @type {ComponentAttributeDefinition[]}
     */
    this.definedAttributes = definedAttributes || [];
    /**
     * Color of the link.
     * @type {string}
     */
    this.color = color || 'black';
    /**
     * Color of the link.
     * @type {number}
     */
    this.width = width || 2;
    /**
     * Dash style of the link. See stroke-dasharray of svg.
     * @type {number[]}
     */
    this.dashStyle = dashStyle || null;

    /**
     * Marker of the link.
     */
    this.marker = marker || {
      width: 5,
      height: 5,
      refX: 4,
      refY: 2.5,
      orient: 'auto-start-reverse',
      path: 'M 0 0 L 5 2.5 L 0 5',
    };
  }
}

export default DependsOnLinkDefinition;
