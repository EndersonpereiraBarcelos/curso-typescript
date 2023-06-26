type MapStringCallBack = (item: string) => string; //Tipando uma função

export function mapString(array: string[], callbackfn: MapStringCallBack): string[] {
    const newArray: string[] = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callbackfn(item));
    }
    return newArray;
}

const abc = ["abc", "abc", "abc"];
const abcMapped = mapString(abc, (item) => item.toUpperCase());

console.log(abcMapped);
