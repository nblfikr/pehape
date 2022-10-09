/**
 * str_split — Convert a string to an array
 * @param str - The string to be convert.
 * @param len - Maximum length of the chunk.
 * @returns If the optional length parameter is specified, the returned array will be broken down into chunks with each being length in length, except the final chunk which may be shorter if the string does not divide evenly. The default length is 1, meaning every chunk will be one byte in size.
 */
export const str_split = (str: string, len?: number): string[] | false => {
    if (typeof len !== "undefined" && typeof len === "number") {
        if (len < 0) return false;

        const arr: string[] = [];
        let result = "";
        let counter = 0;
        for (let i=0; i<str.length; i++) {
            result = result + str[i];
            counter++;
            
            if (counter === len || i === str.length - 1) {
                arr.push(result);
                result = "";
                counter = 0;
            }
        }

        return arr;
    }

    return str.split("");
};
  