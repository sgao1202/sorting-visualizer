export const mergeSort = array => {
    let animations = [];
    let scratch = array.slice(0);
    mergeSortH(0, array.length - 1);
    return animations;

    function mergeSortH(lo, hi) {
        if (lo < hi) {
            const mid  = Math.floor(lo + (hi - lo) / 2);
            mergeSortH(lo, mid);
            mergeSortH(mid + 1, hi);
    
            let l = lo;
            let h = mid + 1;
            for (let k = lo; k <= hi; k++) {
                animations.push([l, h]);
                animations.push([l, h]);
                if (l <= mid && (h > hi || array[l] <= array[h])) {
                    // add swap property to current animation object
                    scratch[k] = array[l];
                    animations.push([k, array[l]]);
                    l++;
                } else {
                    scratch[k] = array[h];
                    animations.push([k, array[h]]);
                    h++;
                }
            }
            
            for (let j = lo; j <= hi; j++) {
                array[j] = scratch[j];
            }
        }
    } 
};
