export const mergeSort = array => {
    let scratch = array.slice(0);
    mergeSortH(0, array.length - 1);
    return array;

    function mergeSortH(lo, hi) {
        if (lo < hi) {
            const mid  = Math.floor(lo + (hi - lo) / 2);
            mergeSortH(lo, mid);
            mergeSortH(mid + 1, hi);
    
            let l = lo;
            let h = mid + 1;
            for (let k = lo; k <= hi; k++) {
                if (l <= mid && (h > hi || array[l] <= array[h])) {
                    scratch[k] = array[l];
                    l++;
                } else {
                    scratch[k] = array[h];
                    h++;
                }
            }
            
            for (let j = lo; j <= hi; j++) {
                array[j] = scratch[j];
            }
        }
    } 
};
