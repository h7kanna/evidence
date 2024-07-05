// @ts-check

import { uiColours } from '@evidence-dev/component-utilities/colours';

export const COLORS =
	/**
	 * @type {const}
	 * @satisfies {Record<import('../types.js').PresetColor, { lineColor: string; labelColor: string }>}
	 */
	({
		red: { lineColor: '#b04646', labelColor: '#b04646' },
		green: { lineColor: uiColours.green700, labelColor: uiColours.green700 },
		yellow: { lineColor: uiColours.yellow600, labelColor: uiColours.yellow700 },
		grey: { lineColor: uiColours.grey500, labelColor: uiColours.grey600 },
		blue: { lineColor: uiColours.blue500, labelColor: uiColours.blue500 }
	});

export const LABEL_POSITIONS =
	/**
	 * @type {const}
	 * @satisfies {Record<import('./reference-line.js').LabelPosition, string> & Record<string, unknown>}
	 */
	({
		aboveEnd: 'insideEndTop',
		aboveStart: 'insideStartTop',
		aboveCenter: 'insideMiddleTop',
		aboveCentre: 'insideMiddleTop',
		belowEnd: 'insideEndBottom',
		belowStart: 'insideStartBottom',
		belowCenter: 'insideMiddleBottom',
		belowCentre: 'insideMiddleBottom'
	});
