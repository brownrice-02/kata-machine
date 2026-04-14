export default function bs_list(haystack: number[], needle: number): boolean {

    let lo = 0;
    let hi = haystack.length;

    while(hi > lo) {

        let mid = Math.floor(lo + (hi - lo) / 2);
        let v = haystack[mid];

        if(v === needle) {
            return true;
        } else if(v > needle) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    return false;
}