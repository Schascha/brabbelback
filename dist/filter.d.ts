/**
 * Compare a with b using the given operator
 * @param  {String|String[]} a - The value or array of values to compare
 * @param  {String|String[]} b - The value or array of values to compare with
 * @param  {String} operator - The operator to use, default is ''
 * @return {Boolean} Returns true if the comparison is true, otherwise false
 */
export declare function compare(a: string | string[], b: string | string[], operator?: string): boolean;
/**
 * Filters an array of objects with multiple criteria
 * @param {Object[]} obj - The array of objects to filter
 * @param {{field: string, value: any, operator: string}[]} filters - The filters to apply
 * @return {Object} The filtered array
 */
export declare function filter<T extends Record<string, any>>(obj: T[], filters: {
    field: string;
    value: any;
    operator: string;
}[]): object;
/**
 * Group array items by key
 * @param  {Object[]} array - The array with objects to group
 * @param  {String} key - The key to group by
 * @return {Object} The grouped array
 */
export declare function groupBy<T extends Record<string, any>>(array: T[], key: string): Record<string, T[]>;
