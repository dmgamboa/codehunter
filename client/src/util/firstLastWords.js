// Gets the first word at index 0 and the last word and index str.length - 1

const firstLast = (str) => {
    let arr = str.split(" ");
    console.log(arr);
    let first = arr[0];
    let last = arr.pop();
    return { firstName: first, lastName: last };
};

export default firstLast;
