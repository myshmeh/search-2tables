const compareSquat = (data1, data2) => {
    data1.sort((a, b) => a[0] - b[0]);
    data2.sort((a, b) => a[0] - b[0]);
    let result;
    
    result = {removed: [], added: [], modified: []};
    for (let i = 0; i < data1.length; i++) {
        const data1Chunk = data1[i];
        const data1ChunkId = data1Chunk[0];
        let found = false;
        for (let j = 0; j < data2.length; j++) {
            const data2Chunk = data2[j];
            const data2ChunkId = data2Chunk[0];
            if (data1ChunkId !== data2ChunkId) continue;
            found = true;
            for (let k = 0; k < data1Chunk.length; k++) {
                if (data1Chunk[k] === data2Chunk[k]) continue;
                result.modified.push({
                    id: data1ChunkId,
                    before: data1Chunk[k],
                    after: data2Chunk[k],
                });
            }
        }
        if (!found) result.removed.push(data1Chunk);
    }
    for (let i = 0; i < data2.length; i++) {
        const data2Chunk = data2[i];
        const data2ChunkId = data2Chunk[0];
        let found = false;
        for (let j = 0; j < data1.length; j++) {
            const data1Chunk = data1[j];
            const data1ChunkId = data1Chunk[0];
            if (data2ChunkId !== data1ChunkId) continue;
            found = true;
        }
        if (!found) result.added.push(data2Chunk);
    }

    return result;
}

module.exports = compareSquat;