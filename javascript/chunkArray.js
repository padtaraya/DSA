const chunkSize = 3
const arrayChunk = [1,2,3,4,2,4,5,2,3,5,2,4,2,1,4,2,4,5,1,3,52,21,23,234,23,4,2,3,23,4,23,4,23,4,23,4,23,4,1213,,12,]
for(let i = 0; i < arrayChunk.length; i += chunkSize ){
    // console.log(`chunk before  ${chunk}`);
    const chunk = arrayChunk.slice(i, i + chunkSize)
    console.log(`chunkSize after  ${chunk}`);
    try {
        console.log(`chunk in try ${chunk}`);
        console.log(`chunkSize in try ${chunkSize}`);
    } catch (error) {
        console.log(error);
    }
}