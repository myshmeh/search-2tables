/**
 * 
 * @param {array} data1 [[id: number, str1: string, str2: string]]
 * @param {array} data2 [[id: number, str1: string, str2: string]]
 */
const compare = (data1, data2) => {
    data1.sort((a, b) => a[0] - b[0]);
    data2.sort((a, b) => a[0] - b[0]);
    let result;
    let i;
    let j;

    result = {removed: [], added: [], modified: []};
    i = 0;
    j = 0;
    while(i < data1.length && j < data2.length) {
        const data1Id = data1[i][0];
        const data2Id = data2[j][0];
        if (data1Id < data2Id) {
            // removed data1Id in data2
            result.removed.push(data1[i]);
            i++;
            continue;
        }
        else if (data1Id > data2Id) {
            // added data2Id from data1
            result.added.push(data2[j]);
            j++;
            continue;
        }
        for (let k = 1; k < data1[i].length; k++) {
            if (data1[i][k] === data2[j][k]) continue;
            // data col element is different
            result.modified.push({
                id: data1Id,
                before: data1[i][k],
                after: data2[j][k],
            });
        }
        i++;
        j++;
    }
    if (i >= data1.length) {
        // added data2 portion from data1
        for (; j < data2.length; j++)
            result.added.push(data2[j]);
    }
    if (j >= data2.length) {
        // removed data1 portion in data2
        for (; i < data1.length; i++)
            result.removed.push(data1[i]);
    }

    return result;
};

module.exports = compare;