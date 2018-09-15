export function showcaseArrayElements(arr: Array<any>) {
    const copyArr = [...arr];
    if (copyArr && copyArr.length > 0) {
        const len = copyArr.length;
        if (len === 1) {
            return `${copyArr[0]}`;
        } else {
            const lastElement = copyArr.pop();
            return copyArr.join(', ') + ` and ${lastElement}`;
        }
    } else {
        return '';
    }
}
